"use strict";

const dropdownLinks = document.querySelectorAll(".dropdown");
const menuOpener = document.querySelector("#open");
const menuCloser = document.querySelector("#close");
const mobList = document.querySelector(".mob-list");

[...dropdownLinks].forEach((link) => {
    if (window.innerWidth > 800) {
        link.addEventListener("mouseenter", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.add("show");
        });

        link.addEventListener("mouseleave", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.remove("show");
        });
    } else {
        link.querySelector(".link").addEventListener("click", (e) => {
            e.preventDefault();
        });

        link.addEventListener("click", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.toggle("show");
        });
    }
});
menuOpener.addEventListener("click", () => {
    mobList.classList.add("show");
    document.body.style.overflow = "hidden";
    menuCloser.classList.add("show");
    menuOpener.classList.remove("show");
});
menuCloser.addEventListener("click", () => {
    mobList.classList.remove("show");
    document.body.style.overflow = "visible";
    menuCloser.classList.remove("show");
    menuOpener.classList.add("show");
});
