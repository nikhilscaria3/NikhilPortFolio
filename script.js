/* ----- MOBILE MENU TOGGLE ----- */
function toggleMobileMenu() {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  
  mobileToggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("active");
    this.classList.toggle("active");
  });

  // Close menu when a link is clicked
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", function() {
      mobileMenu.classList.remove("active");
      mobileToggle.classList.remove("active");
    });
  });
}

toggleMobileMenu();

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navbar = document.querySelector(".navbar");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
}

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typed-text", {
  strings: ["Software Developer", "Full Stack Developer", "Problem Solver"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

// Adjust these selectors based on your current HTML structure
sr.reveal('.hero-content', {});
sr.reveal('.hero-badge', { delay: 100 });
sr.reveal('.hero-title', { delay: 200 });
sr.reveal('.typing-container', { delay: 300 });
sr.reveal('.hero-description', { delay: 400 });
sr.reveal('.hero-cta', { delay: 500 });
sr.reveal('.hero-visual', { delay: 600 });

/* ----- CHANGE ACTIVE LINK ON SCROLL ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Remove active class from all links
      document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
      });
      
      // Add active class to current section link
      document.querySelectorAll(`.nav-link[href="#${sectionId}"], .mobile-nav-link[href="#${sectionId}"]`).forEach(link => {
        link.classList.add('active');
      });
    }
  });
}

window.addEventListener('scroll', scrollActive);

/* ----- SMOOTH SCROLL FOR NAVIGATION LINKS ----- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});