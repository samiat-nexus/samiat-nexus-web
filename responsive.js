document.addEventListener("DOMContentLoaded", function () {
  const heroButtons = document.querySelector(".hero-buttons");
  const sidebar = document.querySelector(".sidebar");
  const heroContent = document.querySelector(".hero-content");

  function updateButtons() {
    if (window.innerWidth <= 768) {
      // Move hero buttons inside sidebar if not already there
      if (heroButtons.parentElement !== sidebar) {
        sidebar.appendChild(heroButtons);
        heroButtons.style.display = "block"; // stack vertically
      }
    } else {
      // Move hero buttons back to hero section on desktop
      if (heroButtons.parentElement !== heroContent) {
        heroContent.appendChild(heroButtons);
        heroButtons.style.display = "flex"; // original layout
      }
    }
  }

  // Initial run
  updateButtons();

  // Update on window resize
  window.addEventListener("resize", updateButtons);
});
