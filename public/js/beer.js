$(document).ready(function(){
  $(".btn").click(displayRandomImage);
  $("#scroll").click(function () {
      $('body').animate({ scrollTop: 750 }, 500);
  });
});


function displayRandomImage(){
  var image = $("#random-beer")[0];
  var random = Math.floor((Math.random() * 8) + 1);
  $.ajax({
  type: "GET",
  url:'random_beer',
  contentType: "image/png",
    success: function(data){
      image.src = data;
    },
  });

}
