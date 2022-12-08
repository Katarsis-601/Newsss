import { response, responseAll } from "../handler/api";
import { getAllChannelData } from "../utils/getAllData.js";
import { newsContent } from "../component/newsBoxComponent/newsContent.js";
let api = "https://api-berita-indonesia.vercel.app/";
export const findBySort = async (channel = "all", category = "terbaru") => {
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
  } else {
    let filtered = [];
    await response()
      .then((data) => data.json())
      .then((value) => {
        getAllChannelData(value).map((channel, index) => {
          value.endpoints[index].paths.map((data) => {
            if (data.name === category) {
              filtered.push(channel);
            }
          });
        });
      });
    let responseNewsAll = filtered.map(async (data) => {
      return await fetch(`${api}${data}/${category}`);
    });
    await responseAll([...responseNewsAll])
      .then((res) => {
        return res;
      })
      .then((res) => Promise.all(res.map((data) => data.json())))
      .then((res) => {
        setTimeout(() => {
          content_container.innerHTML = newsContent(res, true);
        }, 5000);
      })
      .catch(() => {
        setTimeout(() => {
          alert("try to reload your browser");
          location.reload();
        }, 5000);
      });
  }
};
