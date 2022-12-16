export const response = async (channel = null, category = null) => {
  let api = "https://api-berita-indonesia.vercel.app/";

  channel != null ? (api += `${channel}/${category}`) : null;

  const res = await fetch(api);

  return res;
};

export const responseAll = async (res) => {
  return await Promise.all(res);
};
