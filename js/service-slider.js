var delivery = document.querySelector(".delivery-slide");
var guarantee = document.querySelector(".guarantee-slide");
var credit = document.querySelector(".credit-slide");
var btn = document.querySelector(".switch");
var deliveryBtn = btn.querySelector("button:first-child");
var guaranteeBtn = btn.querySelector("button:nth-child(2)");
var creditBtn = btn.querySelector("button:last-child");

deliveryBtn.addEventListener("click", function (evt){
    evt.preventDefault();
    delivery.classList.remove("delivery-slide-hide");
    guarantee.classList.remove("guarantee-slide-show");
    credit.classList.remove("credit-slide-show");
    deliveryBtn.classList.add("switch-active");
    guaranteeBtn.classList.remove("switch-active");
    creditBtn.classList.remove("switch-active");
})

guaranteeBtn.addEventListener("click", function (evt){
    evt.preventDefault();
    delivery.classList.add("delivery-slide-hide");
    guarantee.classList.add("guarantee-slide-show");
    credit.classList.remove("credit-slide-show");
    deliveryBtn.classList.remove("switch-active");
    guaranteeBtn.classList.add("switch-active");
    creditBtn.classList.remove("switch-active");
})

creditBtn.addEventListener("click", function (evt){
    evt.preventDefault();
    delivery.classList.add("delivery-slide-hide");
    guarantee.classList.remove("guarantee-slide-show");
    credit.classList.add("credit-slide-show");
    deliveryBtn.classList.remove("switch-active");
    guaranteeBtn.classList.remove("switch-active");
    creditBtn.classList.add("switch-active");
})