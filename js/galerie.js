// Gallery Lightbox script
document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('gallery-grid');
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  const titleEl = document.getElementById('lightbox-title');
  const categoryEl = document.getElementById('lightbox-category');
  const captionEl = document.getElementById('lightbox-caption');

  const items = [
    { id: 1, title: 'Šerm dlouhým mečem', caption: 'Nácvik základních krytů a vazeb mečem.', category: 'Tréninky' },
    { id: 2, title: 'Trénink tesákem', caption: 'Práce s jednoručním tesákem zblízka.', category: 'Tréninky' },
    { id: 3, title: 'Seminář HEMA', caption: 'Intenzivní víkendový seminář.', category: 'Semináře' },
    { id: 4, title: 'Analýza manuálů', caption: 'Studium historických Fechtbuchů.', category: 'Teorie' },
    { id: 5, title: 'Sparring v maskách', caption: 'Kontrolovaný cvičný boj.', category: 'Tréninky' },
    { id: 6, title: 'Tým ŠHŠ Pelhřimov', caption: 'Společná fotka ze sportovní haly.', category: 'Akce' }
  ];

  let currentIndex = 0;

  if (galleryGrid) {
    items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'bg-slate-900 border border-slate-800 rounded-lg overflow-hidden cursor-pointer hover:border-amber-500/50 transition-all p-4 space-y-2';
      card.innerHTML = `
        <div class="h-48 bg-slate-950 flex items-center justify-center text-4xl border border-slate-800 rounded">📷</div>
        <span class="text-[10px] bg-amber-500/20 text-amber-400 font-bold uppercase px-2 py-0.5 rounded">${item.category}</span>
        <h3 class="font-serif font-bold text-slate-100">${item.title}</h3>
        <p class="text-xs text-slate-400">${item.caption}</p>
      `;
      card.addEventListener('click', () => openModal(index));
      galleryGrid.appendChild(card);
    });
  }

  function openModal(index) {
    currentIndex = index;
    updateModal();
    if (modal) modal.classList.remove('hidden');
  }

  function updateModal() {
    const item = items[currentIndex];
    if (titleEl) titleEl.textContent = item.title;
    if (categoryEl) categoryEl.textContent = item.category;
    if (captionEl) captionEl.textContent = item.caption;
  }

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  if (prevBtn) prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateModal();
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateModal();
  });
});
