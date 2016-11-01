import $ from 'jquery';

import { newsAPI } from './restaurantAPI';

function renderNews(data) {
    return $('#blog').html(
      `<header class="info-header">Latest News</header>
      <div id="post-title">${data.title}</div>
      <div id="date">${data.date_published}</div>
      <div id="post">${data.post}</div>
      `
    );
};

export { renderNews };
