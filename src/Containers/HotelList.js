import PropTypes from 'prop-types';

const HotelList = ({ hotels }) => (
  <div className="mt-5">
    {
        hotels.map((hotel) => (
          <h1 key={hotel.id}>{hotel.name}</h1>
        ))
    }
  </div>
);

HotelList.propTypes = {
  hotels: PropTypes.isRequired,
};

export default HotelList;
