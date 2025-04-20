const navtoggle = document.querySelector(".navbar-toggle");

navtoggle.addEventListener("click", () => {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
});

// Tab interface for different section of resume

const resumeHeading = document.querySelector(".resume-heading");
const resumeItems = document.querySelectorAll(".resume-item");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeItems.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.parentElement.classList.add("active");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};
// Navbar header sticky while scrolling

function stickyNav() {
  var headerHeight = document.querySelector("#about").offsetHeight / 2;
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("header-sticky");
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove("header-sticky");
  }
}
window.addEventListener("scroll", stickyNav);

//swiper for portfolio section

const swiper = new Swiper(".project-slider", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return '<li class=" + className + "></li>';
    },
    clickable: true,
  },
  on: {
    init: function () {
      const swiperEl = this.el;
      swiperEl.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });
      swiperEl.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
  },
});

// Active link on page scroll
// ...existing code...

// Dark and Light Theme Toggle
function isLight() {
  return localStorage.getItem("dark-mode");
}

// function toggleRootClass() {
//   document.querySelector("body").classList.toggle("dark");
// }

// function toggleLocalStorageItem() {
//   if (isLight()) {
//     localStorage.removeItem("dark-mode");
//   } else {
//     localStorage.setItem("dark-mode", "set");
//   }
// }

// if (isLight()) {
//   toggleRootClass();
// }

document.querySelector(".theme-toggle").addEventListener("click", () => {
  toggleLocalStorageItem();
  toggleRootClass();
});

// Scroll to top
const scrollTopBtn = document.querySelector("#scroll-top-btn");
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
scrollTopBtn.addEventListener("click", scrollToTop);

document.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("visible", window.scrollY >= 200);
});

// Scroll reveal
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".about-intro, .project-slider", {
  origin: "left",
});
sr.reveal(
  ".resume-heading,.contact-info,.footer-contact,.testimonial-heading",
  {
    origin: "bottom",
  }
);
sr.reveal(".service-row", {
  origin: "bottom",
  interval: 800,
});
sr.reveal(".resume-body", {
  origin: "top",
});
sr.reveal(".portfolio-navbar", {
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 300,
});

sr.reveal(".portfolio-header, .portfolio-footer", {
  origin: "bottom",
  distance: "40px",
  duration: 2000,
  delay: 500,
});

// Additional ScrollReveal configurations
sr.reveal(".portfolio-navbar", {
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 300,
});

sr.reveal(".portfolio-header, .portfolio-footer", {
  origin: "bottom",
  distance: "40px",
  duration: 2000,
  delay: 500,
});
