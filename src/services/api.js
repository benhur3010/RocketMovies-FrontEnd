import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-benhur.onrender.com"
});
