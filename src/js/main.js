import $ from 'jquery'
import _ from 'lodash'

import { menuAPI, newsAPI, specialAPI} from './restaurantAPI'

import {imgurAPI} from './imgurAPI'

import { renderNews } from './news'

newsAPI.then(renderNews);




function renderSpecialImage (data) {
            return $('div#special.storeinfo').append(`
              <header class="info-header">Specials</header>
              <img src= '${data.data.images[15].link}'/>`)
          };

imgurAPI.then (renderSpecialImage)

function specialBox(salmon){
  return
  `<div class="special-main">Today's Special</div>
  <div class="special-title">${salmon[0].item}</div>
  <div class= "special-price">${salmon[0].price}</div>
  <div class="special-description">${salmon[0].description}</div>
  `
}

specialAPI.then(function(data){
  var specialId = data.menu_item_id;
  menuAPI.then(function(food){
    var specialMenu = food.entrees.filter(function(specialEntree){
      return specialEntree.id === specialId})
    $('#div#special.storeinfo').append(specialBox(specialMenu))})
})



import { renderMap } from './google.js'

renderMap()



import { renderMenu } from './menutab.js'
menuAPI.then(renderMenu)

function tabHandler (event) {
  var target= $(event.target);
  if (target.is("#story-tab")) {
    $( ".story-content" ).addClass( "cont" );
    $(".menu-content").removeClass("cont");
    $(".reserve-content").removeClass("cont");
  } else if (target.is("#menu-tab")) {
    $( ".menu-content" ).addClass( "cont" );
    $(".story-content").removeClass("cont").addClass("hidden-cont");
    $(".reserve-content").addClass("hidden-cont").removeClass("cont");
  } else if (target.is("#reserve-tab")) {
    $( ".reserve-content" ).addClass( "cont" );
    $(".story-content").removeClass("cont").addClass("hidden-cont");
    $(".menu-content").removeClass("cont");

}};

$(".each-tab").click(tabHandler)
