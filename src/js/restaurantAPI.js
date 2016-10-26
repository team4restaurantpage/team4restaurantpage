import $ from 'jquery';

var menuAPI = $.ajax({
  url: 'https://json-data.herokuapp.com/restaurant/menu/3'
});


var newsAPI = $.ajax({
  url: 'https://json-data.herokuapp.com/restaurant/news/1'
});

var specialAPI = $.ajax({
  url: 'https://json-data.herokuapp.com/restaurant/special/1'
});


export { menuAPI, newsAPI, specialAPI }
