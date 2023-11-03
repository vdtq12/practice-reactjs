import axios from "axios";
import Cookies from "js-cookie";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const setupAxiosInterceptors = (onUnauthenticated) => {
  axiosClient.interceptors.request.use(
    async (config) => {
      const auth = Cookies.get("token");
      if (auth) {
        config.headers["X-Authorization"] = `Bearer ${auth}`;
        if (config.params) {
          config.paramsSerializer = (params) => {
            return queryString.stringify(params);
          };
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.response.use(
    async (response) => {
      if (response && response.data) {
        return response.data;
      }
      return response;
    },
    (error) => {
      onUnauthenticated();
      return Promise.reject(error);
    }
  );
};

export default axiosClient;
