import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://todoo.5xcamp.us'
});