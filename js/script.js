let injectHere = document.getElementById('injectHere');


// inner nav bar
let sneakPeak = document.getElementById('menuBtn1');
let flavors = document.getElementById("menuBtn2");
let milkshakes = document.getElementById("menuBtn3");
let middleEastern = document.getElementById("menuBtn4");
let specialtyItems = document.getElementById("menuBtn5");
let randomFlavor = document.getElementById("menuBtn6");

// outer nav bar 
let sneakPeak2 = document.getElementById('menuBtn12');
let flavors2 = document.getElementById("menuBtn22");
let milkshakes2 = document.getElementById("menuBtn32");
let middleEastern2 = document.getElementById("menuBtn42");
let specialtyItems2 = document.getElementById("menuBtn52");
let randomFlavor2 = document.getElementById("menuBtn62");

// array of elements
let icon = document.getElementById("icon");


let oneFlavor = document.getElementById("oneFlavor");
let twoFlavor = document.getElementById("twoFlavor");
let threeFlavor = document.getElementById("threeFlavor");
//copy
let oneFlavor2 = document.getElementById("oneFlavor2");
let twoFlavor2 = document.getElementById("twoFlavor2");
let threeFlavor2 = document.getElementById("threeFlavor2");


//orginal
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");



let randomFlavorPick = ["Choco-Kay", "Salted Caramel","Bastani Sonati", "Choco-Mint", "The Dirty Tux", "Pink Polka Dot", "A 'Wake Me Up'", 
                  "'The One With Nutella'","It's Cinna-Bomb", "S'more Please!",  "Strawberry Cheesecake", "Plain Jane"];


// outputs one flavor
oneFlavor.addEventListener("click", function()
{
    console.log("It works kinda?");
    let ran = Math.floor((Math.random() * randomFlavorPick.length));

    output1.innerHTML = randomFlavorPick[ran];
    output2.innerHTML = null;
    output3.innerHTML = null;
    


});

// outputs two flavors
twoFlavor.addEventListener("click", function(){
    let ran = Math.floor((Math.random() * randomFlavorPick.length));
    let ran2 =Math.floor((Math.random() * randomFlavorPick.length));

    output1.innerHTML = randomFlavorPick[ran];
    output2.innerHTML = randomFlavorPick[ran2];
    output3.innerHTML = null;
});

// outputs three flavors
threeFlavor.addEventListener("click", function(){
    let ran = Math.floor((Math.random() * randomFlavorPick.length));
    let ran2 =Math.floor((Math.random() * randomFlavorPick.length));
    let ran3 = Math.floor((Math.random() * randomFlavorPick.length));

    output1.innerHTML = randomFlavorPick[ran];
    output2.innerHTML = randomFlavorPick[ran2];
    output3.innerHTML = randomFlavorPick[ran3];
});


//inner nav bar click events

sneakPeak.addEventListener("click", function(){

    console.log("clicked");
    loadData("../pages/randomFlavor.html");

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

// outer nav bar
sneakPeak2.addEventListener("click", function(){

    console.log("clicked");
    loadData("../pages/randomFlavor.html");

    icon12.removeAttribute("class", "wiggle");
    icon12.setAttribute("class", "spinner");

    icon22.removeAttribute("class", "spinner");  // for loop and function can make this code cleaner
    icon32.removeAttribute("class", "spinner");
    icon42.removeAttribute("class", "spinner");
    icon52.removeAttribute("class", "spinner");
    icon62.removeAttribute("class", "spinner");


    icon22.setAttribute("class", "wiggle");
    icon32.setAttribute("class", "wiggle");
    icon42.setAttribute("class", "wiggle");
    icon52.setAttribute("class", "wiggle");
    icon62.setAttribute("class", "wiggle");
    
});


flavors2.addEventListener("click", function(){
    loadData("../pages/flavors.html");

    icon22.removeAttribute("class", "wiggle");
    icon22.setAttribute("class", "spinner");

    icon12.removeAttribute("class", "spinner");
    icon32.removeAttribute("class", "spinner");
    icon42.removeAttribute("class", "spinner");
    icon52.removeAttribute("class", "spinner");
    icon62.removeAttribute("class", "spinner");


    icon12.setAttribute("class", "wiggle");
    icon32.setAttribute("class", "wiggle");
    icon42.setAttribute("class", "wiggle");
    icon52.setAttribute("class", "wiggle");
    icon62.setAttribute("class", "wiggle");
});

milkshakes2.addEventListener("click", function(){
    loadData("../pages/milkshakes.html");
    
    icon32.removeAttribute("class", "wiggle");
    icon32.setAttribute("class", "spinner");

    icon12.removeAttribute("class", "spinner");
    icon22.removeAttribute("class", "spinner");
    icon42.removeAttribute("class", "spinner");
    icon52.removeAttribute("class", "spinner");
    icon62.removeAttribute("class", "spinner");


    icon12.setAttribute("class", "wiggle");
    icon22.setAttribute("class", "wiggle");
    icon42.setAttribute("class", "wiggle");
    icon52.setAttribute("class", "wiggle");
    icon62.setAttribute("class", "wiggle");


});

middleEastern2.addEventListener("click", function(){
    loadData("../pages/middleEastern.html");

    icon42.removeAttribute("class", "wiggle");
    icon42.setAttribute("class", "spinner");

    icon12.removeAttribute("class", "spinner");
    icon32.removeAttribute("class", "spinner");
    icon22.removeAttribute("class", "spinner");
    icon52.removeAttribute("class", "spinner");
    icon62.removeAttribute("class", "spinner");


    icon12.setAttribute("class", "wiggle");
    icon32.setAttribute("class", "wiggle");
    icon22.setAttribute("class", "wiggle");
    icon52.setAttribute("class", "wiggle");
    icon62.setAttribute("class", "wiggle");
});

specialtyItems2.addEventListener("click", function(){
    loadData("../pages/specialtyItems.html");

    icon52.removeAttribute("class", "wiggle");
    icon52.setAttribute("class", "spinner");

    icon12.removeAttribute("class", "spinner");
    icon32.removeAttribute("class", "spinner");
    icon42.removeAttribute("class", "spinner");
    icon22.removeAttribute("class", "spinner");
    icon62.removeAttribute("class", "spinner");


    icon12.setAttribute("class", "wiggle");
    icon32.setAttribute("class", "wiggle");
    icon42.setAttribute("class", "wiggle");
    icon22.setAttribute("class", "wiggle");
    icon62.setAttribute("class", "wiggle");
});

randomFlavor2.addEventListener("click", function(){
    loadData("../pages/carousel.html");

    icon62.removeAttribute("class", "wiggle");
    icon62.setAttribute("class", "spinner");

    icon12.removeAttribute("class", "spinner");
    icon32.removeAttribute("class", "spinner");
    icon42.removeAttribute("class", "spinner");
    icon52.removeAttribute("class", "spinner");
    icon22.removeAttribute("class", "spinner");


    icon12.setAttribute("class", "wiggle");
    icon32.setAttribute("class", "wiggle");
    icon42.setAttribute("class", "wiggle");
    icon52.setAttribute("class", "wiggle");
    icon22.setAttribute("class", "wiggle");
});
