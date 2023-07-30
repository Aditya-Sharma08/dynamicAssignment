const initialState = {
  title: "Testing your code doesn't have to be painful.",
  description:
    "Cypress is a powerful Javascript-based testing platform that makes automated testing a joy, not a chore.",
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_HERO":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default heroReducer;
