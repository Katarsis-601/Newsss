export let getAllCategories = (value) => {
  let endpoint = value.endpoints;
  let category = [];
  let filteredCategoryName = new Set();

  for (let name of endpoint) {
    for (let i in name.paths) {
      category.push(name.paths[i]);
      filteredCategoryName.add(name.paths[i].name);
    }
  }

  let allCategory = [];

  filteredCategoryName.forEach((name) => {
    for (let data of category) {
      if (data.name === name) {
        allCategory.push(data);
        break;
      }
    }
  });
  let sortedCategory = allCategory.sort((a, b) => {
    return a.name > b.name;
  });
  return sortedCategory;
};

export let getAllChannelData = (value) => {
  let endpoint = value.endpoints;
  let channel = [];
  for (let name of endpoint) {
    channel.push(name.name);
  }
  return channel;
};
