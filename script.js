"use strict";

/*
 * WANDERLOG
 * WEEK 01 — BASIC JAVASCRIPT
 */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navList.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });


    /* Close menu after selecting a navigation link */

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navList.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });


    /* Close menu when Escape is pressed */

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navList.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.focus();
        }
    });
}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}