import axios from "axios";

export async function registerUser(data) {
  await axios.post("/api/auth/register", data);
}

export async function loginUser(data) {
  await axios.post("/api/auth/login", data);
}
