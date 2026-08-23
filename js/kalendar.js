// Calendar dynamic event loader
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('events-container');
  if (!container) return;

  fetch('data/events.json')
    .then(res => res.json())
    .then(events => {
      container.innerHTML = '';
      events.forEach(event => {
        const item = document.createElement('div');
        item.className = 'bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6';
        item.innerHTML = `
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="bg-amber-500/20 text-amber-400 font-bold px-2 py-0.5 rounded text-[10px] uppercase">${event.category}</span>
              <span class="text-xs text-slate-400">📅 ${event.date} (${event.time})</span>
            </div>
            <h2 class="text-xl font-serif font-bold text-slate-100">${event.title}</h2>
            <p class="text-xs text-slate-400">📍 ${event.location}</p>
            <p class="text-xs text-slate-300">${event.description}</p>
          </div>
          <a href="kurzy.html#rezervace" class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded text-xs uppercase shrink-0">Zúčastnit se</a>
        `;
        container.appendChild(item);
      });
    })
    .catch(() => {
      container.innerHTML = '<p class="text-xs text-slate-400">Akce se načítají...</p>';
    });
});
