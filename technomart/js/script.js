const modalFeedback = document.querySelector(".feedback-form-wrapper");
const lostButton = document.querySelector(".lost-button");
const modalMap = document.querySelector(".modal-map");
const map = document.querySelector(".map-image");
const feedbackClose = document.querySelector(".feedback-close");
const mapClose = document.querySelector(".map-close");
const modalCart = document.querySelector(".modal-cart-wrapper");
const closeCart = document.querySelector(".close-cart-modal");
const buyButton = document.querySelectorAll(".buy-button");
const deliveryButton = document.querySelector(".delivery-slide-button");
const warrantyButton = document.querySelector(".warranty-slide-button");
const creditButton = document.querySelector(".credit-slide-button");
const slideDelivery = document.querySelector(".service-description-delivery");
const slideWarranty = document.querySelector(".service-description-warranty");
const slideCredit = document.querySelector(".service-description-credit");


if (buyButton && buyButton.length) {
  for(let i = 0; i < buyButton.length; i++) {
    buyButton[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modalCart.classList.add("modal-show");
    })
  }
};

closeCart.addEventListener("click", function (evt) {
  modalCart.classList.remove("modal-show");
});

if (deliveryButton) {
deliveryButton.addEventListener("click", function (evt) {
  slideDelivery.classList.remove("slide-hidden");
  slideWarranty.classList.add("slide-hidden");
  slideCredit.classList.add("slide-hidden");
  deliveryButton.classList.add("services-item-selected");
  warrantyButton.classList.remove("services-item-selected");
  creditButton.classList.remove("services-item-selected");
});}

if (warrantyButton) {
warrantyButton.addEventListener("click", function (evt) {
  slideDelivery.classList.add("slide-hidden");
  slideWarranty.classList.remove("slide-hidden");
  slideCredit.classList.add("slide-hidden");
  deliveryButton.classList.remove("services-item-selected");
  warrantyButton.classList.add("services-item-selected");
  creditButton.classList.remove("services-item-selected");
});}

if (creditButton) {
creditButton.addEventListener("click", function (evt) {
  slideDelivery.classList.add("slide-hidden");
  slideWarranty.classList.add("slide-hidden");
  slideCredit.classList.remove("slide-hidden");
  deliveryButton.classList.remove("services-item-selected");
  warrantyButton.classList.remove("services-item-selected");
  creditButton.classList.add("services-item-selected");
});}

if (lostButton) {
lostButton.addEventListener("click", function (evt) {
  evt.preventDefault();
	modalFeedback.classList.add("modal-show");
	if (modalMap.classList.contains("modal-show")){
		modalMap.classList.remove("modal-show");
	}
});

feedbackClose.addEventListener("click", function (evt) {
	modalFeedback.classList.remove("modal-show");
});}

if (map) {
map.addEventListener("click", function (evt) {
	modalMap.classList.add("modal-show");
	if (modalFeedback.classList.contains("modal-show")){
		modalFeedback.classList.remove("modal-show");
	}
});

mapClose.addEventListener("click", function (evt) {
	modalMap.classList.remove("modal-show");
});}

