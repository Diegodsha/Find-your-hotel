import types from './Types';
import getHotels from '../API/api';

export const fetchHotelsAction = (hotels) => ({
  type: types.fetchHotels,
  hotels,
});

export const fetchHotels = () => async (dispatch) => {
  const hotels = await getHotels;
  dispatch(fetchHotelsAction(hotels));
};
