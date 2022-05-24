import axios from "axios";

export const api = axios.create({
  baseURL: "https://podcastr-api-rafacarrenho.vercel.app/api/",
});
