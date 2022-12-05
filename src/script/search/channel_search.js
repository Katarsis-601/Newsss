import { listOfOption } from "../component/listOfOption.js";

(() => {
  const dropdown_element = document.getElementsByClassName("channel-search")[0];
  listOfOption("channel", null, true).then((value) => {
    dropdown_element.innerHTML = value;
  });
})();
