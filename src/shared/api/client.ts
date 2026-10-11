import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "https://myrobo.adxamov.uz",
  timeout: 15000,
});

export default api;
