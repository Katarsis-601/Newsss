import { newsBox } from "./newsBox.js";

export const newsContent = (data, isAll = false) => {
  if (isAll) {
    return data.map((data) => {
      return `<div class="content flex flex-col m-4 flex-wrap">
      <h3 class="news-title mb-4">${data.data.title}</h3>
      <div class="news flex flex-row justify-center flex-wrap">
          ${data.data.posts.map((data) => newsBox(data))}
      </div>
    </div>`;
    });
  }
  return `<div class="content flex flex-col m-4 flex-wrap">
    <h3 class="news-title mb-4">${data.data.title}</h3>
    <div class="news flex flex-row justify-center flex-wrap">
        ${data.data.posts.map((data) => newsBox(data))}
    </div>
    </div>`;
};
