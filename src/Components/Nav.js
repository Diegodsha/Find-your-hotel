import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { BrandName } from '../Assets/StyledHome';
import { BASE_URL, hotelsEndpoint } from '../API/EndPoints';
import { setLogoutAction } from '../Actions';
import StyledNav from '../Assets/StyledNav';

const Nav = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    axios
      .delete(`${BASE_URL}${hotelsEndpoint.logOutUser}`, {
        withCredentials: true,
      })
      .then(() => {
        localStorage.removeItem('user');
        dispatch(setLogoutAction());
        history.push('/');
      });
  };
  return (
    <StyledNav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-2 px-md-5 py-2">
      <div className="container-fluid">
        {user.loggedIn === false ? (
          <Link to="/" className="text-dark text-decoration-none">
            <BrandName>Square</BrandName>
          </Link>
        ) : (
          <Link to="/" className="text-dark text-decoration-none">
            <BrandName>{`${user.user.name ?? 'Square'}`}</BrandName>
          </Link>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          {user.loggedIn === false ? (
            <ul className="navbar-nav justify-content-between align-items-center">
              <li className="nav-item d-lg-flex my-2 my-lg-0">
                <Link
                  to="/signin"
                  className="nav-link active mx-3 p-0 fw-bold"
                  aria-current="page"
                >
                  Sign in
                </Link>
              </li>

              <li>
                <Link to="/signup" className="nav-link categories ms-3 logout">
                  Sign Up
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav justify-content-between">
              <li className="nav-item d-lg-flex my-3 my-lg-0">
                <Link
                  to="/"
                  className="nav-link active mx-3 p-0 fw-bold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item d-lg-flex mb-3 my-lg-0">
                <Link
                  to="/favourites"
                  className="nav-link active mx-3 p-0 fw-bold"
                >
                  Favourites
                </Link>
              </li>

              <li>
                <button className="nav-link active mx-3 mb-3 mb-lg-0 fw-bold logout" type="button" onClick={() => handleLogOut()}>
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;
