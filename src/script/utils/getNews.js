import { response } from "../handler/api.js";

export const getNews = async (channel, category) => {
  const data = await response(channel, category);
  const value = await data.json();
  console.log(value);
  return value;
};

getNews("antara", "terbaru");
