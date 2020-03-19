// drill slider
var leftArrow = document.querySelector(".left-arrow");
var rightArrow = document.querySelector(".right-arrow");
var firstSlide = document.querySelector(".first-slide");
var secondSlide = document.querySelector(".second-slide");
var leftIndicator = document.querySelector(".indicator-btn:first-child");
var rightIndicator = document.querySelector(".indicator-btn:last-child");
// service-slider
var delivery = document.querySelector(".delivery-slide");
var guarantee = document.querySelector(".guarantee-slide");
var credit = document.querySelector(".credit-slide");
var btn = document.querySelector(".switch");
if (btn) {
  var deliveryBtn = btn.querySelector("button:first-child");
  var guaranteeBtn = btn.querySelector("button:nth-child(2)");
  var creditBtn = btn.querySelector("button:last-child");
}
// basket popup
var basket = document.querySelector(".basket-pop-up");
var basketClose = document.querySelector(".close-basket");
// feedback popup
var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".feedback-pop-up");
var close = document.querySelector(".close-feedback");
if (popup) {
  var login = popup.querySelector("[name=name]");
  var form = popup.querySelector("form");
  var mail = popup.querySelector("[name=mail]");
}
var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";
// map
var open = document.querySelector(".map-open");
var map = document.querySelector(".map-pop-up");
var closeMap = document.querySelector(".close-map");

// drill slider
if (rightArrow) {
  rightArrow.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstSlide.classList.add("first-slide-hide");
    secondSlide.classList.add("second-slide-show");
    leftIndicator.classList.remove("active");
    rightIndicator.classList.add("active");
  })
}

if (leftArrow) {
  leftArrow.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstSlide.classList.remove("first-slide-hide");
    secondSlide.classList.remove("second-slide-show");
    leftIndicator.classList.add("active");
    rightIndicator.classList.remove("active");
  })
}
// service slider
if (deliveryBtn) {
  deliveryBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    delivery.classList.remove("delivery-slide-hide");
    guarantee.classList.remove("guarantee-slide-show");
    credit.classList.remove("credit-slide-show");
    deliveryBtn.classList.add("switch-active");
    guaranteeBtn.classList.remove("switch-active");
    creditBtn.classList.remove("switch-active");
  })
}
if (guaranteeBtn) {
  guaranteeBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    delivery.classList.add("delivery-slide-hide");
    guarantee.classList.add("guarantee-slide-show");
    credit.classList.remove("credit-slide-show");
    deliveryBtn.classList.remove("switch-active");
    guaranteeBtn.classList.add("switch-active");
    creditBtn.classList.remove("switch-active");
  })
}
if (creditBtn) {
  creditBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    delivery.classList.add("delivery-slide-hide");
    guarantee.classList.remove("guarantee-slide-show");
    credit.classList.add("credit-slide-show");
    deliveryBtn.classList.remove("switch-active");
    guaranteeBtn.classList.remove("switch-active");
    creditBtn.classList.add("switch-active");
  })
}
// basket popup
if (document.querySelectorAll(".buy")) {
  document.querySelectorAll(".buy").forEach(element => {
    element.addEventListener("click", function (evt) {
      evt.preventDefault();
      basket.classList.add("basket-pop-up-show");
      basket.classList.remove("basket-pop-up-hide");
    })
  })
}
if (basketClose) {
  basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.add("basket-pop-up-hide");
    setTimeout(function () {
      basket.classList.remove("basket-pop-up-show");
    }, 600);
  })
}
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (basket.classList.contains("basket-pop-up-show")) {
      basket.classList.add("basket-pop-up-hide");
      setTimeout(function () {
        basket.classList.remove("basket-pop-up-show");
      }, 600);
    }
  }
})
// feedback popup
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-pop-up-show");
    popup.classList.remove("feedback-pop-up-hide");
    if (storage) {
      login.value = storage;
      mail.focus();
    } else {
      login.focus();
      if (storage) {
        login.value = storage;
      }
    }
  })
}
if (close) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-pop-up-hide");
    popup.classList.remove("feedback-pop-up-error");
    setTimeout(function () {
      popup.classList.remove("feedback-pop-up-show");
    }, 600);
  })
}
if (form) {
  form.addEventListener("submit", function (evt) {
    if (!login.value || !mail.value) {
      evt.preventDefault();
      popup.classList.remove("feedback-pop-up-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("feedback-pop-up-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  })
}
if (popup) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("feedback-pop-up-show")) {
        popup.classList.add("feedback-pop-up-hide");
        popup.classList.remove("feedback-pop-up-error");
        setTimeout(function () {
          popup.classList.remove("feedback-pop-up-show");
        }, 600);
      }
    }
  });
}
//   map
if (open) {
  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("map-pop-up-show");
    map.classList.remove("map-pop-up-hide");
  })
}
if (closeMap) {
  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("map-pop-up-hide");
    setTimeout(function () {
      map.classList.remove("map-pop-up-show");
    }, 600);
  })
}
if (map) {
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
}
