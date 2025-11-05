document.addEventListener("DOMContentLoaded", function () {
  const heroButtons = document.querySelector(".hero-buttons");
  const sidebar = document.querySelector(".sidebar");

  function moveButtons() {
    if (window.innerWidth <= 768) {
      // Move buttons into sidebar on mobile
      if (!sidebar.querySelector(".hero-buttons")) {
        sidebar.appendChild(heroButtons);
        heroButtons.style.display = "block"; // show in sidebar
      }
    } else {
      // Move buttons back to hero section on desktop
      const heroContent = document.querySelector(".hero-content");
      if (!heroContent.querySelector(".hero-buttons")) {
        heroContent.appendChild(heroButtons);
        heroButtons.style.display = "flex"; // original layout
      }
    }
  }

  // Run once on page load
  moveButtons();

  // Run on window resize
  window.addEventListener("resize", moveButtons);
});
