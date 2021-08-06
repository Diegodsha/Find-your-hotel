/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <section
        className="px-5 pt-4 d-flex position-relative text-white"
        style={{
          minHeight: '100vh',
          background:
            'linear-gradient(rgba(17, 18, 18, 0.41), rgba(0, 0, 1, 0.41)),url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/47/f2/ef/hyatt-zilara-cancun.jpg?w=1200&h=-1&s=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="d-flex justify-content-between">
          <span>Square</span>
          <span>
            <span className="me-5">SIGN IN</span>
            <span>SIGN UP</span>
          </span>
        </div>
        <div className="d-flex flex-column align-self-center">
          <span>Find the best hotels in Cancún</span>
          <span>
            The best offers for you. Spend your vacations at the most
            comfortable place
          </span>
          <Link to="/hotels">
            <button type="button">FIND YOUR PLACE</button>
          </Link>
        </div>
        <span className="position-absolute bottom-0 "> arrow down</span>
      </section>
      <section className="row p-5 g-0" style={{ minHeight: '100vh' }}>
        <div className="col-12">
          <span>SIMPLE AND FAST WAY TO FIND</span>
          <span>Comfortable hotels from reliable brands</span>
        </div>
        <div className="col-12 col-md-6">
          <span>The best places at your fingertips at any time</span>
          <span>
            You will have the best options to decide where to spend your
            vacations. Full information that will save your from unofficial
            sites and bring you the best online promotions
          </span>
          <button type="button">LEARN MORE</button>
        </div>
        <div className="col-12 col-md-6">
          {/* <div style={{
          background:
            'linear-gradient(rgba(17, 18, 18, 0.41), rgba(0, 0, 1, 0.41)),url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/47/f2/ef/hyatt-zilara-cancun.jpg?w=1200&h=-1&s=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}/> */}

          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/0b/4a/e7/the-grand-at-moon-palace.jpg?w=1200&h=-1&s=1"
            alt="cancun"
            style={{ width: '570px' }}
          />
        </div>
      </section>
      <section className="row p-5 g-0" style={{ minHeight: '100vh' }}>
        <div className="col-12 col-md-6">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/0b/4a/e7/the-grand-at-moon-palace.jpg?w=1200&h=-1&s=1"
            alt="cancun"
            style={{ width: '570px' }}
          />
        </div>
        <div className="col-12 col-md-6">
          <span>Only best hotels for your vacations in Cancún</span>
          <span>
            300+ hotels at your disposal. Only the best brands. We will find
            best place for you and the conditions for a safe transaction and
            comfortable stay
          </span>
          <Link to="/hotels">
            <button type="button">FIND YOUR PLACE</button>
          </Link>
        </div>
      </section>
      <section className="row p-5 g-0" style={{ minHeight: '100vh' }}>
        <div className="col-12">
          <span>PEOPLE ARE ALREADY ENJOYING THE SERVICE</span>
          <span>Look what these have to say</span>
        </div>
        <div className="col-12">reviews</div>
      </section>
      <section
        className="d-flex flex-column"
        style={{
          minHeight: '20vh',
          background:
            'linear-gradient(rgba(17, 18, 18, 0.41), rgba(0, 0, 1, 0.41)),url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/47/f2/ef/hyatt-zilara-cancun.jpg?w=1200&h=-1&s=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <span>Be allways comfortable</span>
        <Link to="/hotels">
          <button type="button">FIND YOUR PLACE</button>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Home;
