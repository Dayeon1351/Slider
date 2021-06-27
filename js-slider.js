const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");
const lastSlide = document.querySelector(".slider__item:last-child");

const nextButton = document.querySelector(".nextBtn");
const prevButton = document.querySelector(".prevBtn");

function slideNext() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    currentSlide.classList.remove(SHOWING_CLASS);

    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        nextSlide.classList.add(SHOWING_CLASS);
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}

function slidePrev() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    currentSlide.classList.remove(SHOWING_CLASS);

    const prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
        prevSlide.classList.add(SHOWING_CLASS);
    } else {
        lastSlide.classList.add(SHOWING_CLASS);
    }

}

function init() {
    nextButton.addEventListener("click",slideNext);
    prevButton.addEventListener("click", slidePrev);
    
}
init();
