import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, hotelsEndpoint } from '../API/EndPoints';
import { signInUserAction } from '../Actions';
import Nav from '../Components/Nav';
import { FormContainer, StyledForm } from '../Assets/StyledSignFrom';
import localUser from '../Helpers';

const SignIn = () => {
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
          localStorage.setItem(
            'user',
            JSON.stringify({ ...res.data.user, loggedIn: true }),
          );
          dispatch(signInUserAction(user));
          history.push('/hotels');
        }
      });
  };

  useEffect(() => {
    if (localUser) history.push('/hotels');
  }, []);

  return (
    <FormContainer
      className="d-flex justify-content-center align-items-center"
    >
      <Nav />
      <StyledForm className="d-flex flex-column m-4 align-items-center text-center" onSubmit={handleSubmit}>
        <span className="mb-3 display-5 fw-normal">Sign in</span>
        <span className="mb-5 ">
          Hello there! Sign in and start planning your next vacations
        </span>
        <input
          className="mb-4 userName"
          type="text"
          name="name"
          value={userName}
          placeholder="Enter your name"
          onChange={handleName}
          required
        />
        <button className="mb-5 sign-btn" type="submit">
          Sign in
        </button>
        <span className="text-secondary">
          Don&apos;t have an account?
          {' '}
          <Link to="/signup">Sign up</Link>
        </span>
      </StyledForm>
    </FormContainer>
  );
};

export default SignIn;
