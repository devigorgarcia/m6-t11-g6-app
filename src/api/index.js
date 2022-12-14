
import axios from "axios";

const api = () => {
  return axios.create({ baseURL: "" });
};
const endPoints = {
  login: "/login"

};

export const services = () => {
  
  return {

    login: (data) => api().post(endPoints.login, data),

  };
};
