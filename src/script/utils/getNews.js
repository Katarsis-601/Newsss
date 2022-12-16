import { response } from "../handler/api.js";

export const getNews = async (channel, category) => {
  const data = await response(channel, category);
  const value = await data.json();
  return value;
};
