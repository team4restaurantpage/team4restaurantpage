import $ from 'jquery'

import _ from 'lodash'

import {imgurAPI, menuAPI, specialAPI } from './imgurAPI';

function renderSpecial (data) {
  return $('#special').append(`<header class="info-header">Specials</header><img src= '${data.data.images[15].link}'/>`)
};



function renderMenuEntree (data) {
  return data.entrees.map(function(salmon){return salmon.id})
  return data.entrees.map(function(salmon){return salmon.item})
};


//
// var filterEntrees = menuAPI.filter(function(data){return data.entrees.id === 25 })

// specialAPI.then(menuAPI).then(filterEntrees)







export {renderSpecial, renderMenuEntree}



//
// import {renderSpecial} from './specials'
//
// imgurAPI.then(renderSpecial);
// specialAPI.then (renderSpecialfood);
