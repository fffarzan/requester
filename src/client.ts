import axios from "axios";

const api = axios.create({
  baseURL: `https://superheroapi.com/api/7c92ec31439bcedd9aa98c0e594465f2`,
});

export default api;
