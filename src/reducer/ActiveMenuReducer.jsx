export const ActiveMenuReducer = (state, action) => {
  switch (action.type) {
    case "Add_Active_ID":
      return action.payload;

    case "REMOVE_All_ID":
      return {};

    default:
      return state;
  }
};
