import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.response.use(
  (val: AxiosResponse) => {
    return Promise.resolve(val);
  },
  (error) => {
    if (import.meta.env.NODE_ENV === "development") {
      console.log(error);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
