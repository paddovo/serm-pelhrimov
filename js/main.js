// Main JavaScript for menu toggles and registration form handling
document.addEventListener('DOMContentLoaded', () => {
  // Mobile drawer toggle
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });
  }

  // Registration & Contact Form Handler
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      const action = contactForm.getAttribute('action');

      // If form has a remote action URL (e.g. Formspree/Web3Forms/Formsubmit), send via fetch
      if (action && action.startsWith('http')) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Odesílám přihlášku...';
        }

        try {
          const response = await fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          if (response.ok) {
            if (formStatus) {
              formStatus.classList.remove('hidden', 'bg-red-500/20', 'text-red-400');
              formStatus.classList.add('bg-emerald-500/20', 'text-emerald-400', 'border', 'border-emerald-500/30');
              formStatus.textContent = 'Děkujeme! Vaše přihláška byla úspěšně odeslána. Brzy se vám ozveme.';
            }
            contactForm.reset();
          } else {
            throw new Error('Form submission error');
          }
        } catch (err) {
          if (formStatus) {
            formStatus.classList.remove('hidden', 'bg-emerald-500/20', 'text-emerald-400');
            formStatus.classList.add('bg-red-500/20', 'text-red-400', 'border', 'border-red-500/30');
            formStatus.textContent = 'Došlo k chybě při odesílání přihlášky. Napište nám prosím přímo na e-mail.';
          }
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'ODESLAT PŘIHLÁŠKU ➔';
          }
        }
      } else {
        // Fallback for form configured without external service endpoint
        e.preventDefault();
        if (formStatus) {
          formStatus.classList.remove('hidden', 'bg-red-500/20', 'text-red-400');
          formStatus.classList.add('bg-emerald-500/20', 'text-emerald-400', 'border', 'border-emerald-500/30');
          formStatus.textContent = 'Přihláška připravena. Pro dokončení odeslání prosím kontaktujte školu e-mailem.';
        }
      }
    });
  }
});
