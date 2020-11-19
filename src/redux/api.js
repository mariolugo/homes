import axios from 'axios';
import { URL } from '../constants';
const getClient = () => {
  const apiUrl = URL;

  const config = {
    baseURL: apiUrl,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const axiosInstance = axios.create(config);

  return axiosInstance;
};

const get = (endpoint) => {
  const client = getClient();
  return client
    .get(endpoint)
    .then((response) => response)
    .catch((error) => {
      return Promise.reject(error);
    });
};

export default { get };
