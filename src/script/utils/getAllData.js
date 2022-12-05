import { response } from "../handler/api.js";

export let getAllCategories = (value) => {
  let endpoint = value.endpoints;
  let category = [];

  for (let name of endpoint) {
    for (let i in name.paths) {
      category.push(name.paths[i]);
    }
  }

  let allCategory = new Set(category);
  return allCategory;
};

export let getAllChannelData = (value) => {
  let endpoint = value.endpoints;
  let channel = [];
  for (let name of endpoint) {
    channel.push(name.name);
  }
  return channel;
};
