const initialState = {
  address: "65/2, Bagmane Tech Park, Block 'C'",
  phone: "125189",
  email: "ik.vishwanath@cypress.com",
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CONTACT":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
