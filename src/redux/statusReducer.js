export const statusReducer = (entity = "", initialState) => {
  return (state = initialState || 0, action) => {
    switch (action.type) {
      case `UPDATE_${entity.toUpperCase()}`:
        return action.update;
      default:
        return state;
    }
  };
};

export default statusReducer;
