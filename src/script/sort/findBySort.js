import { response, responseByCategory } from "../handler/api.js";
import { newsContent } from "../components/newsBoxComponent/newsContent.js";
import { filterChannelByCategory } from "../utils/filter.js";

let content_container = document.getElementsByClassName(
  "news-content-container"
)[0];

export async function findBySort(channel = "all", category = "terbaru") {
  content_container.innerHTML = "Loading....";

  let filteredChannel;

  if (channel === "all") {
    filteredChannel = await filterChannelByCategory(category);

    let responseNewsAll = responseByCategory(filteredChannel, category);

    return await Promise.all(responseNewsAll)
      .then((res) => res)
      .then((res) => Promise.all(res.map((data) => data.json())))
      .then(async (res) => {
        if (res[0].message != "Not found") {
          content_container.innerHTML = await newsContent(res, true);
        } else {
          content_container.innerHTML = "Tidak ada Berita";
        }
      })
      .catch((err) => alert(err));
  }

  return await response(channel, category)
    .then((value) => value.json())
    .then(async (data) => {
      content_container.innerHTML = await newsContent(data);
    });
}
