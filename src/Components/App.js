/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, hotelsEndpoint } from '../API/EndPoints';
import { setLogginAction, setLogoutAction } from '../Actions';
import Hotels from './Hotels';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Nav from './Nav';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const checkLogginStatus = () => {
    axios
      .get(`${BASE_URL}${hotelsEndpoint.loggedStatus}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.logged_in && user.loggedIn === false) {
          dispatch(setLogginAction(res.data.user));
        } else if (!res.data.logged_in && user.loggedIn === true) {
          dispatch(setLogoutAction());
        }
      })
      .catch((err) => console.log('loggin status error:', err));
  };

  useEffect(() => {
    checkLogginStatus();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/hotels" component={Hotels} />
        {/* <Route exact path="/hotels/:id" component={Home} />
        <Route exact path="/favourites" component={Home} /> */}
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
