var imageIndex = 1;


$(document).ready(function(){
  showImage(imageIndex);
  $(".random").click(displayRandomArmor);
  $(".next").click(displayNextArmor);
  $(".previous").click(displayPreviousArmor);
});

function nextImage(n) {
    showImage(imageIndex += n);
}

function currentImage(n) {
    showImage(imageIndex = n);
}

function showImage(n) {
    var i;
    var current_image_list = document.getElementsByClassName("current-image");
    var current_image_text_list = document.getElementsByClassName("current-image-text");
    var images = document.getElementsByClassName("image");
    if (n > current_image_list.length) {
        imageIndex = 1
    }
    if (n < 1) {
        imageIndex = current_image_list.length
    }
    for (i = 0; i < current_image_list.length; i++) {
        current_image_list[i].style.display = "none";
        current_image_text_list[i].style.display = "none";
    }
    for (i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace(" chosen-image", "");
    }
    current_image_list[imageIndex - 1].style.display = "inline";
    current_image_text_list[imageIndex - 1].style.display = "inline";
    images[imageIndex - 1].className += " chosen-image";
}

function displayRandomArmor() {
    var image = $("#random-armor")[0];
    var random = Math.floor((Math.random() * 42) + 1);
    $.ajax({
            type: "GET",
            url: 'random_armor',
            contentType: "image/png",
            success: function (data) {
                image.src = data;
            }
        }
    );
}

function displayNextArmor(){
    var image = $("#random-armor")[0];
    var armorNumber = image.src.split("mark");
    armorNumber = armorNumber[1].split(".");
    var numberAsInt = Number(armorNumber[0]);
    if(numberAsInt < 42){
        numberAsInt++;
    }
    image.src = "img/film/armors/mark" + numberAsInt.toString() + ".png";
}

function displayPreviousArmor(){
    var image = $("#random-armor")[0];
    var armorNumber = image.src.split("mark");
    armorNumber = armorNumber[1].split(".");
    var numberAsInt = Number(armorNumber[0]);
    if(numberAsInt > 1){
        numberAsInt--;
    }
    image.src = "img/film/armors/mark" + numberAsInt.toString() + ".png";
}

/* IMDB Plugin */

(function (d, s, id) {
    var js, stags = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "http://g-ec2.images-amazon.com/images/G/01/imdb/plugins/rating/js/rating.min.js";
    stags.parentNode.insertBefore(js, stags);
})(document, 'script', 'imdb-rating-api');
