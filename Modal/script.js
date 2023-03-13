"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

/* const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener("click", showModal);

closeModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal); */

openModal.addEventListener("click", function () {
  modal.style.display = "block";
  overlay.style.display = "block";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
});
