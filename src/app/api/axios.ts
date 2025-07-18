import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // or your deployed URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
