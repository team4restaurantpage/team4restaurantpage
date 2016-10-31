import $ from 'jquery';

import { GOOGLE_KEY } from './access.js';

function renderMap () {
    $('#map').html(
      `<header class="info-header">Our Location<header>
      <iframe id="google-map" width="265" height="100" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJodxCCMkCfjUR9Sb-y3hzoR4&key=${GOOGLE_KEY}" allowfullscreen></iframe>
      <div id="address">123 Moranbong Street, Pyongyang, NK 56789</div>
      <ul id="contact-info">
        <li>555-123-4567</li>
        <li>555-123-4568</li>
        <li><a href="#">Map</a></li>
        <li><a href="#">Directions</a></li>
      </ul>`
)};

export { renderMap };

// these will be eventually added to main.js :

// import { renderMap } from './google.js'
//
// renderMap()
