// responsive.js
// Centralized JS for sidebar + hamburger

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebarMenu");
const overlay = document.getElementById("overlay");

if (menuBtn && sidebar && overlay) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
}
