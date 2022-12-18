export let option = (data, data_att) => {
  return `<option value=${
    data === "all" ? "all" : data.name
  } data-index-channel=${data_att}>
    ${data === "all" ? "All" : data.name.toUpperCase()}
  </option>`;
};
