export default (state = [], action) => {
  switch (action.type) {
    case "NAMES_LOAD":
      return action.payload;
    // case "NAMES_DELETE":
    //   return state.map(name => {
    //     if (name.id === action.payload.id) {
    //       return action.payload;
    //     }
    //     return name;
    //   })
    default:
      return state;
  }
}