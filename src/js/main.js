import $ from 'jquery'
import _ from 'lodash'

import { menuAPI, newsAPI, specialAPI} from './restaurantAPI'
import {imgurAPI} from './imgurAPI'

import { renderNews } from './news'
import { renderMap } from './google.js'
import { renderMenu } from './menutab.js'
import { renderPhotos } from './photolist.js'

newsAPI.then(renderNews);
imgurAPI.then(renderSpecialImage);
menuAPI.then(renderMenu);
imgurAPI.then(renderPhotos);
renderMap();


function renderSpecialImage (data) {
            return $('div#special.storeinfo').prepend(`
              <header class="info-header">Specials</header>
              <img src= '${data.data.images[15].link}'/>`)
};


specialAPI.then(function(data){
  var specialId = data.menu_item_id;
  menuAPI.then(function(food){
    var specialMenu = food.entrees.filter(function(specialEntree){
      return specialEntree.id === specialId});
      var specialBox=
        `<div class="special-title">${specialMenu[0].item}..................................${specialMenu[0].price}</div>
        <br>
        <div class="special-description">${specialMenu[0].description}</div>
        `;
    $('#special').append(specialBox);
  });
});


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


$(".each-tab").click(tabHandler);
