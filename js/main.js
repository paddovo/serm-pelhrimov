// Main JavaScript for menu toggles
document.addEventListener('DOMContentLoaded', () => {
  // Mobile drawer toggle
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });
  }
});
