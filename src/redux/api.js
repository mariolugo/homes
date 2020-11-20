import axios from 'axios';
import { URL } from '../constants';

/**
 * Create the axios client
 * We can add headers and maybe security tokens
 */
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

/**
 *
 * @param {string} endpoint endpoint to call
 */
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
