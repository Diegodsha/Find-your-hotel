/* eslint-disable no-unused-vars */
import types from './Types';
import getHotels from '../API/api';

export const fetchHotelsAction = (hotels) => ({
  type: types.fetchHotels,
  hotels,
});

export const signInUserAction = (userIn) => ({
  type: types.signInUser,
  userIn,
});

export const signUpUserAction = (userUp) => ({
  type: types.signUpUser,
  userUp,
});

export const setLogginAction = (loggedUser) => ({
  type: types.loginUser,
  loggedUser,
});

export const setLogoutAction = () => ({
  type: types.logOutUser,
});

export const fetchHotels = () => async (dispatch) => {
  const hotels = await getHotels();
  //   console.log('waa', hotels);
  dispatch(fetchHotelsAction(hotels));
};
