import $ from 'jquery';
import _ from 'lodash';

function renderPhotos (data) {
  var imageArray = data.data.images;
  var randomSample = _.sampleSize(imageArray, 5)
    $('#photos').prepend(
      `<div id="photo-header">Our Photos</div>`
    )
  randomSample.forEach(function (image) {
    $('#photos').append(
      `<li><img src="${image.link}"/></li>`
    )});
};

export { renderPhotos };
