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
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // เปลี่ยนสไลด์ทุก 5 วินาที
  setInterval(nextSlide, 5000);
});
