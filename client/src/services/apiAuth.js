import axios from "axios";

export async function registerUser(data) {
  await axios.post("/api/users/register", data);
}

export async function loginUser(data) {
  const res = await axios.post("/api/users/login", data);
  return res;
}

export async function logoutUser() {
  await axios.post("/api/users/logout");
}

export async function refreshAccessToken() {
  await axios.post("/api/users/refresh-token");
}
