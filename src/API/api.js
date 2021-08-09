/* eslint-disable no-unused-vars */
import axios from 'axios';
import { hotelsEndpoint, BASE_URL } from './EndPoints';

const { hotels, signInUser, signUpUser } = hotelsEndpoint;

// const signIn = async () => {

// }

const getHotels = async () => {
  const res = await axios.get(`${BASE_URL}${hotels}`);
  //   console.log(res.data);
  return res.data;
};

export default getHotels;
