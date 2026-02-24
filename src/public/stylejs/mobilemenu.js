const menu = document.getElementById("mobile-menu");
const openBtn = document.querySelector(".menu-open-btn");
const closeBtn = document.querySelector(".menu-close-btn");

openBtn.addEventListener("click", () => {
    menu.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("is-open");
});