import { response, responseAll } from "../handler/api";
import { getAllChannelData } from "../utils/getAllData.js";
import { newsContent } from "../component/newsBoxComponent/newsContent.js";
let api = "https://api-berita-indonesia.vercel.app/";
export const findBySort = async (channel = "all", category = "terbaru") => {
  let news_content = document.getElementsByClassName("news-content")[0];

  news_content.innerHTML = "Loading...";
  if (channel != "all") {
    return response(channel, category)
      .then((value) => value.json())
      .then((data) => {
        news_content.innerHTML = newsContent(data);
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
      .then((res) => {})
      .catch(() => {
        return alert("try to reload your browser");
      });
  }
};
