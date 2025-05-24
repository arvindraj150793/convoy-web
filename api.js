import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});