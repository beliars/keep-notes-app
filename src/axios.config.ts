import axios from 'axios';

import authService from './shared/services/auth.service';

axios.defaults.baseURL = 'http://localhost:2380';

axios.interceptors.request.use((config) => {
  const token = authService.getSessionToken;
  if (!!token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (err) => Promise.reject(err));