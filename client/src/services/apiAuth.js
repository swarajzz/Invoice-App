import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

axios.defaults.withCredentials = true

export async function registerUser(data) {
  await axios.post(`${API_BASE_URL}/api/users/register`, data);
}

export async function loginUser(data) {
  const res = await axios.post(`${API_BASE_URL}/api/users/login`, data);
  return res;
}

export async function logoutUser() {
  await axios.post(`${API_BASE_URL}/api/users/logout`);
}

export async function resetUser(data) {
  await axios.post(`${API_BASE_URL}/api/users/reset`, data);
}

export async function refreshAccessToken() {
  await axios.post(`${API_BASE_URL}/api/users/refresh-token`);
}
