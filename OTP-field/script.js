"use strict";

// const container = document.querySelector(".div");
// const text1 = document.queryCommandValue(".span-1");
// const text2 = document.queryCommandValue(".span-2");

// JavaScript code to display captions
const container = document.querySelectorAll(".input-1");
// const inputText1 = document.querySelector(".input-1");
// const inputText2 = document.querySelector(".input-2");
// const inputText3 = document.querySelector(".input-3");
// const inputText4 = document.querySelector(".input-4");

container.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === input.maxLength) {
      container[index + 1]?.focus();
    } else if (input.value.length === 0) {
      if (index > 0) {
        container[index - 1].focus();
      }
    }
  });
});
