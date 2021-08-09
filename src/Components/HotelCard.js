/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GrFavorite } from 'react-icons/gr';

const HotelCard = ({ hotel }) => {
  return (
    <div className="card bg-dark text-white col-12 col-md-4 col-lg-3">
      <img src={hotel.img_url} className="card-img img-fluid" alt={hotel.name} />
      <div className="card-img-overlay">
        <GrFavorite />
        <h5 className="card-title">{hotel.name}</h5>
        {/* <p className="card-text">
          {hotel.description}
        </p> */}
        <p className="card-text">$ {hotel.price_nigth}</p>
        <p className="card-text">{hotel.score}</p>
        <button type="button">More details</button>
      </div>
    </div>
  );
};

export default HotelCard;
