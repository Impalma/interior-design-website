
const carouselSlide = document.querySelector(".slider");
const carouselImages = document.querySelectorAll(".slider img");


carouselImages.forEach( function (carouselSlide, index) {
    carouselSlide.style.left = `${index * 100}%`;
});

let count = 0;


function carousel () {
    carouselImages.forEach ( function (carouselSlide) {
        if (count > carouselImages.length -1 ) {
            count = 0
        }
        if(count < 0 ) {
            count = carouselImages.length -1;
        }

        carouselSlide.style.transform = `translateX(-${count * 100} % )`;
    });
}
 
setInterval(() => {
    count++;
    carousel()
}, 500);

carousel();







//buttons
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 
        "translateX(" + (-size * counter) + "px)";

//button Listeners

nextBtn.addEventListener("click", () => {
    if( counter >= carouselImages.length -1 ) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 
        "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
    if( counter <= 0 ) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 
        "translateX(" + (-size * counter) + "px)";

});

carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 
        "translateX(" + (-size * counter) + "px)";
    }
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 
        "translateX(" + (-size * counter) + "px)";
    }
});

//







