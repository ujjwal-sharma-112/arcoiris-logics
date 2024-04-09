var menu = document.getElementById("menu");
var overlay = document.querySelector(".overlay");
var close_btn = document.getElementById("close"); // Assuming "close" is the ID for the close button

function toggleMenu() {
  overlay.classList.add("active");
}

function closeMenu() {
  overlay.classList.remove("active");
}

// Attach event listeners outside the functions
menu.addEventListener("click", toggleMenu);
close_btn.addEventListener("click", closeMenu);