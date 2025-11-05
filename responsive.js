// Load Sidebar HTML from includes folder into body
fetch("includes/sidebar.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("beforeend", data);

    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".mobile-sidebar");
    const closeBtn = document.querySelector(".close-sidebar");

    // ✅ Open Sidebar
    hamburger.addEventListener("click", () => {
      sidebar.classList.add("open");
    });

    // ✅ Close Sidebar
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });

    // ✅ Close when clicking outside sidebar
    document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove("open");
      }
    });
  });
