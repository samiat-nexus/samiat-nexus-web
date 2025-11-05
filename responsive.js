document.addEventListener("DOMContentLoaded", () => {
  // Create mobile sidebar
  const sidebar = document.createElement('div');
  sidebar.id = 'mobileSidebar';
  sidebar.innerHTML = `
    <span class="close-btn">&times;</span>
    <a href="index.html">Home</a>
    <a href="services.html">Services</a>
    <a href="packages.html">Packages</a>
    <a href="why-choose-us.html">Why Choose Us</a>
    <a href="contact.html">Contact</a>
  `;
  document.body.appendChild(sidebar);

  // Hamburger toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'mobileSidebarToggle';
  toggleBtn.innerHTML = '&#9776;';
  document.body.appendChild(toggleBtn);

  // Open/close sidebar
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  sidebar.querySelector('.close-btn').addEventListener('click', () => {
    sidebar.classList.remove('active');
  });

  // Close sidebar if click outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });

  // Handle resize
  const handleResize = () => {
    if (window.innerWidth >= 992) {
      sidebar.classList.remove('active');
      toggleBtn.style.display = 'none';
      document.querySelectorAll('.desktop-buttons').forEach(btn => btn.style.display = 'inline-block');
    } else {
      toggleBtn.style.display = 'block';
      document.querySelectorAll('.desktop-buttons').forEach(btn => btn.style.display = 'none');
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();
});
