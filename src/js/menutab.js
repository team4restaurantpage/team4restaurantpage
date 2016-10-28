import $ from 'jquery'
import _ from 'lodash'

import { menuAPI } from './restaurantAPI.js'

function renderMenu (data) {
  console.log(data);
  $('.maintabs').append(
    `<header>Our Dinner Selections...</header>
     <div id="Beer">Beer Menu 맥주 메뉴</div>`);
  data.Beer.forEach(function (beer) {
  $('.maintabs').append(
    `<div class="beer-selection">${beer.item} - ${beer.style} - ${beer.price}₩</div>
     <div class="beer-description">${beer.description}</div>`
   )});
  $('.maintabs').append(
    `<div id="entrees">Entrees 앙트레</div>`);
  data.entrees.forEach(function (entree) {
  $('.maintabs').append(
    `<div class="entree-selection">${entree.item} - ${entree.price}₩</div>
     <div class="entree-description">${entree.description}</div>
    `
  )});
  $('.maintabs').append(
    `<div id="games">Games 계략</div>
     <div id="perhour">(prices listed per hour)</div>
    `);
  data.games.forEach(function (game) {
  $('.maintabs').append(
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
