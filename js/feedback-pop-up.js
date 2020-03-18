// script for feedback pop-up «Заблудились?..»

var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".feedback-pop-up");
var close = document.querySelector(".close-feedback");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var mail = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

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

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-pop-up-hide");
  popup.classList.remove("feedback-pop-up-error");
  setTimeout(function () {
    popup.classList.remove("feedback-pop-up-show");
  }, 600);
})

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
