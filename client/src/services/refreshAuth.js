import axios from "axios";
import { store } from "../store";
import { setCredentials, logout } from "../features/auth/authSlice";
const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const refreshAuth = async (failedRequest) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/refresh-token`
    );
    const { accessToken, user } = response.data.data;
    store.dispatch(setCredentials({ accessToken, user }));

    failedRequest.response.config.headers[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    return Promise.resolve();
  } catch (error) {
    store.dispatch(logout());
    return Promise.reject(error);
  }
};

export default refreshAuth;
