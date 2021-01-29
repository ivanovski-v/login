import axios from "axios";
import API_ENV from "../../config/api.config.js";
import addInterceptors from "./interceptors.js";

const instance = axios.create({
  baseURL: API_ENV.apiUrl,
  headers: { "Content-Type": "application/json" },
});

addInterceptors(instance);

export default instance;
