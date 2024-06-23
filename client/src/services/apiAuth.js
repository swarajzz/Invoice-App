import axios from "axios";

export async function registerUser(data) {
  await axios.post("/api/users/register", data);
}

export async function loginUser(data) {
  await axios.post("/api/users/login", data);
}
