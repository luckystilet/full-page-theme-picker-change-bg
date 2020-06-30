import axios from "axios";
import router from "@/router";
const toeknRequiredUrls = ["/login", "/registration"];
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  config => {
    const tokenRequired = !toeknRequiredUrls.includes(config.url);
    const token = localStorage.getItem("token");

    if (!token && tokenRequired && !window.location.includes("login")) {
      window.location = "/login";
    }
    config.headers["Authorization"] = `Bearer ${token}`;
    console.log("ax", token);
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    const unAuth = error.response.status === 401;
    if (unAuth) {
      router.push({ name: "login" });
    }
    return Promise.reject(error);
  }
);
export default axios;
