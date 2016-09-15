// Runs the clock in upper right corner on startup
//Also sets some attributes on the iframe that are no longer valid HTML5 markup
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

// function to switch between color palettes in right side menu




function time (){
    var now= new Date();
    var h=now.getHours();
    var m=now.getMinutes();
    var s=now.getSeconds();
    return 'Time is now:'+'  '+'<br><br>  '+ h+':'+m+':'+s+'';

};
//checks if the current browser is chrome. For chrome only HTML5 content
function checkBrowser(){

    var isChrome = !!window.chrome && !!window.chrome.webstore;

    return isChrome;
};
//Pirate virus right side menu
/*
function pirate(){
    var chrome=checkBrowser();
    console.log(chrome);
  if(checkBrowser()==true){
    var dialog= document.getElementById('pirate');
    dialog.show();
    console.log('Only supported in chrome');
    document.getElementById('pirate').hidden=false;
    document.getElementById('mp3').play()
    document.getElementById('exit').onclick=function(){
        dialog.close();
    }
  }else{
      alert('Only supported in chrome')
  }


}
*/
//resizes the iframe for the starting page.
function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight+20 + 'px';
}
