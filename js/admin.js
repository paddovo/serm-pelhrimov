// Standalone static admin login and panel script
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('admin-login-form');
  const loginBox = document.getElementById('admin-login-box');
  const dashboard = document.getElementById('admin-dashboard');
  const loginError = document.getElementById('admin-login-error');
  const logoutBtn = document.getElementById('admin-logout-btn');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pass = document.getElementById('admin-pass').value;
      if (pass === 'serm2025') {
        if (loginBox) loginBox.classList.add('hidden');
        if (dashboard) dashboard.classList.remove('hidden');
        if (loginError) loginError.classList.add('hidden');
      } else {
        if (loginError) {
          loginError.classList.remove('hidden');
          loginError.textContent = 'Nesprávné heslo správce.';
        }
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (dashboard) dashboard.classList.add('hidden');
      if (loginBox) loginBox.classList.remove('hidden');
    });
  }
});
