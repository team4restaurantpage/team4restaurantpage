import $ from 'jquery';
import _ from 'lodash';

function renderPhotos (data) {
  var imageArray = data.data.images;
  var randomSample = _.sampleSize(imageArray, [n=5])
  console.log(randomSample);
}
