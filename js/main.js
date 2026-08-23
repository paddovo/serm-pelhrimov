// Main JavaScript for menu toggles and reservation submission
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });
  }

  // Reservation form handler
  const resForm = document.getElementById('reservation-form');
  const resStatus = document.getElementById('res-status');

  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('res-first-name').value;
      const course = document.getElementById('res-course').value;

      if (resStatus) {
        resStatus.classList.remove('hidden');
        resStatus.textContent = `Děkujeme, ${firstName}. Vaše rezervace na trénink byla přijata!`;
      }
      resForm.reset();
    });
  }
});
