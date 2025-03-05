

// Show/hide menu
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
}

// Change header background on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("scroll", window.scrollY > 50);
});




/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/



//=============== SCROLL REVEAL ANIMATION ===============//
const sr = ScrollReveal({
  origin: "top",  // Animation starts from the top
  distance: "50px", // Moves 50px before settling
  duration: 1000,  // Animation duration (1s)
  delay: 200,  // Delay before animation starts
  reset: true // Repeats animation when scrolling back up
});

// Home Section Animations
sr.reveal(".home__subtitle", { delay: 300 });
sr.reveal(".home__title", { delay: 400 });
sr.reveal(".home__education", { delay: 500 });
sr.reveal(".home__description", { delay: 600 });
sr.reveal(".button", { delay: 700, origin: "bottom" });
sr.reveal(".home__social", { delay: 800, origin: "bottom" });
sr.reveal(".home__image", { delay: 900, origin: "right" });

// Other Sections
sr.reveal(".section__title", { delay: 300 });
sr.reveal(".section__subtitle", { delay: 400 });
sr.reveal(".about__description", { delay: 500 });
sr.reveal(".skills__item", { interval: 100 }); // Staggered animation
sr.reveal(".services__title, .services__description", { interval: 200 });
sr.reveal(".projects__title, .projects__button", { interval: 200 });
sr.reveal(".contact__input, .button", { interval: 200 });

//=============== TYPING EFFECT ===============//
const typed = new Typed(".home__education", {
  strings: ["Frontend Developer","Web Enthusiast","Video Editor"], // Add more roles if needed
  typeSpeed: 100,  // Typing speed
  backSpeed: 100,  // Backspacing speed
  backDelay: 1500,  // Delay before deleting
  loop: true , // Infinite loop
  showCursor: false // Hide the cursor
  
});

var typedFooter = new Typed(".typed-footer", {
  strings: ["Frontend Developer","Web Enthusiast","Video Editor"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
