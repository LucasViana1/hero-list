import axios from 'axios';

const baseURL = process.env.API_URL;

const config = {
  crossDomain: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create({
  ...config,
  baseURL,
});

export default instance;
