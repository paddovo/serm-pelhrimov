// Cinematic Fencing Intro Script (HTML5 Canvas 2D Choreography)
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('intro-overlay');
  const canvas = document.getElementById('intro-canvas');
  const skipBtn = document.getElementById('skip-intro-btn');
  const introText = document.getElementById('intro-text');

  if (!overlay || !canvas) return;

  // Check prefers-reduced-motion or sessionStorage
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasSeenIntro = sessionStorage.getItem('shs_pelhrimov_intro_seen');

  if (prefersReducedMotion || hasSeenIntro) {
    overlay.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let startTime = null;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function dismissIntro() {
    sessionStorage.setItem('shs_pelhrimov_intro_seen', 'true');
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.style.display = 'none';
      cancelAnimationFrame(animationFrameId);
    }, 1000);
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', dismissIntro);
  }

  // Animation Choreography loop (6 seconds total)
  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = (timestamp - startTime) / 1000; // in seconds

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dark moody background
    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Phase 1: Příchod (0 - 2s)
    if (progress < 2) {
      if (introText) introText.style.opacity = Math.min(progress / 1.5, 1);

      // Draw two fencing silhouettes approaching
      ctx.strokeStyle = '#eab308';
      ctx.lineWidth = 3;

      // Fencer A
      ctx.beginPath();
      ctx.arc(cx - 150 + progress * 20, cy - 20, 20, 0, Math.PI * 2);
      ctx.stroke();

      // Fencer B
      ctx.beginPath();
      ctx.arc(cx + 150 - progress * 20, cy - 20, 20, 0, Math.PI * 2);
      ctx.stroke();
    }
    // Phase 2: Oberhau & Absetzen (2s - 4.5s)
    else if (progress < 4.5) {
      if (introText) introText.style.opacity = '1';

      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 4;

      // Sword A (Oberhau diagonal strike line)
      ctx.beginPath();
      ctx.moveTo(cx - 60, cy - 80);
      ctx.lineTo(cx + 20, cy + 40);
      ctx.stroke();

      // Sword B (Absetzen parry/counter line)
      ctx.strokeStyle = '#e2e8f0';
      ctx.beginPath();
      ctx.moveTo(cx + 40, cy + 50);
      ctx.lineTo(cx - 30, cy - 70);
      ctx.stroke();
    }
    // Phase 3: Thrust zoom into camera lens (4.5s - 6s)
    else if (progress < 6) {
      const zoomProgress = (progress - 4.5) / 1.5;
      const radius = 5 + zoomProgress * zoomProgress * 300;

      // Flash thrust point into camera
      ctx.fillStyle = '#eab308';
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    // Finish
    else {
      dismissIntro();
      return;
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animationFrameId = requestAnimationFrame(animate);
});
