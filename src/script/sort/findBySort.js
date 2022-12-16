import { response, responseAll } from "../handler/api";
import { getAllChannelData } from "../utils/getAllData.js";
import { newsContent } from "../component/newsBoxComponent/newsContent.js";
let api = "https://api-berita-indonesia.vercel.app/";
export function findBySort(channel = "all", category = "terbaru") {
  let content_container = document.getElementsByClassName(
    "news-content-container"
  )[0];

  content_container.innerHTML = "Loading...";

  if (channel != "all") {
    return response(channel, category)
      .then((value) => value.json())
      .then((data) => {
        content_container.innerHTML = newsContent(data);
      });
  }
  let filteredChannel = [];
  response()
    .then((data) => data.json())
    .then((value) => {
      getAllChannelData(value).map((channel, index) => {
        value.endpoints[index].paths.map((data) => {
          if (data.name === category) {
            filteredChannel.push(channel);
          }
        });
      });
    });

  let responseNewsAll = filteredChannel.map(async (channel) => {
    return await fetch(`${api}${channel}/${category}`);
  });

  return responseAll([...responseNewsAll])
    .then((res) => res)
    .then((res) => Promise.all(res.map((data) => data.json())))
    .then((res) => {
      content_container.innerHTML = newsContent(res, true);
    })
    .catch(() => {
      setTimeout(() => {
        alert("try to reload your browser");
        location.reload();
      }, 5000);
    });
}
