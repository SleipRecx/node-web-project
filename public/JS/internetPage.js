// Runs the clock in upper right corner on startup
//Also sets some attributes on the iframe that are no longer valid HTML5 markup
$(document).ready(function(){
  $("#ajaxtest").mouseenter(function(){
      console.log('rgmouseenter')
var xhttp=new XMLHttpRequest();
      xhttp.open("GET","data",true);
      xhttp.send();
     xhttp.onreadystatechange=function(){
         if(this.readyState==4 && this.status==200){
             console.log(this.readyState+" "+ this.status)
      document.getElementById("ajaxtest").innerHTML=xhttp.responseText;
     }
     }
  });
});
document.addEventListener('DOMContentLoaded', function() {
   clock();
    document.getElementById('mainContent').scrolling='no';
    document.getElementById('mainContent').frameBorder='0';
    document.getElementById('mainContent').width='650px';

}, false);
// function to switch between color palettes in right side menu
function changeColor(id){
if(id==1) {
    document.getElementById('body').style.background='#b4dbc0'
    document.getElementById('sect1').style.background='#57bc90'
    document.getElementById('sect2').style.background='#57bc90'
    document.getElementById('nav').style.background='#57bc90'
    document.getElementById('footer').style.background='#57bc90'
}else if(id==2){
    document.getElementById('body').style.background='#caebf2'
    document.getElementById('sect1').style.background='#77c9d4'
    document.getElementById('sect2').style.background='#77c9d4'
    document.getElementById('nav').style.background='#77c9d4'
    document.getElementById('footer').style.background='#77c9d4'
}else if(id==3) {

    document.getElementById('body').style.background = '#EEF1F3'
    document.getElementById('sect1').style.background='#D5D5D5'
    document.getElementById('sect2').style.background='#D5D5D5'
    document.getElementById('nav').style.background='#D5D5D5'
    document.getElementById('footer').style.background='#D5D5D5'
}
};

//Sets the iframe content/handles navigation between partials
function setMainContent(link){
    document.getElementById('mainContent').src=link;
  document.getElementById('mainContent').style.height='400px';

};
//updtes clock every 1000 milliseconds
function clock(){
var currentTime=time();
    document.getElementById('currentTime').innerHTML=currentTime;
    setTimeout(clock, 1000);
};
//Gets the current time for clock
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
//resizes the iframe for the starting page.
function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight+20 + 'px';
}
