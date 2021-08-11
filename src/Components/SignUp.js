import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, hotelsEndpoint } from '../API/EndPoints';
import { signUpUserAction } from '../Actions';
import Nav from './Nav';
import { FormContainer, StyledForm } from '../Assets/StyledSignFrom';

const SignUp = () => {
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
          localStorage.setItem('user', JSON.stringify({ ...res.data.user, loggedIn: true }));
          dispatch(signUpUserAction(user));
        }
      });
  };

  return (
    <FormContainer
      className="d-flex justify-content-center align-items-center"
    >
      <Nav />
      <StyledForm className="d-flex flex-column m-4 align-items-center text-center" onSubmit={handleSubmit}>
        <span className="mb-3 text-center display-5 fw-normal">Sign Up</span>
        <span className="mb-5">
          Hello there! Sign up and start planning your next vacations
        </span>
        <input
          className="mb-4 userName"
          type="text"
          name="userName"
          value={userInfo.userName}
          placeholder="Enter your name"
          onChange={handleUserInfo}
          required
        />
        <input
          className="mb-5 userEmail"
          type="email"
          name="userEmail"
          value={userInfo.userEmail}
          placeholder="Enter your email"
          onChange={handleUserInfo}
          required
        />
        <button className="mb-5 sign-btn" type="submit">
          Sign up
        </button>
        <span className="text-secondary">
          Already have an account?
          {' '}
          <Link to="/signin">Sign in</Link>
        </span>
      </StyledForm>
    </FormContainer>
  );
};

export default SignUp;
