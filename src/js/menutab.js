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
          <i class="fa fa-exclamation allergy${entree.id}" aria-hidden="true"></i>
          <i class="fa fa-star favorite${entree.id}" aria-hidden="true"></i>
          <i class="fa fa-fire spicy${entree.id}" aria-hidden="true"></i>
          <i class="fa fa-vimeo vegetarian${entree.id}" aria-hidden="true"></i>
        </div>
      </div>
      <div class="entree-description">${entree.description}</div>
     </div>

    `
  )

    if (entree.allergies === 1) {
      $(`.allergy${entree.id}`).addClass("black")
    }
    if (entree.favorite === 1) {
      $(`.favorite${entree.id}`).addClass("gold")
    }
    if (entree.vegan === 1) {
      $(`.vegetarian${entree.id}`).addClass("green")
    }
    if (entree.spicy === 1) {
      $(`.spicy${entree.id}`).addClass("red")
    }

}


);
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



};


export { renderMenu };


// to be added to main.js:
//
// import { renderMenu } from './menutab.js'
// menuAPI.then(renderMenu)
