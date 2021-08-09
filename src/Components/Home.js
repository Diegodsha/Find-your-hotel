/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import Footer from './Footer';
import { setLogoutAction } from '../Actions';
import { BASE_URL, hotelsEndpoint } from '../API/EndPoints';
import {
  BrandName,
  FindBtn,
  StyledSection1,
  StyledSection2,
  StyledSection3,
  StyledSection4,
  StyledSection5,
} from '../Assets/StyledHome';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleLogOut = () => {
    console.log(`${BASE_URL}${hotelsEndpoint.logOutUser}`);
    axios
      .delete(`${BASE_URL}${hotelsEndpoint.logOutUser}`, {
        withCredentials: true,
      })
      .then(() => dispatch(setLogoutAction()))
      .catch((err) => console.log('logout error:', err));
  };
  return (
    <>
      {/* <button type="button" onClick={() => handleLogOut()}>
        logout
      </button>
      <p className="text-danger">{user.loggedIn ? 'true' : 'false'}</p> */}
      <StyledSection1 className="pe-1 pe-md-5 pt-4 d-flex position-relative text-white flex-column">
        <div className="d-flex justify-content-between">
          <BrandName>Square</BrandName>

          {user.loggedIn === false ? (
            <span className="sign d-flex align-items-center">
              <Link to="/signin" className="me-5 sign-in">
                SIGN IN
              </Link>
              <Link to="/signup" className="sign-up">
                SIGN UP
              </Link>
            </span>
          ) : (
            <span className="sign d-flex align-items-center">
              <Link to="/hotels" className="me-5 sign-in">
                Hotels
              </Link>
              <Link to="/favorites" className="sign-up">
                Favorites
              </Link>
            </span>
          )}
        </div>
        <div className="d-flex flex-column position-absolute find">
          <h1 className="find-intro mb-0">
            Find the best hotels
            <br />
            in Cancún
          </h1>
          <span className="find-offer my-4">
            The best offers for you.
            <br />
            Spend your vacations at the most comfortable place
          </span>
          <Link to="/hotels">
            <FindBtn type="button" className=" text-white">
              FIND YOUR PLACE
            </FindBtn>
          </Link>
        </div>
        <a href="#setcion-2" className="text-white">
          <BsChevronDown className="position-absolute arrow-down" />
        </a>
      </StyledSection1>
      <StyledSection2 id="setcion-2" className="row p-5 g-0">
        <div className="col-12 d-flex flex-column text-center">
          <span className="text-secondary fw-bold simple mb-4">
            SIMPLE AND FAST WAY TO FIND
          </span>
          <h3 className="comf display-6">
            Comfortable hotels from reliable brands
          </h3>
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column text-center text-lg-start">
          <h3 className=" display-6 ">
            The best places at your fingertips at any time
          </h3>
          <span className="my-5 best text-secondary">
            You will have the best options to decide where to spend your
            vacations. Full information that will save your from unofficial
            sites and bring you the best online promotions
          </span>
          <FindBtn
            type="button"
            className="align-self-center align-self-lg-start"
          >
            LEARN MORE
          </FindBtn>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center img-cont">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/21/35/2a/resort-pool.jpg?w=1200&h=-1&s=1"
            alt="cancun"
            className="hotel-img img-fluid mt-4 mt-lg-0"
          />
        </div>
      </StyledSection2>
      <StyledSection3 className="row p-5 g-0">
        <div className="col-12 col-lg-6 d-flex justify-content-center position-relative img-cont">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3b/56/e4/hero-shot-at-night.jpg?w=1200&h=-1&s=1"
            alt="cancun"
            className="hotel-img htl-1 mb-4 mb-lg-0 position-absolute"
          />
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/e0/66/e3/westin-resort-spa-cancun.jpg?w=1200&h=-1&s=1"
            alt="cancun"
            className="hotel-img htl-2 mt-4 mt-lg-0 position-absolute"
          />
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/e9/31/31/infinite-master-suite.jpg?w=1200&h=-1&s=1"
            alt="cancun"
            className="hotel-img htl-3 mt-4 mt-lg-0 position-absolute"
          />
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column text-center text-md-start ps-3">
          <h3 className="comf display-6 mb-5">
            Only best hotels for your vacations in Cancún
          </h3>
          <span className=" text-secondary">
            300+ hotels at your disposal. Only the best brands. We will find
            best place for you and the conditions for a safe transaction and
            comfortable stay
          </span>
          <Link to="/hotels">
            <FindBtn type="button" className="mt-5">
              FIND YOUR PLACE
            </FindBtn>
          </Link>
        </div>
      </StyledSection3>
      <StyledSection4 className="row p-5 g-0">
        <div className="col-12 d-flex flex-column align-items-center">
          <span className="text-secondary fw-bold my-4">
            PEOPLE ARE ALREADY ENJOYING THE SERVICE
          </span>
          <h3 className="display-6 op-title">Look what these have to say</h3>
        </div>
        <div className="col-12">reviews</div>
      </StyledSection4>
      <StyledSection5 className="d-flex flex-column align-items-center">
        <h3 className="my-4 text-white">Be allways comfortable</h3>
        <Link to="/hotels">
          <FindBtn type="button">FIND YOUR PLACE</FindBtn>
        </Link>
      </StyledSection5>
      <Footer />
    </>
  );
};

export default Home;
