// #2-2. JS DOM Functions & #2-3. Modifying the DOM with JS
// Document Object Model
const title = document.getElementById("title");
console.log(title);
console.dir(title);

title.innerHTML = "Hi! From JS";
title.style.color = "Gray";
document.title = "new title";
