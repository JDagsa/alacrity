// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const darkToggle = document.querySelector("button.dark-toggle")
const html = document.querySelector(".html")
const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")

// add event listeners for navbar mobile
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// add event listeners for dark mode
darkToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");
  });