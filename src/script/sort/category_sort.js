import listOfOption from "../components/listOfOption.js";
import { findBySort } from "./findBySort.js";

const channel_element = document.getElementsByClassName("channel-sort")[0];
const category_element = document.getElementsByClassName("category-sort")[0];

let listOfCategory = (i) => {
  return listOfOption("category", i);
};
(() => {
  let categorySortValue = "terbaru";
  let channelSortValue = "all";

  channel_element.addEventListener("input", (event_channel) => {
    channelSortValue =
      event_channel.target.options[channel_element.selectedIndex];

    listOfCategory(channelSortValue.dataset.indexChannel).then((value) => {
      category_element.innerHTML = value;

      categorySortValue = category_element[0].value;
      findBySort(channelSortValue.value, categorySortValue);
    });
  });

  category_element.addEventListener("input", (event_category) => {
    categorySortValue =
      event_category.target.options[category_element.selectedIndex].value;

    findBySort(channelSortValue.value, categorySortValue);
  });

  listOfCategory("all").then((value) => {
    category_element.innerHTML = value;
  });
})();
