var addDinnerSection = document.getElementById("dinner-list-section");
var getDinnerSection = document.getElementById("dinner-getting-section");
var dinners = ["Taco","Pizza","Hamburger"];
var getDinnerLinkButton = document.getElementById("get-dinner-link");
var addDinnerLink = document.getElementById("add-dinner-link");

function add(text) {
    var dinnerList = document.getElementById("dinner-list");
    var	li = document.createElement("li");
    if(li !== ""){
        li.innerHTML = text;
        dinners.push(text);
        dinnerList.appendChild(li);
        document.getElementById("name").value = null;
        document.getElementById("name").focus();
    }
}

//buttons
document.getElementById("add-dinner").addEventListener("click",function(){
    add(document.getElementById("name").value);
});

document.getElementById("get-dinner").addEventListener("click",function(){
    var dinner = dinners[Math.floor(Math.random()*dinners.length)];
    document.getElementById("dinner-result").innerHTML = dinner;
});

getDinnerLinkButton.addEventListener("click",function(){
    getDinnerSection.className = "";
    addDinnerSection.className = "hidden";

    getDinnerLinkButton.className = "active";
    addDinnerLink.className = "";
});
addDinnerLink.addEventListener("click",function(){
    getDinnerSection.className = "hidden";
    addDinnerSection.className = "";

    getDinnerLinkButton.className = "";
    addDinnerLink.className = "active";
});

