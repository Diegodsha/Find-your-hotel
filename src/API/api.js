import axios from 'axios';
import { hotelsEndpoint, BASE_URL } from './EndPoints';

const { hotels } = hotelsEndpoint;

const getHotels = async () => {
  const res = await axios.get(`${BASE_URL}${hotels}`);
  return res.data.data;
};

export default getHotels;
