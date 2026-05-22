const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

/* Mobile Menu */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* Scroll Animation */

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

/* Initial Hidden State */

sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "all 0.8s ease";

});