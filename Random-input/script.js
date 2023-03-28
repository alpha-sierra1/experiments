// "use strict";

// const dropdownHeading = document.querySelector(".box-1");
// const dropdownButton = document.querySelector(".box-1 button");
// const dropdownBox = document.querySelector(".box-2");
// const dropdownMenuItems = document.querySelectorAll("box-2 p");

// // if (
// //   dropdownButton.addEventListener(
// //     "click",
// //     dropdownMenu.classList.remove("hidden")
// //   )
// // );

// dropdownMenuItems.forEach((menuItem) => {
//   menuItem.addEventListener("click", () => {
//     dropdownBox.classList.add("hidden");
//   });
// });

// dropdownButton.addEventListener("click", () => {
//   dropdownBox.classList.remove("hidden");
// });

"use strict";

const dropdownButton = document.querySelector(".box-1 button");
const dropdownBox = document.querySelector(".box-2");
const dropdownItems = document.querySelectorAll("box-2 p");

dropdownButton.addEventListener("click", () => {
  dropdownItems.classList.toggle("hidden");
});
