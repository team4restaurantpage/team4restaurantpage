import $ from 'jquery'
import _ from 'lodash'

import { menuAPI } from './restaurantAPI.js'

function renderMenu (data) {
  console.log(data);
  $('.maintabs').append(
    `<header>Our Dinner Selections...</header>
      <div id="Beer">Beer Menu</div>`);
  data.Beer.forEach(function (beer) {
    $('.maintabs').append(
      `<div class="beer-selection">${beer.item} - ${beer.style} - ${beer.price}</div>
      <div class="beer-description">"${beer.description}"</div>`
    );
  });
};

export { renderMenu };


// to be added to main.js:
//
// import { renderMenu } from './menutab.js'
// menuAPI.then(renderMenu)
