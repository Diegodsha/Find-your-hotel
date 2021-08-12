import PropTypes from 'prop-types';
import StyledList from '../Assets/StyledList';
import HotelCard from './HotelCard';
import Nav from './Nav';

const HotelList = ({ hotels }) => (
  <StyledList style={{ paddingTop: '5rem' }} className="row g-0">
    <Nav />
    {hotels.map((hotel) => (
      <HotelCard key={hotel.id} hotel={hotel} />
    ))}
  </StyledList>
);

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default HotelList;
