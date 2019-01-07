const initialStates = {
  username: "admin"
};

export default (states = initialStates, action) => {
  switch (action.type) {
    case "changeusername":
      return {
        ...states,
        username: action.payload
      };
    default:
      return states;
  }
};
