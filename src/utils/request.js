import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://todoo.5xcamp.us'
});

request.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error.response.data);
  }
);