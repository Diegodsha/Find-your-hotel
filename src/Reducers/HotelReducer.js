import types from '../Actions/Types';

const Hotels = (state = [], action) => {
  switch (action.type) {
    case types.fetchHotels:
      return [...action.hotels];

    default:
      return state;
  }
};

export default Hotels;
