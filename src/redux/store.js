import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import gameReducer from "./gameReducer";
import reducer from "./reducer";
import statusReducer from "./statusReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const setupStore = () => {
  const store = createStore(
    combineReducers({
      current_game: gameReducer("current_game"),
      access_token: statusReducer("access_token", null),
      user_games: reducer("user_games"),
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

export default setupStore;
