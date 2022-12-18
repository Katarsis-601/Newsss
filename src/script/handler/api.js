let api = "https://api-berita-indonesia.vercel.app/";

export const response = async (channel = null, category = null) => {
  if (channel != null) {
    return await fetch(`${api}${channel}/${category}`);
  }

  return await fetch(api);
};

export const responseByCategory = (callback, category) => {
  return callback.map((channel) => fetch(`${api}${channel}/${category}`));
};
