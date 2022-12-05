import { getAllChannelData } from "../utils/getAllData.js";

export const response = async (channel = null, category = null) => {
  let api = "https://api-berita-indonesia.vercel.app/";
  if ((channel != null) & (channel != "all")) {
    api += `${channel}/`;
    api += `${category}/`;
  }
  const res = await fetch(api);
  return res;
};

export const responseAll = async (res) => {
  return await Promise.all(res);
};
