"use strict";
// Hämtar klasser från headern till hamburgarmenyn
const menuButton = document.querySelector(".header-menu");
const menuLinks = document.querySelector(".menu");

// Hämtar element från bildspelet
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
const counter = document.querySelector(".counterslide");
const slideImg = document.querySelector(".slideshow");


// Öppnar och stänger hamburgarmenyn
menuButton.addEventListener("click", function() {
    menuLinks.classList.toggle("open");
})


/**
 * Bilspelet
 */

//Bilderna och alt-texter till bildspelet
const pictures = [
    {
        src: "images/bildserie010.jpg",
        alt: "En kossa som ligger i ett grönt landskap, lite gultonad bild med äkta färger"
    },
    {
        src: "images/bildserie001.jpg",
        alt: "Lila fingerborgsblommor varav en klocka är mintgrön. Gröna berg bakom blommorna i ljusa färger"
    },
    {
        src: "images/bildserie006.jpg",
        alt: "Tagen uppifrån, en vit blomma med rosa kanter och gul mitten, ljusare färger, gräset bakom är någon mer deskretare grön färg"
    }
];

let picNow = 0;

//När man trycker på högerknappen i bildspelet, så räknar det ut vilken bild som ska visas
function buttonNextPic () {

    if (picNow === pictures.length -1) {
        picNow = 0;
    } else { 
        picNow++;
    }

    showNextPic(picNow);
}

//När man trycker på vänsterknappen i bildspelet, så räknar det ut vilken bild som ska visas
function buttonPrevPic () {

    if (picNow === 0) {
        picNow = pictures.length -1;
    } else {
        picNow--;
    }

    showNextPic(picNow);
}

//Visar upp nästa bild, samt skriver ut vilket nummer på bilden det är
function showNextPic (picNow) {
    slideImg.src = pictures[picNow].src;
    slideImg.alt = pictures[picNow].alt;

    counter.innerHTML = `${picNow +1}/${pictures.length}`;
}

//Lyssnar på knapptrycken, på den sidan knapparna existerar på
if (prevButton && nextButton) {
    prevButton.addEventListener("click", buttonPrevPic);
    nextButton.addEventListener("click", buttonNextPic);
}