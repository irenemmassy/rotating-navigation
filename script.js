const close = document.getElementById("close");
const open = document.getElementById("open");
const container = document.querySelector(".container");

open.addEventlistener("click", () => container.classList.add("show-nav"));
close.addEventlistener("click", () => container.classList.add("show-nav"));
