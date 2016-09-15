window.onload = function () {

    var previous = document.getElementById("prev");
    previous.addEventListener("click", function(){ slide(-1); });

    var next = document.getElementById("next");
    next.addEventListener("click", function(){ slide(1); });
}
/*
$(document).ready(function(){
  $("#next").click(slide(1));
  $("#prev").click(slide(-1));
});*/

var image1=new Image()
image1.src="img/art/pexels5.jpeg"
var image2=new Image()
image2.src="img/art/pexels2.jpeg"
var image3=new Image()
image3.src="img/art/pexels3.jpg"
var image4=new Image()
image4.src="img/art/pexels4.jpg"
var image5=new Image()
image5.src="img/art/pexels1.jpeg"

var slidenumber = 1
function slide(n){
    slidenumber = slidenumber + n
    if (slidenumber < 1){
        slidenumber = 5
    } else if (slidenumber > 5) {
        slidenumber = 1
    }

    document.images.slide.src=eval("image"+slidenumber+".src")
    document.getElementById("numbertext").innerHTML = slidenumber+" / 5";
}