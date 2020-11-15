let injectHere = document.getElementById('injectHere');

let sneakPeak = document.getElementById('menuBtn1');
let flavors = document.getElementById("menuBtn2");
let milkshakes = document.getElementById("menuBtn3");
let middleEastern = document.getElementById("menuBtn4");
let specialtyItems = document.getElementById("menuBtn5");
let randomFlavor = document.getElementById("menuBtn6");


let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");
let icon6 = document.getElementById("icon6");


let oneFlavor = document.getElementById("oneFlavor");
let twoFlavor = document.getElementById("twoFlavor");
let threeFlavor = document.getElementById("threeFlavor");

let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");

let randomFlavorPick = ["CHOCO-KAY", "SALTED CARAMEL"," BASTANI SONATI", "CHOCO-MINT", "THE DIRTY TUX", "PINK POLKA DOT", "A 'WAKE ME UP'", 
                  "'THE ONE WITH NUTELLA'","IT'S CINNA-BOMB", "S'MORE PLEASE!",  "STRAWBERRY CHEESECAKE", "PLAIN JANE"];



oneFlavor.addEventListener("click", function()
{
    let ran = Math.floor((Math.random() * randomFlavorPick.length));
    output1.innerHTML = randomFlavorPick[ran];
    output2.innerHTML = null;
    output3.innerHTML = null;
    


});

twoFlavor.addEventListener("click", function(){
    let ran = Math.floor((Math.random() * randomFlavorPick.length));
    let ran2 =Math.floor((Math.random() * randomFlavorPick.length));

    output1.innerHTML = randomFlavorPick[ran];
    output2.innerHTML = randomFlavorPick[ran2];
    output3.innerHTML = null;
});

threeFlavor.addEventListener("click", function(){
    let ran = Math.floor((Math.random() * randomFlavorPick.length));
    let ran2 =Math.floor((Math.random() * randomFlavorPick.length));
    let ran3 = Math.floor((Math.random() * randomFlavorPick.length));

    output1.innerHTML = randomFlavorPick[ran];
    output2.innerHTML = randomFlavorPick[ran2];
    output3.innerHTML = randomFlavorPick[ran3];
});

sneakPeak.addEventListener("click", function(){

    console.log("clicked");
    loadData("../pages/randomFlavor.html");

    icon1.removeAttribute("class", "wiggle");
    icon1.setAttribute("class", "spinner");

    icon2.removeAttribute("class", "spinner");  // for loop and function can make this code cleaner
    icon3.removeAttribute("class", "spinner");
    icon4.removeAttribute("class", "spinner");
    icon5.removeAttribute("class", "spinner");
    icon6.removeAttribute("class", "spinner");


    icon2.setAttribute("class", "wiggle");
    icon3.setAttribute("class", "wiggle");
    icon4.setAttribute("class", "wiggle");
    icon5.setAttribute("class", "wiggle");
    icon6.setAttribute("class", "wiggle");
    
});

flavors.addEventListener("click", function(){
    loadData("../pages/flavors.html");

    icon2.removeAttribute("class", "wiggle");
    icon2.setAttribute("class", "spinner");

    icon1.removeAttribute("class", "spinner");
    icon3.removeAttribute("class", "spinner");
    icon4.removeAttribute("class", "spinner");
    icon5.removeAttribute("class", "spinner");
    icon6.removeAttribute("class", "spinner");


    icon1.setAttribute("class", "wiggle");
    icon3.setAttribute("class", "wiggle");
    icon4.setAttribute("class", "wiggle");
    icon5.setAttribute("class", "wiggle");
    icon6.setAttribute("class", "wiggle");
});

milkshakes.addEventListener("click", function(){
    loadData("../pages/milkshakes.html");
    
    icon3.removeAttribute("class", "wiggle");
    icon3.setAttribute("class", "spinner");

    icon1.removeAttribute("class", "spinner");
    icon2.removeAttribute("class", "spinner");
    icon4.removeAttribute("class", "spinner");
    icon5.removeAttribute("class", "spinner");
    icon6.removeAttribute("class", "spinner");


    icon1.setAttribute("class", "wiggle");
    icon2.setAttribute("class", "wiggle");
    icon4.setAttribute("class", "wiggle");
    icon5.setAttribute("class", "wiggle");
    icon6.setAttribute("class", "wiggle");


});

middleEastern.addEventListener("click", function(){
    loadData("../pages/middleEastern.html");

    icon4.removeAttribute("class", "wiggle");
    icon4.setAttribute("class", "spinner");

    icon1.removeAttribute("class", "spinner");
    icon3.removeAttribute("class", "spinner");
    icon2.removeAttribute("class", "spinner");
    icon5.removeAttribute("class", "spinner");
    icon6.removeAttribute("class", "spinner");


    icon1.setAttribute("class", "wiggle");
    icon3.setAttribute("class", "wiggle");
    icon2.setAttribute("class", "wiggle");
    icon5.setAttribute("class", "wiggle");
    icon6.setAttribute("class", "wiggle");
});

specialtyItems.addEventListener("click", function(){
    loadData("../pages/specialtyItems.html");

    icon5.removeAttribute("class", "wiggle");
    icon5.setAttribute("class", "spinner");

    icon1.removeAttribute("class", "spinner");
    icon3.removeAttribute("class", "spinner");
    icon4.removeAttribute("class", "spinner");
    icon2.removeAttribute("class", "spinner");
    icon6.removeAttribute("class", "spinner");


    icon1.setAttribute("class", "wiggle");
    icon3.setAttribute("class", "wiggle");
    icon4.setAttribute("class", "wiggle");
    icon2.setAttribute("class", "wiggle");
    icon6.setAttribute("class", "wiggle");
});

randomFlavor.addEventListener("click", function(){
    loadData("../pages/carousel.html");

    icon6.removeAttribute("class", "wiggle");
    icon6.setAttribute("class", "spinner");

    icon1.removeAttribute("class", "spinner");
    icon3.removeAttribute("class", "spinner");
    icon4.removeAttribute("class", "spinner");
    icon5.removeAttribute("class", "spinner");
    icon2.removeAttribute("class", "spinner");


    icon1.setAttribute("class", "wiggle");
    icon3.setAttribute("class", "wiggle");
    icon4.setAttribute("class", "wiggle");
    icon5.setAttribute("class", "wiggle");
    icon2.setAttribute("class", "wiggle");
});

function loadData(url){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(this.responseText);
            injectHere.innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();  
}