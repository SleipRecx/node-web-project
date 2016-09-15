
//Jquery/AJAX Retrives content of kaText1 from server and displays it
// Uses the Jquery id selector and mousenter/Mouseleav eventhandler
$(document).ready(function(){
  $("#Hoverbox").mouseenter(function(){
      console.log('rgmouseenter')
      $.ajax({url:"data", success:function(result){
          $("#Hoverbox").html(result);

      }})


  });
    $("#Hoverbox").mouseleave(function(){
        console.log('mousexit');
        $("#Hoverbox").html("Hover to change text with AJAX!");

    })
});

//Function retrieves new image link from server and sets the new source
//If source has been altered it resets to original source
// uses Jquery click function and id selector
$(document).ready(function(){



$("#graf").click(function(){

    if($("#graf").attr('src')=="../img/internet/piechart.jpg"){

    $.ajax({url:"graf",success:function(result){
        console.log(result)
        $("#graf").attr('src',result);
    }})
}else{
            $("#graf").attr('src',"../img/internet/piechart.jpg")
        }
})

});





