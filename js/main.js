document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (!menuToggle || !nav) return;

  function closeMenu() {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    nav.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  menuToggle.addEventListener("click", function () {
    const isOpen = nav.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 768) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
});