
function tabHandler (event) {
  var target= $(event.target);
  if (target.is("#story-tab")) {
    $( ".story-content" ).addClass( "cont" );
    $(".menu-content").removeClass("cont");
    $(".reserve-content").removeClass("cont");
  } else if (target.is("#menu-tab")) {
    $( ".menu-content" ).addClass( "cont" );
    $(".story-content").removeClass("cont").addClass("hidden-cont");
    $(".reserve-content").addClass("hidden-cont");
  } else if (target.is("#reserve-tab")) {
    $( ".reserve-content" ).addClass( "cont" );
    $(".story-content").removeClass("cont").addClass("hidden-cont");
    $(".menu-content").removeClass("cont");

}};

$(".each-tab").click(tabHandler)


//move all of this to main.js and move below to main.scss //


// /* below affects tabbing */
//
// .hidden-cont {
// 	display: none;
// }
//
// .cont {
// 	display: block;
// }


//lastly add hidden-cont as classes to menu-content and reserve-content
