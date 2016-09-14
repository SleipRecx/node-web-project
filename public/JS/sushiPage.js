/**
 * Created by mumie on 14.09.2016.
 */
function changeImage()
{
    var img = document.getElementById("image-sushi");
    var images = ["s1.jpg", "s2.jpg", "s3.png", "s4.jpg"];
    var imag = img.src.slice(-6);

    var rand = Math.floor(Math.random() * images.length);
    var newimg = images[rand];

    while(newimg==imag){
        newimg = images[Math.floor(Math.random() * images.length)];
    }
    img.src = newimg;
}