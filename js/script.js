let injectHere = document.getElementById('injectHere');

let carousel = document.getElementById('menuBtn1');
let flavors = document.getElementById("menuBtn2");
let milkshakes = document.getElementById("menuBtn3");
let middleEastern = document.getElementById("menuBtn4");
let specialtyItems = document.getElementById("menuBtn5");

milkshakes.addEventListener("click", function(){
    loadData("../pages/milkshakes.html");
});

carousel.addEventListener("click", function(){
    loadData("../pages/carousel.html");
});

flavors.addEventListener("click", function(){
    loadData("../pages/flavors.html");
});

middleEastern.addEventListener("click", function(){
    loadData("../pages/middleEastern.html");
});

specialtyItems.addEventListener("click", function(){
    loadData("../pages/specialtyItems.html");
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