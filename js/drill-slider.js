var slider = document.querySelector(".menu-slider");
var leftArrow = slider.querySelector(".left-arrow");
var rightArrow = slider.querySelector(".right-arrow");
var firstSlide = slider.querySelector(".first-slide");
var secondSlide = slider.querySelector(".second-slide");
var leftIndicator = slider.querySelector(".indicator-btn:first-child");
var rightIndicator = slider.querySelector(".indicator-btn:last-child");

rightArrow.addEventListener("click", function (evt){
    evt.preventDefault();
    firstSlide.classList.add("first-slide-hide");
    secondSlide.classList.add("second-slide-show");
    leftIndicator.classList.remove("active");
    rightIndicator.classList.add("active");
})

leftArrow.addEventListener("click", function (evt){
    evt.preventDefault();
    firstSlide.classList.remove("first-slide-hide");
    secondSlide.classList.remove("second-slide-show");
    leftIndicator.classList.add("active");
    rightIndicator.classList.remove("active");
})