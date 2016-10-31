import $ from 'jquery'
import _ from 'lodash'

import { menuAPI } from './restaurantAPI.js'

function renderMenu (data) {
  console.log(data);
  $('.menu-content').append(
    `<header>Our Dinner Selections...</header>
     <div id="Beer">Beer Menu 맥주 메뉴</div>`);
  data.Beer.forEach(function (beer) {
  $('.menu-content').append(
    `<div class="beer-selection">${beer.item} - ${beer.style} - ${beer.price}₩</div>
     <div class="beer-description">${beer.description}</div>`
   )});
  $('.menu-content').append(
    `<div id="entrees">Entrees 앙트레</div>`);
  data.entrees.forEach(function (entree) {
  $('.menu-content').append(
    `<div class="each-entree">
      <div class="entree-selection">${entree.item} - ${entree.price}₩
        <div class="entree-icons">
          <i class="fa fa-exclamation" id="allergy" aria-hidden="true"></i>
          <i class="fa fa-star" id="favorite" aria-hidden="true"></i>
          <i class="fa fa-fire" id="spicy" aria-hidden="true"></i>
          <i class="fa fa-vimeo" id="vegetarian" aria-hidden="true"></i>
        </div>
      </div>
      <div class="entree-description">${entree.description}</div>
     </div>

    `
  )});
  $('.menu-content').append(
    `<div id="games">Games 계략</div>
     <div id="perhour">(prices listed per hour)</div>
    `);
  data.games.forEach(function (game) {
  $('.menu-content').append(
    `<div class="game-selection">${game.item} - ${game.price}₩</div>
     <div class="game-description">${game.description}</div>
    `
  )});

if (data.entrees.allergies === 0) {
  $('#allergies').addClass(hidden-cont)
} else {
  $('#allergies').addClass()
}
if (data.entrees.favorites === 0) {
  $('#allergies').addClass(hidden-cont)
} else {
  $('#allergies').addClass()
}
if (data.entrees.vegan === 0) {
  $('#allergies').addClass(hidden-cont)
} else {
  $('#allergies').addClass()
}
if (data.entrees.spicy === 0) {
  $('#allergies').addClass(hidden-cont)
} else {
  $('#allergies').addClass()
}

};


export { renderMenu };


// to be added to main.js:
//
// import { renderMenu } from './menutab.js'
// menuAPI.then(renderMenu)
