export const newsBox = (data) => {
  return `<div class="news_box w-1/4 h-2/5 flex flex-col p-5 border m-4">
    <h4 class="font-bold text-xs">${data.title}</h4>
    <img src="${data.thumbnail}" loading="lazy" class="w-auto mt-4 mb-4">
    <a href="${data.link}" clas="mt-2 text-xs" target="_blank">${data.description}</a>
  </div>`;
};
