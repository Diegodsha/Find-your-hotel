/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, hotelsEndpoint } from '../API/EndPoints';
import { signInUserAction } from '../Actions';

const SignIn = () => {
  //   const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, setuserName] = useState('');

  const handleName = (e) => {
    setuserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_URL}${hotelsEndpoint.signInUser}`,
        {
          name: userName,
        },
        { withCredentials: true },
      )
      .then((res) => {
        const { user } = res.data;
        if (res.data.signed_in === true) {
          dispatch(signInUserAction(user));
          history.push('/home');
          console.log('Sign in successful', res.data);
        }
      })
      .catch((err) => console.log('Sign in error', err));
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
      <form className="d-flex flex-column " onSubmit={handleSubmit}>
        <span className="mb-2 text-center display-5">Sign in</span>
        <span className="mb-5">
          Hello there! Sign in and start planning your next vacations
        </span>
        <input
          className="mb-4"
          type="text"
          name="name"
          value={userName}
          placeholder="Enter your name"
          onChange={handleName}
          required
        />
        <button className="mb-5" type="submit">
          Sign in
        </button>
        <span>
          Don&apos;t have an account?
          <Link to="/signup">Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
