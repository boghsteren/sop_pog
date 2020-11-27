import Axios from "axios";
import { store } from "../index";

const createHeader = (token) => {
  return {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };
};

export const createGame = async ({ game_name }) => {
  let res;
  const { access_token } = store.getState();
  try {
    res = await Axios.post(
      "/api/game",
      { game_name },
      createHeader(access_token)
    );
  } catch (e) {
    console.log(e);
  }
  return res;
};

export const getMyGames = async () => {
  let res;
  const { access_token } = store.getState();
  try {
    res = await Axios.get(`/api/my_games`, createHeader(access_token));
    store.dispatch({
      type: `SET_USER_GAMES`,
      items: res.data,
    });
  } catch (e) {
    console.error(e);
  }
};

export const getGame = async ({ game_id }) => {
  let res;
  const { access_token } = store.getState();
  try {
    res = await Axios.get(`/api/game/${game_id}`, createHeader(access_token));
    const {
      cp_cards,
      ap_cards,
      score,
      turn,
      action_round,
      ap_warstatus,
      cp_warstatus,
      cp_active,
    } = res.data;
    const game_states = [
      { status: "score", update: score },
      { status: "turn", update: turn },
      { status: "action_round", update: action_round },
      { status: "cp_warstatus", update: cp_warstatus },
      { status: "ap_warstatus", update: ap_warstatus },
      { status: "cp_active", update: cp_active },
    ];
    store.dispatch({
      type: `SET_AP_CARDS`,
      items: ap_cards,
    });
    store.dispatch({
      type: `SET_CP_CARDS`,
      items: cp_cards,
    });
    game_states.forEach((item) =>
      store.dispatch({
        type: `UPDATE_${item.status.toUpperCase()}`,
        update: item.update,
      })
    );
  } catch (e) {
    console.error(e);
  }
};
