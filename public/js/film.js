var imageIndex = 1;

window.onload = function () {
    showImage(imageIndex);
};

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