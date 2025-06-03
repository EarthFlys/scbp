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

  // ฟังก์ชันเลื่อนไปสไลด์ถัดไป
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    // เลื่อน slider โดยคำนวณตำแหน่งใหม่
    slider.style.transform = `translateX(-${currentSlide * 25}%)`;
  }

  // ฟังก์ชันไปยังสไลด์ที่กำหนด (เผื่อต้องการใช้ในอนาคต)
  function goToSlide(index) {
    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 25}%)`;
  }

  // เริ่มการเลื่อนอัตโนมัติหลังจาก 3 วินาที
  setTimeout(() => {
    // เปลี่ยนสไลด์ทุก 5 วินาที
    setInterval(nextSlide, 5000);
  }, 3000); // รอ 3 วินาทีก่อนเริ่มเลื่อน

  // เพิ่ม event listener สำหรับการควบคุมด้วยมือ (ถ้าต้องการ)
  // เช่น เมื่อ hover ให้หยุดการเลื่อน
  let intervalId;
  
  function startSlider() {
    intervalId = setInterval(nextSlide, 5000);
  }
  
  function stopSlider() {
    clearInterval(intervalId);
  }

  // เริ่มการเลื่อนหลังจาก 3 วินาที
  setTimeout(startSlider, 3000);

  // หยุดการเลื่อนเมื่อ hover (ถ้าต้องการ)
  slider.addEventListener('mouseenter', stopSlider);
  slider.addEventListener('mouseleave', startSlider);
});
