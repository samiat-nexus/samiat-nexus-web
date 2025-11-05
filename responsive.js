function toggleButtons() {
  const desktopBtns = document.querySelector('.desktop-buttons');
  const sidebarBtns = document.querySelector('.sidebar-buttons');

  if (window.innerWidth <= 768) { // Mobile
    desktopBtns.style.display = 'none';
    sidebarBtns.style.display = 'flex';
  } else { // Desktop
    desktopBtns.style.display = 'flex';
    sidebarBtns.style.display = 'none';
  }
}

// Run on page load and window resize
window.addEventListener('load', toggleButtons);
window.addEventListener('resize', toggleButtons);
