import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, hotelsEndpoint } from '../API/EndPoints';
import { fetchHotels, setLogginAction, setLogoutAction } from '../Actions';
import Hotels from './Hotels';
import Home from './Home';
import SignIn from '../Containers/SignIn';
import SignUp from '../Containers/SignUp';
import HotelDetails from '../Containers/HotelDetails';
import Favourites from '../Containers/Favourites';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const checkLogginStatus = () => {
    axios
      .get(`${BASE_URL}${hotelsEndpoint.loggedStatus}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.logged_in && user.loggedIn === false) {
          dispatch(setLogginAction(res.data.user));
        } else if (!res.data.logged_in && user.loggedIn === true) {
          localStorage.removeItem('user');
          dispatch(setLogoutAction());
        }
      });
  };

  useEffect(() => {
    dispatch(fetchHotels());
  }, []);

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
        <Route exact path="/hotels/details/:id" component={HotelDetails} />
        <Route exact path="/favourites" component={Favourites} />
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
