// ==================================
// 1. MOBILE NAVIGATION MENU
// ==================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isExpanded);

        menuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isExpanded ? "✕" : "☰";

    });


    // Close the menu when a navigation link is clicked.

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";

        });

    });

}


// ==================================
// 2. AUTOMATIC COPYRIGHT YEAR
// ==================================

const yearElement = document.getElementById("current-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// ==================================
// 3. CONSOLE MESSAGE
// ==================================

console.log("Welcome to Madhab Chandra Swain's Portfolio!");

console.log("Portfolio loaded successfully.");
