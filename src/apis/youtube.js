import axios from "axios";

const KEY = "AIzaSyAFGfQVycOy2nc9CZdwA4szV4NC9wpsuK4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
