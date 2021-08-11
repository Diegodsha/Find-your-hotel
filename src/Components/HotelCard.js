import PropTypes from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import StyledCard from '../Assets/StyledCard';

const HotelCard = ({ hotel, removeFavorite }) => (
  <StyledCard className="card text-white col-12 col-lg-5 mb-4 ">
    {removeFavorite ? (
      <button
        className="remove-fav"
        type="button"
        onClick={() => removeFavorite(hotel.id)}
      >
        <BsFillTrashFill />
      </button>
    ) : null}

    <img
      src={hotel.attributes.img_url}
      className="card-img "
      alt={hotel.attributes.name}
    />
    <div className="card-img-overlay d-flex flex-column justify-content-end ">
      <div className="card-details d-flex text-dark p-1 row g-0">
        <div className="p-1 card-detailsrating-title col-8">
          <h6 className="card-title">{hotel.attributes.name}</h6>
          <p className="card-text rating">
            Rating:
            {' '}
            {hotel.attributes.avg_score}
          </p>
        </div>
        <div className="p-1 price-details col-4">
          <p className="card-text per-nigth">
            $
            {' '}
            {hotel.attributes.price_nigth}
            <span className="text-secondary ">per Nigth</span>
          </p>
          <Link to={`/hotels/details/${hotel.id}`}>
            <button className="details" type="button">
              More details
            </button>
          </Link>
        </div>
      </div>
    </div>
  </StyledCard>
);

HotelCard.defaultProps = {
  removeFavorite: null,
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    attributes: PropTypes.shape({
      name: PropTypes.string.isRequired,
      img_url: PropTypes.string.isRequired,
      avg_score: PropTypes.number.isRequired,
      price_nigth: PropTypes.string.isRequired,
    }),
    id: PropTypes.string.isRequired,
  }).isRequired,
  removeFavorite: PropTypes.func,
};

export default HotelCard;
