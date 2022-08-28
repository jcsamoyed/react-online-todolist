import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://todoo.5xcamp.us'
});

request.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error.response.data);
  }
);