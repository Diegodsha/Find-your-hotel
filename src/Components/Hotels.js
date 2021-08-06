import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHotels } from '../Actions';
import HotelList from '../Containers/HotelList';

const Hotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotels());
  }, []);
  return (
    <div>
      <HotelList hotels={hotels} />
    </div>
  );
};

export default Hotels;
