import listOfOption from "../component/listOfOption.js";
const channel_sort_element = document.getElementsByClassName("channel-sort")[0];

(() => {
  listOfOption("channel", null, true).then((value) => {
    channel_sort_element.innerHTML = value;
  });
})();
