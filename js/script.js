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


sneakPeak.addEventListener("click", function(){
    loadData("../pages/carousel.html");

    icon1.removeAttribute("class", "wiggle");
    icon1.setAttribute("class", "spinner");

    icon2.removeAttribute("class", "spinner");
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
    loadData("../pages/randomFlavor.html");

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