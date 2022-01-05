export const MenuReducer = (state, action) => {
  switch (action.type) {
    case "Add_LIST":
      return action.payload;

    case "REMOVE_All":
      return {};

    default:
      return state;
  }
};
