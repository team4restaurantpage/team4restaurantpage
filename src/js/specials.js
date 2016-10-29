import $ from 'jquery'

import _ from 'lodash'

import {imgurAPI, menuAPI, specialAPI } from './imgurAPI';

//just feeling this particular image

function renderSpecial (data) {
  return $('#special').append(`<header class="info-header">Specials</header><img src= '${data.data.images[15].link}'/>`)
};


// request for the right id and the corresponding item
 var menuID = data.entrees.forEach(function(salmon){return salmon.id && salmon.item})


//promise to get the menu item

  var specialID = data.menu_item_id


function putTogether () {
  if (`${menuID.id} === $` )
}

//
// var filterEntrees = menuAPI.filter(function(data){return data.entrees.id === 25 })

// specialAPI.then(menuAPI).then(filterEntrees)







export {renderSpecial, renderMenuEntree}



//
// import {renderSpecial} from './specials'
//
// imgurAPI.then(renderSpecial);
// specialAPI.then (renderSpecialfood);
