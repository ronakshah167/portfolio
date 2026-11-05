/* No build tools or frameworks required. Native, accessible scroll choreography. */
(() => {
  'use strict';
  const data = window.PORTFOLIO_DATA;
  if (!data) return;
  const page = document.body.dataset.page || 'home';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
  const escape = (text) => String(text == null ? '' : text).replace(/[&<>"']/g, (s) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[s]);
  const link = (url, label, className = '') => url ? `<a href="${escape(url)}" class="${className}" target="_blank" rel="noopener noreferrer">${label}</a>` : '';

  function initChrome() {
    const nav = $('#site-header');
    if (nav) nav.innerHTML = `
      <header class="site-header"><nav class="shell nav-inner" aria-label="Main navigation">
        <a href="index.html#top" class="brand" aria-label="Ronak Shah — home"><span class="brand-symbol">R<span>★</span></span><span>RONAK<span class="brand-dot">.</span><small>THE CREATIVE UNIVERSE</small></span></a>
        <div class="nav-links" id="nav-links">
          <a href="index.html#about" ${page==='home'?'class="is-current"':''}>ABOUT</a>
          <a href="index.html#projects">PROJECTS</a>
          <a href="work.html" ${page==='work'?'class="is-current"':''}>WORK</a>
          <a href="events.html" ${page==='events'?'class="is-current"':''}>EVENTS</a>
          <a href="index.html#contact">CONTACT</a>
          <a href="${escape(data.identity.resume)}" class="nav-resume" target="_blank" rel="noopener noreferrer">RESUME ↗</a>
        </div>
        <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-controls="nav-links" aria-expanded="false"><span></span><span></span><span></span></button>
      </nav></header>`;
    const footer = $('#site-footer');
    if (footer) footer.innerHTML = `<footer class="site-footer"><div class="shell footer-inner"><a href="index.html#top" class="footer-logo" aria-label="Back to top">R<span>★</span></a><div><strong>RONAK SHAH</strong><span>BUILDING THINGS WITH A LITTLE EXTRA PERSONALITY.</span></div><div class="footer-links"><a href="${escape(data.identity.github)}" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href="${escape(data.identity.linkedin)}" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="mailto:${escape(data.identity.email)}">EMAIL ↗</a></div><span class="footer-copyright">© ${new Date().getFullYear()} / ALL IDEAS WELCOME</span></div></footer>`;
    const toggle = $('.menu-toggle'); const links = $('#nav-links');
    if (toggle && links) {
      const setMenu = (isOpen) => { links.classList.toggle('is-open', isOpen); toggle.setAttribute('aria-expanded', String(isOpen)); toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu'); document.body.classList.toggle('menu-open', isOpen); };
      toggle.addEventListener('click', () => setMenu(!links.classList.contains('is-open')));
      $$('a', links).forEach(a => a.addEventListener('click', () => setMenu(false)));
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    }
  }

  const decor = (project) => {
    const form = {
      'all-in': ['{', 'AI', '}'],
      aquamind: ['≋', 'H₂O', '↝'],
      'class-buddy': ['▦', '09:41', '✱'],
      spotify: ['♫', '♪', '◖'],
      hacktrack: ['▣', '✓', '◌'],
      crowdflow: ['◉', '↗', '◎'],
      agri: ['❋', '↟', '◌'],
      finance: ['▤', '↗', '$'],
      stock: ['↗', '↗', '%'],
      lab: ['</>', '{ }', '↝'],
    }[project.id] || ['✳','⚡','★'];
    return `<span class="cover-shape cover-shape-one">${escape(form[0])}</span><span class="cover-shape cover-shape-two">${escape(form[1])}</span><span class="cover-shape cover-shape-three">${escape(form[2])}</span>`;
  };
  function featuredCard(p) {
    return `<article class="featured-project accent-${escape(p.accent)}" id="project-${escape(p.id)}">
      <div class="featured-project-top"><span>PROJECT FILE / ${escape(p.number)}</span><span>${escape(p.category)}</span></div>
      <div class="featured-cover" aria-hidden="true"><div class="cover-rings"></div>${decor(p)}<span class="cover-big-title">${escape(p.title)}</span><span class="cover-stamp">${escape(p.stamp)}</span></div>
      <div class="featured-content"><div class="project-number-line"><span>NO. ${escape(p.number)} — ${escape(p.year)}</span><span>THE BUILDS / VOL. 01</span></div><h3>${escape(p.title)}</h3><p class="featured-kicker">${escape(p.kicker)}</p><p class="featured-description">${escape(p.description)}</p><div class="tag-list">${p.stack.map(s=>`<span>${escape(s)}</span>`).join('')}</div><div class="featured-actions">${link(p.github,'VIEW CODE ↗','project-action')}${link(p.live,'LIVE DEMO ↗','project-action action-live')}${p.note?`<span class="project-private">${escape(p.note)}</span>`:''}</div></div>
    </article>`;
  }
  function archiveCard(p) {
    return `<article class="archive-card accent-${escape(p.accent)} reveal"><div class="archive-card-art" aria-hidden="true">${decor(p)}<span class="archive-art-stamp">${escape(p.stamp)}</span></div><div class="archive-card-main"><div class="archive-card-eyebrow"><span>FILE ${escape(p.number)}</span><span>${escape(p.category)}</span></div><h4>${escape(p.title)}</h4><p>${escape(p.description)}</p><div class="tag-list">${p.stack.map(s=>`<span>${escape(s)}</span>`).join('')}</div><div class="archive-links">${link(p.github,'GITHUB ↗')}${link(p.live,'LIVE ↗')}</div></div></article>`;
  }
  function initProjects() {
    const featureTrack = $('#project-track');
    if (!featureTrack) return;
    featureTrack.innerHTML = data.projects.filter(p => p.featured).map(featuredCard).join('');
    $('#archive-projects').innerHTML = data.projects.filter(p => !p.featured).map(archiveCard).join('');
    const scene = $('#project-scroll-scene');
    const sticky = $('.project-sticky', scene);
    const progress = $('#project-scene-progress');
    const desktop = window.matchMedia('(min-width: 900px)');
    let travel = 0; let start = 0; let range = 1; let raf = 0;
    function setup() {
      if (!desktop.matches || reducedMotion.matches) {
        scene.style.height = ''; featureTrack.style.transform = ''; if (progress) progress.style.width = '0%'; return;
      }
      const trackStyles = getComputedStyle(featureTrack);
      const pad = parseFloat(trackStyles.paddingLeft) + parseFloat(trackStyles.paddingRight);
      const contentWidth = Array.from(featureTrack.children).reduce((sum,el) => sum + el.getBoundingClientRect().width, 0);
      const gaps = Math.max(0,featureTrack.children.length-1) * (parseFloat(trackStyles.columnGap) || 26);
      travel = Math.max(0, contentWidth + gaps + pad - sticky.clientWidth);
      scene.style.height = `${Math.max(travel + window.innerHeight * .82, window.innerHeight * 1.65)}px`;
      const rect = scene.getBoundingClientRect();
      start = rect.top + window.scrollY - (parseFloat(getComputedStyle(sticky).top) || 0);
      range = Math.max(1, scene.offsetHeight - sticky.offsetHeight);
      draw();
    }
    function draw() {
      if (!desktop.matches || reducedMotion.matches) return;
      const p = Math.max(0, Math.min(1, (window.scrollY-start) / range));
      featureTrack.style.transform = `translate3d(${-travel * p}px, 0, 0)`;
      if (progress) progress.style.width = `${(p * 100).toFixed(1)}%`;
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; draw(); }); };
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',setup,{passive:true});
    reducedMotion.addEventListener('change',setup);
    window.addEventListener('load',setup,{once:true});
    requestAnimationFrame(setup);
  }
  function initExperience() {
    const list = $('#experience-list'); if (!list) return;
    const filters = $('#experience-filters');
    const render = (filter) => {
      const records = data.experience.filter(x => filter === 'all' || x.type === filter);
      list.innerHTML = records.map(x => `<article class="experience-card reveal is-visible"><div class="exp-index">${escape(x.index)}<span>↘</span></div><div class="exp-main"><div class="exp-meta"><span>${escape(x.type.toUpperCase())}</span><span>${escape(x.date)}</span></div><h3>${escape(x.role)}</h3><h4>${escape(x.org)}</h4><p class="exp-quote">“${escape(x.summary)}”</p><ul>${x.details.map(d => `<li>${escape(d)}</li>`).join('')}</ul><div class="tag-list">${x.tags.map(t => `<span>${escape(t)}</span>`).join('')}</div></div><div class="exp-side"><span class="exp-type-icon" aria-hidden="true">${x.type === 'industry' ? '↗' : x.type === 'leadership' ? '★' : '✳'}</span><span>RS / WORK FILE</span></div></article>`).join('');
    };
    render('all');
    if (filters) filters.addEventListener('click',(e)=>{ const btn=e.target.closest('button[data-filter]');if(!btn) return; $$('button',filters).forEach(b => { const active=b===btn;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active)); });render(btn.dataset.filter); });
  }
  function initEvents() {
    const grid = $('#event-grid'); if (!grid) return;
    grid.innerHTML = data.events.map((event,i) => `<article class="event-card accent-${escape(event.accent)} reveal"><div class="event-photo" data-event="${escape(event.id)}"><div class="photo-placeholder"><span class="placeholder-micro">EVENT ARCHIVE / ${String(i+1).padStart(2,'0')}</span><span class="placeholder-art" aria-hidden="true">${['✳','✦','⚡','★','↗','❋'][i%6]}</span><strong>${escape(event.label)}</strong><span class="placeholder-upload">PHOTO GOES HERE <b>↗</b></span></div></div><div class="event-body"><div class="event-meta"><span>${escape(event.type)}</span><span>EVENT ${String(i+1).padStart(2,'0')}</span></div><h3>${escape(event.name)}</h3><p class="event-org">${escape(event.org)}</p><p>${escape(event.description)}</p><div class="event-role"><strong>MY PART</strong><span>${escape(event.role)}</span></div></div></article>`).join('');
    data.events.forEach(e=>{
      const frame = $(`[data-event="${e.id}"]`,grid);
      if (!frame) return;
      const img = new Image(); img.alt = `${e.name} event photo`; img.loading='lazy'; img.decoding='async';
      img.addEventListener('load',() => { frame.append(img);frame.classList.add('has-photo'); });
      img.src = e.image;
    });
  }
  function initReveals() {
    const elements = $$('.reveal');
    if (!('IntersectionObserver' in window) || reducedMotion.matches) { elements.forEach(x=>x.classList.add('is-visible')); return; }
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) {entry.target.classList.add('is-visible');observer.unobserve(entry.target);} }); },{rootMargin:'0px 0px -45px 0px',threshold:.09});
    elements.forEach(x=>observer.observe(x));
  }
  function initMotion() {
    const bar = $('.scroll-progress > span'); let raf = 0;
    function update() {
      raf=0;
      if (!bar) return;
      const max = Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      bar.style.transform = `scaleX(${Math.min(1,Math.max(0,window.scrollY/max))})`;
    }
    window.addEventListener('scroll',()=>{if(!raf) raf=requestAnimationFrame(update);},{passive:true});
    window.addEventListener('resize',update,{passive:true}); update();
    const hero = $('#hero-parallax');
    if(hero && !reducedMotion.matches && window.matchMedia('(pointer:fine)').matches){
      const surface = hero.closest('.hero-world');
      surface.addEventListener('pointermove',e=>{const r=surface.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;hero.style.setProperty('--parallax-x',`${(x*19).toFixed(2)}px`);hero.style.setProperty('--parallax-y',`${(y*15).toFixed(2)}px`);hero.style.setProperty('--rotate-x',`${(-y*6).toFixed(2)}deg`);hero.style.setProperty('--rotate-y',`${(x*6).toFixed(2)}deg`);},{passive:true});
      surface.addEventListener('pointerleave',()=>{['--parallax-x','--parallax-y','--rotate-x','--rotate-y'].forEach(v=>hero.style.removeProperty(v));});
    }
    // Gentle magnetic lift on interactive comic surfaces; keyboard users get equivalent focus styling.
    if (!reducedMotion.matches && window.matchMedia('(pointer:fine)').matches) {
      $$('.comic-button, .story-tile').forEach(el=>{
        el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.setProperty('--tilt-x',`${((e.clientX-r.left)/r.width-.5)*3}deg`);el.style.setProperty('--tilt-y',`${((e.clientY-r.top)/r.height-.5)*-3}deg`);},{passive:true});
        el.addEventListener('pointerleave',()=>{el.style.removeProperty('--tilt-x');el.style.removeProperty('--tilt-y');});
      });
    }
  }
  initChrome(); initProjects(); initExperience(); initEvents(); initReveals(); initMotion();
})();
