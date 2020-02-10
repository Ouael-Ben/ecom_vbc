import axios from "axios";
import { BASE_URL_API } from "../services/api/constants";
import AccessTokenStorage from "../utils/auth/AccessTokenStorage";
import customHistory from "../utils/history";

let instance = axios.create({
  baseURL: `${BASE_URL_API}/api`
});

instance.interceptors.request.use(
  request => {
    const token = AccessTokenStorage.get();
    if (token) request.headers["Authorization"] = "Bearer " + token;
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) customHistory.push("/login");
    return Promise.reject(error);
  }
);

export default instance;
