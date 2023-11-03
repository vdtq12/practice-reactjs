import axiosClient from "./axiosClient";

const userController = {
  postUser: (username, password) => {
    return axiosClient.post("/login", {
      username: username,
      password: password,
    });
  },

  logOut: () => {
    return axiosClient.post('/logout')
  }
};

export default userController;
