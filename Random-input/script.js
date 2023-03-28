"use strict";

const dropdownHeading = document.querySelector(".box-1");
const dropdownButton = document.querySelector(".box-1 button");
const dropdownBox = document.querySelector(".box-2");
const dropdownMenuItems = document.querySelectorAll("box-2 p");

// if (
//   dropdownButton.addEventListener(
//     "click",
//     dropdownMenu.classList.remove("hidden")
//   )
// );

("use strict");

function toggleDropdown() {
  dropdownBox.classList.toggle("hidden");
}

function hideDropdown() {
  dropdownBox.classList.add("hidden");
}

dropdownButton.addEventListener("click", toggleDropdown);

dropdownMenuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", hideDropdown);
});
