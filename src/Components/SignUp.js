/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, hotelsEndpoint } from '../API/EndPoints';
import { signUpUserAction } from '../Actions';

const SignUp = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({ userName: '', userEmail: '' });

  const handleUserInfo = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_URL}${hotelsEndpoint.signUpUser}`,
        {
          user: {
            name: userInfo.userName,
            email: userInfo.userEmail,
          },
        },
        { withCredentials: true },
      )
      .then((res) => {
        const { user } = res.data;
        if (res.data.status === 'created') {
          dispatch(signUpUserAction(user));
          console.log('Sign up successful', user);
        }
      })
      .catch((err) => console.log('Sign up error', err));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(rgba(253, 253, 253, 0.84), rgba(253, 253, 253, 0.84)),url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/47/f2/ef/hyatt-zilara-cancun.jpg?w=1200&h=-1&s=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <span className="mb-2 text-center display-5">Sign Up</span>
        <span className="mb-5">
          Hello there! Sign up and start planning your next vacations
        </span>
        <input
          className="mb-4"
          type="text"
          name="userName"
          value={userInfo.userName}
          placeholder="Enter your name"
          onChange={handleUserInfo}
          required
        />
        <input
          className="mb-5"
          type="email"
          name="userEmail"
          value={userInfo.userEmail}
          placeholder="Enter your email"
          onChange={handleUserInfo}
          required
        />
        <button className="mb-5" type="submit">
          Sign up
        </button>
        <span>
          Already have an account?
          <Link to="/signin">Sign in</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
