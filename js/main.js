(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* Productos + filtros (se generan desde js/products.js) */
  const P = window.PRODUCTS || [];
  const cats = ['Todos', ...new Set(P.map(p => p.category))];
  const grid = $('#grid'), filters = $('#filters');
  function render(cat) {
    grid.innerHTML = P.filter(p => cat === 'Todos' || p.category === cat).map(p => `
      <article class="card">
        <div class="card-img"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"></div>
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
})();
