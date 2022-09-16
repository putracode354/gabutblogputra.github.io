const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const headingTiga = document.querySelectorAll("h3");
const headingEmpat = document.querySelectorAll("h4");
const headingLima = document.querySelectorAll("h5");
const footerText = document.querySelector(".lead");
const listNav = document.querySelectorAll(".nav-link");

function darkMode() {
  body.classList.toggle("dark-mode");
  footerText.style.color = "white";

  for (let i = 0; i < headingTiga.length; i++) {
    headingTiga[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < headingEmpat.length; i++) {
    headingEmpat[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < headingLima.length; i++) {
    headingLima[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < listNav.length; i++) {
    listNav[i].classList.toggle("dark-mode");
  }
}

toggle.addEventListener("click", () => {
  darkMode();
});
