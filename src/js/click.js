
function tabHandler (event) {
  var target= $(event.target);
  console.log(target);
  target.removeClass("dormant");
  if (target.is("#story-tab")) {
    $( ".story-content" ).addClass( "cont" );
    $(".menu-content").removeClass("cont");
    $(".reserve-content").removeClass("cont");
    $("#menu-tab").addClass("dormant");
    $("#reserve-tab").addClass("dormant");
    console.log($("#menu-tab"));
  } else if (target.is("#menu-tab")) {
    $( ".menu-content" ).addClass( "cont" );
    $(".story-content").removeClass("cont").addClass("hidden-cont");
    $(".reserve-content").addClass("hidden-cont").removeClass("cont");
    $("#story-tab").addClass("dormant");
    $("#reserve-tab").addClass("dormant");
  } else if (target.is("#reserve-tab")) {
    $( ".reserve-content" ).addClass( "cont" );
    $(".story-content").removeClass("cont").addClass("hidden-cont");
    $(".menu-content").removeClass("cont");
    $("#menu-tab").addClass("dormant");
    $("#story-tab").addClass("dormant");
}};

export { tabHandler };
