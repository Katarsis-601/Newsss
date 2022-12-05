import { response } from "../handler/api.js";
import { getAllCategories } from "../utils/getAllData.js";
export async function listOfOption(optionType, i = null, addAllValue = false) {
  return await response()
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((value) => {
      let type;
      let listOfOption = [];
      if (optionType === "category") {
        if (i === "all") {
          type = getAllCategories(value);
        } else {
          type = value.endpoints[i].paths;
        }
      } else if (optionType === "channel") {
        type = value.endpoints;
      }
      type.forEach((data, index) => {
        listOfOption.push(
          `<option 
          value=${data.name}
          data-index-channel=${index}
          >${data.name.toUpperCase()}</option>`
        );
      });
      addAllValue === true
        ? listOfOption.unshift(
            "<option value=all data-index-channel=all>All</option>"
          )
        : null;
      return listOfOption;
    })
    .catch((err) => {
      alert("Try to reload this page or Check your connection internet");
    });
}
