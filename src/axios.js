import axios from "axios";

const instance = axios.create({
  //   baseURL: "https://report-backend.vercel.app/",
  baseURL: "http://localhost:5000/api/v1",
});

export default instance;
