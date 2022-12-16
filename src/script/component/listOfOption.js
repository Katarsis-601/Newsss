import { response } from "../handler/api.js";
import { getAllCategories } from "../utils/getAllData.js";
export default async function listOfOption(
  optionType,
  i = null,
  addAllValue = false
) {
  return await response()
    .then((res) => res.json())
    .then((value) => {
      let listOfOption = [];
      let dataOfOption;

      if (optionType === "category") {
        if (i === "all") {
          dataOfOption = getAllCategories(value);
        } else {
          dataOfOption = value.endpoints[i].paths;
        }
      } else if (optionType === "channel") {
        dataOfOption = value.endpoints;
      }

      dataOfOption.forEach((data, index) => {
        listOfOption.push(
          `<option value=${data.name} data-index-channel=${index}>
              ${data.name.toUpperCase()}
          </option>`
        );
      });

      if (addAllValue === true) {
        listOfOption.unshift(
          "<option value=all data-index-channel=all>All</option>"
        );
      }

      return listOfOption;
    })
    .catch(() =>
      alert("Try to reload this page or Check your connection internet")
    );
}
