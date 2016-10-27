import $ from 'jquery';

import { newsAPI } from './restaurantAPI';

function renderNews(data) {
    return $('#blog').html(
      `<h1>Latest News</h1>
      <div id="post-title">${data.title}</div>
      <div id="date">${data.date_published}</div>
      <div id="post">${data.post}</div>
      `
    );
};

export { renderNews };

// these need to be added to the main.js file:
// import { renderNews } from './news'
// newsAPI.then(renderNews);
