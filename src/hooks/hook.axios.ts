import axios from "axios";

const errorArry = [401, 403, 406, 500, 400];

const instance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_PRODUCTION === "true"
      ? process.env.NEXT_PUBLIC_SERVER
      : "http://localhost:5000",
  timeout: 120 * 1000,
  headers: { Accept: "application/json" },
  withCredentials: true,
});
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (errorArry.includes(error.response?.status)) {
      console.log(error);
      return Promise.reject(error.response);
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
