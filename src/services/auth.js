import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = 'http://your-api-url.com/api';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};

export const isTokenValid = () => {
  const user = getCurrentUser();
  if (user && user.token) {
    const decodedToken = jwtDecode(user.token);
    return decodedToken.exp * 1000 > Date.now();
  }
  return false;
};

export const getAuthHeader = () => {
  const user = getCurrentUser();
  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
};
