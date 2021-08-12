import { useSelector } from 'react-redux';
import HotelList from './HotelList';

const Hotels = () => {
  const hotels = useSelector((state) => state.hotels);

  return (
    <div>
      <HotelList hotels={hotels} />
    </div>
  );
};

export default Hotels;
