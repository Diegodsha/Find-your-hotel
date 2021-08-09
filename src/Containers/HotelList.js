import PropTypes from 'prop-types';
import HotelCard from '../Components/HotelCard';
import Nav from '../Components/Nav';

const HotelList = ({ hotels }) => (
  <div
    className="row g-0"
    style={{
      marginTop: '4rem',
      rowGap: '20px',
      columnGap: '20px',
      justifyContent: 'space-evenly',
    }}
  >
    <Nav />
    {hotels.map((hotel) => (
      <HotelCard key={hotel.id} hotel={hotel} />
    ))}
  </div>
);

HotelList.propTypes = {
  hotels: PropTypes.isRequired,
};

export default HotelList;
