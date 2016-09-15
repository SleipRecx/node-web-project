var slidenumber = 1;

$(document).ready(function(){
  $("#next").click( function() {slide(1)});
  $("#prev").click( function() {slide(-1)});
});

function slide(n){
    slidenumber = slidenumber + n
    if (slidenumber < 1){
        slidenumber = 5
    } else if (slidenumber > 5) {
        slidenumber = 1
    }
    $("#slide").attr("src","img/art/pexels"+slidenumber+".jpeg");
    $("#numbertext").html(slidenumber+" / 5");
}