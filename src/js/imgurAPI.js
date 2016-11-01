import $ from 'jquery'

import {IMGUR_KEY} from './access.js'


var imgurAPI = $.ajax ({
            url: `https://api.imgur.com/3/gallery/5joBG`,
            headers: {
              Authorization: `Client-ID ${IMGUR_KEY}`},
          });


export {imgurAPI}
