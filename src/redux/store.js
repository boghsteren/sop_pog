import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import statusReducer from "./statusReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const setupStore = () => {
  const store = createStore(
    combineReducers({
      cp_cards: reducer("cp_cards"),
      ap_cards: reducer("ap_cards"),
      notes: reducer("notes"),
      cp_warstatus: statusReducer("cp_warstatus", 0),
      ap_warstatus: statusReducer("ap_warstatus", 0),
      score: statusReducer("score", 10),
      russia_cp_vps: statusReducer("russia_cp_vps", 0),
      turn: statusReducer("turn", 1),
      action_round: statusReducer("action_round", 1),
      cp_active: statusReducer("cp_active", true),
      access_token: statusReducer("access_token", null),
      user_games: reducer("user_games"),
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

export default setupStore;
