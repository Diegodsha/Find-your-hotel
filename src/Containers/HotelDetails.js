import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BsChevronDown } from 'react-icons/bs';
import { BASE_URL, hotelsEndpoint } from '../API/EndPoints';
import Details from '../Assets/Details';
import Review from '../Components/Review';
import ReviewForm from '../Components/ReviewForm';
import StyledList from '../Assets/StyledList';

const HotelDetails = ({ match }) => {
  const [Favourites, setFavourites] = useState([]);
  const [Hotel, setHotel] = useState({});
  const [Reviews, setReviews] = useState([]);
  const { id: hotelId } = match.params;
  const user = useSelector((state) => state.user);
  const localUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : false;

  const history = useHistory();
  const getFavourites = () => {
    axios
      .get(`${BASE_URL}${hotelsEndpoint.users}/${localUser.id}/favourites`)
      .then((res) => {
        const ids = res.data.map((hotel) => hotel.hotel_id);
        setFavourites([...Favourites, ...ids]);
      });
  };

  const getReviews = () => {
    axios
      .get(`${BASE_URL}${hotelsEndpoint.hotels}/${hotelId}/hotel_reviews`)
      .then((res) => setReviews([...res.data]));
  };
  const getHotelInfo = () => {
    axios.get(`${BASE_URL}${hotelsEndpoint.hotels}/${hotelId}`).then((res) => {
      setHotel({ ...Hotel, ...res.data.data.attributes });
    });
  };

  const addToFavourites = () => {
    if (localUser !== false) {
      if (!Favourites.includes(Number(hotelId))) {
        axios
          .post(
            `${BASE_URL}${hotelsEndpoint.users}/${localUser.id}/favourite/hotel`,
            {
              favourite_hotel: {
                user_id: localUser.id,
                hotel_id: hotelId,
              },
            },
            { withCredentials: true },
          )
          .then((res) => {
            const id = res.data.hotel_id;
            setFavourites([...Favourites, id]);
          });
      }
    } else {
      history.push('/signin');
    }
  };

  const addReview = (review) => {
    axios
      .post(`${BASE_URL}${hotelsEndpoint.users}/${localUser.id}/review/hotel`, {
        review: {
          title: review.reviewTitle,
          body: review.reviewBody,
          score: review.reviewScore,
          user_id: user.id,
          hotel_id: hotelId,
        },
      })
      .then((res) => {
        setReviews([...Reviews, { ...res.data }]);
      });
  };
  useEffect(() => {
    if (localUser === false) {
      history.push('/signin');
      return;
    }
    getHotelInfo();
    getReviews();
    getFavourites();
  }, []);
  return (
    <Details className="row align-items-center g-0 flex-column">
      <div className="col-12  d-flex align-items-center py-1">
        <Link to="/hotels" className="text-dark">
          <IoIosArrowBack style={{ fontSize: '40px' }} />
        </Link>
        <span
          className="fw-bold"
          style={{ width: '100%', textAlign: 'center' }}
        >
          {Hotel.name}
        </span>
      </div>
      <div className="col-12 col-md-11 col-lg-8 card mb-5">
        <img src={Hotel.img_url} className="card-img-top" alt={Hotel.name} />
        <div className="card-img-overlay text-white fw-bold">
          <p className="card-text rating">
            Rating :
            {' '}
            {Hotel.avg_score}
          </p>
          <p className="card-text price">
            per Night $
            {Hotel.price_nigth}
          </p>
        </div>
        <div className="card-body p-5">
          <h5 className="card-title mb-3">About this hotel</h5>
          <p className="card-text">{Hotel.description}</p>
          <p className="card-text">
            <small className="text-muted">
              Services:
              {' '}
              {Hotel.services?.split(',').join(', ')}
            </small>
          </p>
          <div className="btns-cont">
            <BsChevronDown className="mb-3 arrow-down align-self-center" />
            <button
              type="button"
              className="fav-btn p-3 text-white fw-bold"
              onClick={() => addToFavourites()}
            >
              {Favourites.includes(Number(hotelId))
                ? 'You love this hotel :)'
                : 'Add to favourites'}
            </button>
            <ReviewForm className="rev-btn" addReview={addReview} />
          </div>
        </div>
      </div>
      <StyledList className="row g-0">
        <h3 className="text-center mb-4">See what others think about us</h3>
        {Reviews.length === 0 ? (
          <p className="mb-5 text-center text-secondary">
            Leave a reviews for us
          </p>
        ) : (
          Reviews.map((review) => <Review key={review.id} review={review} />)
        )}
      </StyledList>
    </Details>
  );
};

HotelDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.string.isRequired,
    },
  }).isRequired,
};

export default HotelDetails;
