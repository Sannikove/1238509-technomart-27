var open = document.querySelector(".map-open");
var map = document.querySelector(".map-pop-up");
var close = document.querySelector(".close-map");


open.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("map-pop-up-show");
  map.classList.remove("map-pop-up-hide");
})

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("map-pop-up-hide");
  setTimeout(function () {
    map.classList.remove("map-pop-up-show");
  }, 600);
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("map-pop-up-show")) {
      map.classList.add("map-pop-up-hide");
      setTimeout(function () {
        map.classList.remove("map-pop-up-show");
      }, 600);
    }
  }
})
