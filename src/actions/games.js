import { notification } from "antd";
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
  getGame({ game_id: res.data._id });
  notification.open({
    message: "Game created",
    description: `You created ${res.data.game_name}. Enjoy!`,
  });
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
  return res.data;
};

export const updateCards = async ({ newCards, side }) => {
  const cards = store.getState().current_game[`${side}_cards`];
  const updated_cards = [
    ...cards.filter(
      (item) => !newCards.map((card) => card._id).includes(item._id)
    ),
    ...newCards,
  ];
  const res = await updateGame({
    update: { [`${side}_cards`]: updated_cards },
  });
  return res;
};

export const deleteGame = async () => {
  let res;
  const { access_token, current_game } = store.getState();
  try {
    res = await Axios.delete(
      `/api/game/${current_game._id}`,
      createHeader(access_token)
    );
  } catch (e) {
    console.log(e);
  }
  store.dispatch({ type: "REMOVE_USER_GAMES", item: res.data });
  notification.open({
    message: "Game removed",
    description: `You deleted "${res.data.game_name}" permanently.`,
  });
  const { user_games } = store.getState();
  user_games.length > 0
    ? getGame({ game_id: user_games[0]._id })
    : store.dispatch({ type: "SET_CURRENT_GAME", update: {} });
  return res.data;
};
