document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle Main Menu
  const toggleMenu = () => {
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("active");
  };

  // Close Menu
  const closeMenu = () => {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("active");
  };

  // Event: Toggle Main Menu
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Event: Close Menu When Click Outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          if (window.innerWidth <= 768) closeMenu();
        }
      }
    });
  });

  // Mobile Dropdown Handling
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");

    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const isActive = dropdown.classList.contains("active");

        // Close all other dropdowns
        dropdowns.forEach((d) => {
          if (d !== dropdown) d.classList.remove("active");
        });

        // Toggle current dropdown
        dropdown.classList.toggle("active", !isActive);
      }
    });
  });

  // Close Dropdowns When Click Outside (Mobile)
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      if (!e.target.closest(".dropdown")) {
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("active");
        });
      }
    }
  });
    });
    
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'previous');
      if (i === index) {
        slide.classList.add('active');
      } else if (i === (index - 1 + slides.length) % slides.length) {
        slide.classList.add('previous');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // เลื่อนทุก 5 วินาที
});

  // Smooth hide/show header on scroll
  let lastScrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 50) {
      // เลื่อนลง -> ซ่อน header
      header.classList.add("hide");
    } else {
      // เลื่อนขึ้น -> แสดง header
      header.classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
