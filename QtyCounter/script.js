"use strict";

const quantity1 = document.getElementsByClassName("quantity")[0];
const btnMinus = document.getElementsByClassName("minus-btn")[0];
const btnPlus = document.querySelector(".plus-btn");

// if(btnMinus.addEventListener('click', for (let quantity = 0; quantity < 0; quantity--))
// )
let quantity = 0;
btnMinus.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantity1.innerText = quantity;
  }
});
