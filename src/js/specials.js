import $ from 'jquery'

import _ from 'lodash'

import {imgurAPI} from './imgurAPI';

function renderSpecial (data) {
  return $('#special').append(`<img src= '${data.data.images[15].link}'/>`)
};


export {renderSpecial}

//
// import {renderSpecial} from './specials'
//
// imgurAPI.then(renderSpecial);
