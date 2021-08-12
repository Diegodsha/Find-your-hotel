import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { BASE_URL, hotelsEndpoint } from '../API/EndPoints';
import StyledList from '../Assets/StyledList';
import { FormContainer } from '../Assets/StyledSignFrom';
import HotelCard from '../Components/HotelCard';

const Favourites = () => {
  const [Favourites, setFavourites] = useState([]);
  const localUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : false;
  const history = useHistory();
  const hotels = useSelector((state) => state.hotels);

  const getFavourites = () => {
    axios
      .get(`${BASE_URL}${hotelsEndpoint.users}/${localUser.id}/favourites`)
      .then((res) => {
        const ids = res.data.map((hotel) => hotel.hotel_id);
        setFavourites([...Favourites, ...ids]);
      });
  };

  const removeFavorite = (hotelToRemove) => {
    axios.delete(
      `${BASE_URL}${hotelsEndpoint.users}/${localUser.id}/favourite/hotel/${hotelToRemove}`,
    ).then((res) => {
      const id = res.data.hotel_id;
      setFavourites(Favourites.filter((fav) => fav !== id));
    });
  };

  useEffect(() => {
    if (localUser === false) {
      history.push('/signin');
      return;
    }
    getFavourites();
  }, []);
  return (
    <FormContainer>
      <div className="col-12  d-flex align-items-center py-1">
        <Link to="/hotels" className="text-dark">
          <IoIosArrowBack style={{ fontSize: '40px' }} />
        </Link>
        <span
          className="fw-bold "
          style={{ width: '100%', textAlign: 'center' }}
        >
          Favourites
        </span>
      </div>
      <StyledList className="row g-0">
        {hotels
          .filter((hotel) => Favourites.includes(Number(hotel.id)))
          .map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              removeFavorite={removeFavorite}
            />
          ))}
      </StyledList>
    </FormContainer>
  );
};

export default Favourites;
