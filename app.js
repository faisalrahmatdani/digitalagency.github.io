const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".navbar .menu");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// typing text animation script
var typed = new Typed(".typing", {
  strings: ["WEB DEVELOPMENT", "MOBILE DEVELOPMENT", "SISTEM INFORMASI", "CONTENT DEVELOPMENT", "SEARCH ENGINE OPTIMIZATION"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
