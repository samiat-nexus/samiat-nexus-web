// Create sidebar dynamically
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

// Create toggle button (hamburger)
const toggleBtn = document.createElement('button');
toggleBtn.id = 'mobileSidebarToggle';
toggleBtn.innerHTML = '&#9776;';
document.body.appendChild(toggleBtn);

// Open sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Close sidebar
sidebar.querySelector('.close-btn').addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Optional: Close sidebar if click outside
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});
