import axiosClient from "./axiosClient";

const deviceController = {
  getDevice: (params) => {
    return axiosClient.get(process.env.DEVICE_API_URL, {params});
  },
};

export default deviceController;
