// Gallery Loader and Lightbox implementation
document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('gallery-grid');
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  const titleEl = document.getElementById('lightbox-title');
  const categoryEl = document.getElementById('lightbox-category');
  const captionEl = document.getElementById('lightbox-caption');
  const filterContainer = document.getElementById('gallery-filters');

  let galleryData = [];
  let filteredData = [];
  let currentIndex = 0;

  if (!galleryGrid) return;

  fetch('data/gallery.json')
    .then(res => res.json())
    .then(data => {
      galleryData = data;
      filteredData = [...galleryData];
      renderGallery();
      setupFilters();
    })
    .catch(err => {
      console.error('Failed to load gallery items:', err);
      galleryGrid.innerHTML = '<p class="text-xs text-slate-400 col-span-full text-center py-12">Fotografie se nepodařilo načíst.</p>';
    });

  function renderGallery() {
    galleryGrid.innerHTML = '';
    if (filteredData.length === 0) {
      galleryGrid.innerHTML = '<p class="text-xs text-slate-400 col-span-full text-center py-12">V této kategorii nejsou žádné fotografie.</p>';
      return;
    }

    filteredData.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'bg-[#141418] border border-slate-800 rounded-xl overflow-hidden cursor-pointer hover:border-amber-500/50 transition-all space-y-3 p-3 group';
      card.innerHTML = `
        <div class="h-56 bg-[#0c0c0e] overflow-hidden rounded-lg relative">
          <img src="${item.image}" alt="${item.alt || item.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        <div class="space-y-1">
          <span class="text-[10px] bg-amber-500/10 text-amber-400 font-bold uppercase px-2 py-0.5 rounded border border-amber-500/20">${item.category}</span>
          <h3 class="font-serif font-bold text-slate-100 text-sm pt-1">${item.title}</h3>
          <p class="text-xs text-slate-400 line-clamp-2">${item.caption}</p>
        </div>
      `;
      card.addEventListener('click', () => openModal(index));
      galleryGrid.appendChild(card);
    });
  }

  function setupFilters() {
    if (!filterContainer) return;
    const categories = ['Vše', ...new Set(galleryData.map(item => item.category))];
    filterContainer.innerHTML = '';

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${cat === 'Vše' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-amber-500/40'}`;
      btn.textContent = cat;

      btn.addEventListener('click', () => {
        document.querySelectorAll('#gallery-filters button').forEach(b => {
          b.className = 'px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border bg-slate-900 text-slate-300 border-slate-800 hover:border-amber-500/40';
        });
        btn.className = 'px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border bg-amber-500 text-slate-950 border-amber-500';

        if (cat === 'Vše') {
          filteredData = [...galleryData];
        } else {
          filteredData = galleryData.filter(item => item.category === cat);
        }
        renderGallery();
      });

      filterContainer.appendChild(btn);
    });
  }

  function openModal(index) {
    currentIndex = index;
    updateModal();
    if (modal) modal.classList.remove('hidden');
  }

  function updateModal() {
    const item = filteredData[currentIndex];
    if (!item) return;
    if (modalImg) {
      modalImg.src = item.image;
      modalImg.alt = item.alt || item.title;
    }
    if (titleEl) titleEl.textContent = item.title;
    if (categoryEl) categoryEl.textContent = item.category;
    if (captionEl) captionEl.textContent = item.caption;
  }

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  if (prevBtn) prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + filteredData.length) % filteredData.length;
    updateModal();
  });
  if (nextBtn) nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % filteredData.length;
    updateModal();
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
});
