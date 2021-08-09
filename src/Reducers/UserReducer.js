import types from '../Actions/Types';

const User = (state = { user: {}, loggedIn: false }, action) => {
  switch (action.type) {
    case types.signInUser:
      return { ...state, user: { ...action.userIn }, loggedIn: true };
    case types.signUpUser:
      return { ...state, user: { ...action.userUp }, loggedIn: true };
    case types.loginUser:
      return { ...state, user: { ...action.loggedUser }, loggedIn: true };
    case types.logOutUser:
      return { user: {}, loggedIn: false };
    default:
      return state;
  }
};

export default User;
