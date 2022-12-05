import { listOfOption } from "../component/listOfOption.js";
import { findBySort } from "./findBySort.js";
(() => {
  const channel_sort_element =
    document.getElementsByClassName("channel-sort")[0];
  const category_sort_element =
    document.getElementsByClassName("category-sort")[0];

  let listOfCategory = (i) => {
    return listOfOption("category", i);
  };

  let channel_value = "all";
  let category_value = "terbaru";

  channel_sort_element.addEventListener("input", (event_channel) => {
    channel_value =
      event_channel.target.options[channel_sort_element.selectedIndex];
    listOfCategory(channel_value.dataset.indexChannel).then((value) => {
      category_sort_element.innerHTML = value;
      category_value = category_sort_element[0].value;
      findBySort(channel_value.value, category_value);
    });
  });

  category_sort_element.addEventListener("input", (event_category) => {
    category_value =
      event_category.target.options[category_sort_element.selectedIndex].value;
    findBySort(channel_value.value, category_value);
  });

  listOfCategory("all").then((value) => {
    category_sort_element.innerHTML = value;
  });
})();
