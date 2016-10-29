import $ from 'jquery'

import _ from 'lodash'

import {menuAPI, specialAPI} from './restaurantAPI';



 function specialBox(salmon){
   return
   `<div class="special-main">Today's Special</div>
   <div class="special-title">${salmon[0].item}</div>
   <div class= "special-price">${salmon[0].price}</div>
   <div class="special-description">${salmon[0].description}</div>
   `
 }

 //Not certain about indexing^^

 specialAPI.then(function(data){
   var specialId = data.menu_item_id;
   menuAPI.then(function(food){
     var specialMenu = food.entrees.filter(function(specialEntree){
       return specialEntree.id === specialId})
     $('.specials').append(specialBox(specialMenu))})
 })


//move all to main.js 
