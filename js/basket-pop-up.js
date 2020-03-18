var popup = document.querySelector(".basket-pop-up");
var close = document.querySelector(".close-basket");

document.querySelectorAll(".buy").forEach(element => {
  element.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("basket-pop-up-show");
  })

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("basket-pop-up-show");
  })

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("basket-pop-up-show")) {
        popup.classList.remove("basket-pop-up-show");
      }
    }
  })
});
