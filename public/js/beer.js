window.onload = function (){
  var button = document.getElementsByClassName("btn")[0];
  button.addEventListener("click", displayRandomImage);

}

function displayRandomImage(){
  console.log("neger")
  var image = document.getElementById("random-beer");
  var random = Math.floor((Math.random() * 9) + 1);
  var srcString = "img/beers/beer" + random.toString() + ".png";
  while(srcString == image.src.split("oving1/")[1]){
    var random = Math.floor((Math.random() * 9) + 1);
    var srcString = "img/beers/beer" + random.toString() + ".png";
  }
  image.src = srcString;
}
