var menu = document.getElementById("menu");
var overlay = document.querySelector(".overlay");
var close_btn = document.getElementById("close");

function toggleMenu() {
  overlay.classList.add("active");
}

function closeMenu() {
  overlay.classList.remove("active");
}

menu.addEventListener("click", toggleMenu);
close_btn.addEventListener("click", closeMenu);