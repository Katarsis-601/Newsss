import { response } from "../handler/api.js";

export const getNews = (channel, category) => {
  return response(channel, category)
    .then((data) => data.json())
    .then((value) => {
      return value;
    });
};

getNews("antara", "terbaru");
