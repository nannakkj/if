const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset === 0) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset === 0) {
    logo.classList.remove("hidden");
    logo.classList.add("sex");
  } else {
    logo.classList.add("hidden");
    logo.classList.remove("sex");
  }
});