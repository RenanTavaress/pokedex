import axios from "axios";

const api = axios.create({
  baseURL: "https://pokedex-api-three.vercel.app/api",
});

export default api;
