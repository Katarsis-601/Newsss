import { response } from "../handler/api.js";
import { getAllChannelData } from "./getAllData.js";
export async function filterChannelByCategory(category) {
  let filteredChannel = [];
  await response()
    .then((data) => data.json())
    .then((value) => {
      let endpoints = value.endpoints;
      getAllChannelData(value).map((channel, index) => {
        endpoints[index].paths.map((data) => {
          if (category === data.name) {
            filteredChannel.push(channel);
          }
        });
      });
    });
  return filteredChannel;
}
