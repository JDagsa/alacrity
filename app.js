// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const darkToggle = document.querySelector("button.dark-toggle")
const html = document.querySelector(".html");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const mainShow = document.querySelector(".main-show")
const mainContent = document.querySelector(".main")
const mainExpand = document.querySelector(".mainExpand")
const mainClose = document.querySelector(".mainClose")
const projectsShow = document.querySelector(".projects-show")
const projectsContent = document.querySelector(".projects")
const projectsExpand = document.querySelector(".projectsExpand")
const projectsClose = document.querySelector(".projectsClose")
const agenciesShow = document.querySelector(".agencies-show")
const agenciesContent = document.querySelector(".agencies")
const agenciesExpand = document.querySelector(".agenciesExpand")
const agenciesClose = document.querySelector(".agenciesClose")
var statusPrint = document.querySelector(".toggle-status");
var darkStatus;
let darkMode = localStorage.getItem("dark-mode");

if (darkMode === "enabled") {
  html.classList.add("dark");
  sun.classList.add("hidden");
  moon.classList.remove("hidden");
  darkStatus = "off"
  statusPrint.innerHTML=darkStatus
} else {
  darkStatus = "on"
  statusPrint.innerHTML=darkStatus
}

mainShow.addEventListener("click", () => {
  mainContent.classList.toggle("hidden");
  mainExpand.classList.toggle("hidden");
  mainClose.classList.toggle("hidden");
});

projectsShow.addEventListener("click", () => {
  projectsContent.classList.toggle("hidden");
  projectsExpand.classList.toggle("hidden");
  projectsClose.classList.toggle("hidden");
});

agenciesShow.addEventListener("click", () => {
  agenciesContent.classList.toggle("hidden");
  agenciesExpand.classList.toggle("hidden");
  agenciesClose.classList.toggle("hidden");
});

// add event listeners for navbar mobile
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// add event listeners for dark mode
darkToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");
    if (html.classList.contains('dark')) {
      localStorage.setItem("dark-mode", "enabled")
      darkStatus = "off"
    } else {
      localStorage.setItem("dark-mode", "disabled")
      darkStatus = "on"
    }
    statusPrint.innerHTML=darkStatus
});