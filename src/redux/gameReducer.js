export const gameReducer = (entity = "", initialState) => {
  return (state = initialState || {}, action) => {
    switch (action.type) {
      case `SET_${entity.toUpperCase()}`:
        return action.update;
      case `UPDATE_${entity.toUpperCase()}`:
        return { ...state, ...action.update };
      default:
        return state;
    }
  };
};

export default gameReducer;
