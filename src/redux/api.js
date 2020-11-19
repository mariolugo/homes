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

// Standardize API response format across the application
const _parseResponse = ({ status, data }) => ({
  statusCode: status,
  data: data,
});

const get = (endpoint) => {
  const client = getClient();
  return client
    .get(endpoint)
    .then((response) => _parseResponse(response))
    .catch((error) => {
      return Promise.reject(error);
    });
};

export default { get };
