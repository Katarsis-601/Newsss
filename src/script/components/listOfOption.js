import { response } from "../handler/api.js";
import { getAllCategories } from "../utils/getAllData.js";
import { option } from "./sortComponents/option.js";
export default async function listOfOption(
  optionType,
  i = null,
  addAllValue = false
) {
  return await response()
    .then((res) => res.json())
    .then(async (value) => {
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

      dataOfOption.map((data, index) => listOfOption.push(option(data, index)));

      addAllValue === true ? listOfOption.unshift(option("all", "all")) : null;

      return listOfOption;
    })
    .catch(() =>
      alert("Try to reload this page or Check your connection internet")
    );
}
