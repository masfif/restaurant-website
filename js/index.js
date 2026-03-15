/* ===============================
   NAVBAR SCROLL EFFECT
=================================*/
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    // navbar background change
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // show scroll button
    toggleScrollTop();
});


/* ===============================
   SCROLL TO TOP BUTTON
=================================*/
const topBtn = document.getElementById("to-top");

function toggleScrollTop() {
    if (window.scrollY > 100) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
}

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ===============================
   MOBILE MENU TOGGLE
=================================*/
const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuIcon = menuBtn.querySelector("i");
const links = document.querySelectorAll(".nav_items a");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("open");
    navLinks.classList.toggle("open");
    navbar.classList.toggle("menu-open");
    document.body.classList.toggle("no-scroll");

    // change icon
    const isOpen = navLinks.classList.contains("open");
    menuIcon.className = isOpen
        ? "ri-close-line"
        : "ri-menu-line";
});

// auto close menu when click link
links.forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.classList.remove("open");
        navLinks.classList.remove("open");
        navbar.classList.remove("menu-open");
        document.body.classList.remove("no-scroll");
        menuIcon.className = "ri-menu-line";
    });
});


/* ===============================
   HERO LOAD ANIMATION
=================================*/
window.addEventListener("load", () => {

    const heroElements = document.querySelectorAll(".main .animate");

    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 150);
    });
});


/* ===============================
   SCROLL REVEAL ANIMATION
=================================*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".animate").forEach(el => {
    observer.observe(el);
});