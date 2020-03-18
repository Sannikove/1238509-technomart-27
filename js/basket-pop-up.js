var basket = document.querySelector(".basket-pop-up");
var basketClose = document.querySelector(".close-basket");

document.querySelectorAll(".buy").forEach(element => {
  element.addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.add("basket-pop-up-show");
    basket.classList.remove("basket-pop-up-hide");
  })

  basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.add("basket-pop-up-hide");
    setTimeout (function(){basket.classList.remove("basket-pop-up-show");},600);
  })

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (basket.classList.contains("basket-pop-up-show")) {
        basket.classList.add("basket-pop-up-hide");
      setTimeout (function(){basket.classList.remove("basket-pop-up-show");},600);
      }
    }
  })
});
