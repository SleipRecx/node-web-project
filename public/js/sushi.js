/**
 * Created by mumie on 14.09.2016.
 */
function changeImage() {
    var img = document.getElementById("image-sushi");
    var images = ["img/sushi/s1.jpg", "img/sushi/s2.jpg", "img/sushi/s3.png", "img/sushi/s4.jpg"];
    var imag = img.src.slice(-6);

    var rand = Math.floor(Math.random() * images.length);
    var newimg = images[rand];

    while(newimg==imag){
        newimg = images[Math.floor(Math.random() * images.length)];
    }
    img.src = newimg;
}