// ===== CREATE MOBILE SIDEBAR DYNAMICALLY =====
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 991) {
    // Create sidebar container
    const sidebar = document.createElement("div");
    sidebar.classList.add("mobile-sidebar");

    // Clone navbar links
    const navLinks = document.querySelector(".svc-nav").cloneNode(true);

    // Clone hero buttons
    const heroBtns = document.querySelector(".hero-buttons").cloneNode(true);

    // Append both to sidebar
    sidebar.appendChild(navLinks);
    sidebar.appendChild(heroBtns);

    // Append sidebar to body
    document.body.appendChild(sidebar);
  }
});
