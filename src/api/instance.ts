import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer: blabla-token";

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
