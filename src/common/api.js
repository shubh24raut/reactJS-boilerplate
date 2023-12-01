import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export default api;
