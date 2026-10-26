(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* Productos + filtros (se generan desde js/products.js) */
  const P = window.PRODUCTS || [];
  const imgs = p => p.images || [p.image];
  const cats = ['Todos', ...new Set(P.map(p => p.category))];
  const grid = $('#grid'), filters = $('#filters');
 function render(cat) {
  grid.innerHTML = P.map((p, i) => ({ p, i })).filter(({ p }) => cat === 'Todos' || p.category === cat).map(({ p, i }) => `
    <article class="card" data-i="${i}" tabindex="0" role="button" aria-label="Ver fotos de ${esc(p.name)}">
      <div class="card-img"><img src="${esc(imgs(p)[0])}" alt="${esc(p.name)}" loading="lazy"></div>
      <h3>${esc(p.name)}</h3>
      <ul><li><b>Descripción:</b> ${esc(p.desc)}</li><li><b>Proceso:</b> ${esc(p.process)}</li></ul>
      <p class="tags">${(p.uses || []).map(u => `<span>${esc(u)}</span>`).join('')}</p>
    </article>`).join('');
  [...grid.children].forEach((c, i) => c.style.setProperty('--d', i * 70 + 'ms'));
  grid.scrollLeft = 0;
  setTimeout(() => [...grid.children].forEach(c => c.style.setProperty('--d', '0ms')), 1200);
  requestAnimationFrame(() => [...grid.children].forEach(c => c.classList.add('in')));
}
  filters.innerHTML = cats.map((c, i) => `<button role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
  filters.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    filters.querySelectorAll('button').forEach(x => x.setAttribute('aria-selected', x === b));
    render(b.dataset.cat);
  });
  render('Todos');

  /* Marquee con los productos */
  const words = [...new Set(P.map(p => p.name.split(' (')[0]))];
  $('#marquee').innerHTML = [...words, ...words].map(w => `<span>${esc(w)}</span>`).join('');

 
  /* Revelado al hacer scroll + contadores */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
    e.target.querySelectorAll('[data-count]').forEach(n => {
      const to = +n.dataset.count; if (reduce) return n.textContent = to;
      let t0; const step = t => { t0 ??= t; const k = Math.min((t - t0) / 1400, 1); n.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); k < 1 && requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }), { threshold: .2 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  if (reduce) document.querySelectorAll('[data-count]').forEach(n => n.textContent = n.dataset.count);

  /* Barra de navegación + leve parallax del video */
  const nav = $('#nav'), vid = $('.hero-video');
  addEventListener('scroll', () => {
    nav.classList.toggle('solid', scrollY > 40);
    if (!reduce && scrollY < innerHeight) vid.style.transform = `translateY(${scrollY * .15}px) scale(1.08)`;
  }, { passive: true });
  document.body.classList.add('ready');
  $('#y').textContent = new Date().getFullYear();

  /* Google Translate (ES por defecto → EN / FR) */
  const m = document.cookie.match(/googtrans=\/es\/(\w+)/), cur = m ? m[1] : 'es';
  document.querySelectorAll('.lang button').forEach(b => {
    b.setAttribute('aria-pressed', b.dataset.lang === cur);
    b.onclick = () => {
      const l = b.dataset.lang, v = l === 'es' ? '' : `/es/${l}`, exp = v ? '' : '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = `googtrans=${v}; path=/${exp}`;
      const host = location.hostname.split('.').slice(-2).join('.');
      document.cookie = `googtrans=${v}; path=/; domain=.${host}${exp}`;
      location.reload();
    };
  });
  if (cur !== 'es') {
    window.googleTranslateElementInit = () => new google.translate.TranslateElement({ pageLanguage: 'es', includedLanguages: 'es,en,fr', autoDisplay: false }, 'google_translate_element');
    const s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'; document.head.appendChild(s);
  }
  document.querySelectorAll('.arrow').forEach(b => b.onclick = () => {
  const card = grid.querySelector('.card'); if (!card) return;
  const n = innerWidth > 820 ? 3 : 1;
  grid.scrollBy({ left: b.dataset.dir * (card.offsetWidth + 34) * n, behavior: 'smooth' });
});

/* Galería de fotos */
const modal = $('#gallery'), track = $('#gtrack'), thumbs = $('#gthumbs');
let lastFocus;
const mark = () => { const k = Math.round(track.scrollLeft / track.clientWidth); thumbs.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-current', j === k)); };
const go = d => track.scrollBy({ left: d * track.clientWidth, behavior: 'smooth' });
function openGallery(i) {
  const p = P[i]; lastFocus = document.activeElement;
  $('#gtitle').textContent = p.name; $('#gdesc').textContent = p.desc;
  track.innerHTML = imgs(p).map((s, k) => `<img src="${esc(s)}" alt="${esc(p.name)} – foto ${k + 1}">`).join('');
  thumbs.innerHTML = imgs(p).map((s, k) => `<button data-k="${k}" aria-label="Foto ${k + 1}"><img src="${esc(s)}" alt=""></button>`).join('');
  track.scrollLeft = 0; mark();
  modal.hidden = false; document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => modal.classList.add('open'));
  $('#gclose').focus();
}
function closeGallery() {
  modal.classList.remove('open'); document.body.style.overflow = '';
  setTimeout(() => modal.hidden = true, 300); lastFocus && lastFocus.focus();
}
grid.addEventListener('click', e => { const c = e.target.closest('.card'); if (c) openGallery(+c.dataset.i); });
grid.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) { e.preventDefault(); openGallery(+e.target.dataset.i); } });
modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('#gclose')) closeGallery(); });
modal.querySelectorAll('.garrow').forEach(b => b.onclick = () => go(+b.dataset.dir));
thumbs.addEventListener('click', e => { const b = e.target.closest('button'); if (b) track.scrollTo({ left: +b.dataset.k * track.clientWidth, behavior: 'smooth' }); });
track.addEventListener('scroll', mark, { passive: true });
addEventListener('keydown', e => {
  if (modal.hidden) return;
  if (e.key === 'Escape') closeGallery();
  if (e.key === 'ArrowRight') go(1);
  if (e.key === 'ArrowLeft') go(-1);
});

})();
