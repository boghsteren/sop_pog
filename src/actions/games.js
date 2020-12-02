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
  store.dispatch({ type: "ADD_USER_GAMES", item: res.data });
  return res.data;
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
  return res.data;
};

export const getGame = async ({ game_id }) => {
  let res;
  const { access_token } = store.getState();
  try {
    res = await Axios.get(`/api/game/${game_id}`, createHeader(access_token));
  } catch (e) {
    console.error(e);
  }
  store.dispatch({ type: "SET_CURRENT_GAME", update: res.data });
};

export const updateGame = async ({ update }) => {
  let res;
  const { access_token, current_game } = store.getState();
  try {
    res = await Axios.put(
      `/api/game/${current_game._id}`,
      update,
      createHeader(access_token)
    );
  } catch (e) {
    console.log(e);
  }
  store.dispatch({ type: "UPDATE_CURRENT_GAME", update: res.data });
};
