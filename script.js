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

  function initCinematicIntro() {
    const intro = $('#cinema-intro');
    if (!intro) return;
    const root = document.documentElement;
    if (root.dataset.intro !== 'on') { intro.hidden = true; return; }

    let closing = false;
    const enter = $('#cinema-enter');
    const skip = $('#cinema-skip');
    if (reducedMotion.matches) intro.classList.add('cinema-ready');
    else window.setTimeout(() => intro.classList.add('cinema-ready'), 3100);

    const close = (event) => {
      event?.preventDefault();
      if (closing) return;
      closing = true;
      try { sessionStorage.setItem('ronak-intro-complete', '1'); } catch (_) {}
      intro.classList.add('is-exiting');
      const finish = () => {
        root.dataset.intro = 'off';
        intro.hidden = true;
        const target = $('#main-content');
        if (target) { target.setAttribute('tabindex','-1'); target.focus({preventScroll: true}); }
        // Rerender pinned horizontal projects after unlocking document scroll.
        window.dispatchEvent(new Event('resize'));
      };
      if (reducedMotion.matches) finish(); else window.setTimeout(finish, 590);
    };
    skip?.addEventListener('click', close);
    enter?.addEventListener('click', close);
    intro.addEventListener('keydown', e => { if (e.key === 'Escape') close(e); });

    // Keep keyboard users inside the intro until they choose Skip or Enter.
    intro.addEventListener('keydown', e => {
      if (e.key !== 'Tab') return;
      const focusable = [skip,enter].filter(Boolean).filter(el => getComputedStyle(el).visibility !== 'hidden');
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  function initChrome() {
    const nav = $('#site-header');
    if (nav) nav.innerHTML = `
      <header class="site-header"><nav class="shell nav-inner" aria-label="Main navigation">
        <a href="index.html#top" class="brand" aria-label="Ronak Shah — home"><span class="brand-symbol">R</span><span>RONAK<span class="brand-dot">.</span></span></a>
        <div class="nav-links" id="nav-links">
          <a href="index.html#about" ${page==='home'?'class="is-current"':''}>ABOUT</a>
          <a href="index.html#projects">PROJECTS</a>
          <a href="work.html" ${page==='work'?'class="is-current"':''}>WORK</a>
          <a href="events.html" ${page==='events'?'class="is-current"':''}>EVENTS</a>
          <a href="achievements.html" ${page==='achievements'?'class="is-current"':''}>WINS</a>
          <a href="index.html#contact">CONTACT</a>
          <a href="${escape(data.identity.resume)}" class="nav-resume" target="_blank" rel="noopener noreferrer">RESUME ↗</a>
        </div>
        <div class="nav-actions">
          <button class="theme-toggle" type="button" aria-label="Switch to dark theme" title="Switch theme" aria-pressed="false"><span class="theme-icon" aria-hidden="true">☾</span><span class="theme-toggle-text">DARK</span></button>
          <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-controls="nav-links" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </nav></header>`;
    const footer = $('#site-footer');
    if (footer) footer.innerHTML = `<footer class="site-footer"><div class="shell footer-inner"><a href="index.html#top" class="footer-logo" aria-label="Back to top">R</a><div><strong>RONAK SHAH</strong></div><div class="footer-links"><a href="index.html?intro=replay" class="replay-intro-link">REPLAY INTRO ↺</a><a href="${escape(data.identity.github)}" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href="${escape(data.identity.linkedin)}" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="mailto:${escape(data.identity.email)}">EMAIL ↗</a></div><span class="footer-copyright">© ${new Date().getFullYear()} / ALL IDEAS WELCOME</span></div></footer>`;
    const toggle = $('.menu-toggle'); const links = $('#nav-links');
    if (toggle && links) {
      const setMenu = (isOpen) => { links.classList.toggle('is-open', isOpen); toggle.setAttribute('aria-expanded', String(isOpen)); toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu'); document.body.classList.toggle('menu-open', isOpen); };
      toggle.addEventListener('click', () => setMenu(!links.classList.contains('is-open')));
      $$('a', links).forEach(a => a.addEventListener('click', () => setMenu(false)));
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    }
  }


  function initThemeAndBack() {
    const root = document.documentElement;
    const toggle = $('.theme-toggle');
    const metaTheme = $('meta[name="theme-color"]');
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const selected = () => root.dataset.theme === 'dark' ? 'dark' : 'light';
    const render = (theme) => {
      root.dataset.theme = theme;
      root.style.colorScheme = theme;
      if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#11131b' : '#f4eedf');
      if (toggle) {
        const next = theme === 'dark' ? 'light' : 'dark';
        toggle.setAttribute('aria-label', `Switch to ${next} theme`);
        toggle.setAttribute('title', `Switch to ${next} theme`);
        toggle.setAttribute('aria-pressed', String(theme === 'dark'));
        $('.theme-icon', toggle).textContent = theme === 'dark' ? '☀' : '☾';
        $('.theme-toggle-text', toggle).textContent = next.toUpperCase();
      }
    };
    render(selected());
    toggle?.addEventListener('click', () => {
      const next = selected() === 'dark' ? 'light' : 'dark';
      render(next);
      try { localStorage.setItem('ronak-portfolio-theme', next); } catch (_) {}
    });
    media.addEventListener?.('change', e => {
      try { if (!localStorage.getItem('ronak-portfolio-theme')) render(e.matches ? 'dark' : 'light'); } catch (_) {}
    });
    // Direct visits return to home; visits from another portfolio page return to their actual origin.
    $$('[data-back]').forEach(back => back.addEventListener('click', event => {
      try {
        if (!document.referrer || window.history.length < 2) return;
        const previous = new URL(document.referrer);
        const allowed = ['','index.html','work.html','events.html','achievements.html'];
        if (previous.origin !== window.location.origin || previous.pathname === window.location.pathname) return;
        if (!allowed.includes(previous.pathname.split('/').pop())) return;
        event.preventDefault();
        window.history.back();
      } catch (_) { /* Use the regular home link instead. */ }
    }));
  }

  function initAchievements() {
    const grid = $('#achievements-grid');
    if (!grid || !Array.isArray(data.achievements)) return;
    grid.innerHTML = data.achievements.map((award, i) => `
      <article class="achievement-card accent-${escape(award.accent)} reveal">
        <div class="achievement-card-meta"><span>${escape(award.category)}</span><span>0${i+1} / 0${data.achievements.length}</span></div>
        ${award.image ? `<button type="button" class="achievement-proof photo-open-trigger" data-photo-open data-photo-title="${escape(award.title)}" aria-label="View full-size photo of ${escape(award.title)}"><img src="${escape(award.image)}" alt="${escape(award.title)} team photo" loading="lazy" decoding="async" /><span class="photo-expand-icon" aria-hidden="true">⤢ VIEW PHOTO</span></button>` : `<div class="achievement-emblem" aria-hidden="true"><span>${escape(award.symbol)}</span></div>`}
        <div class="achievement-card-content"><span class="achievement-result">${escape(award.result)}</span><h3>${escape(award.title)}</h3><p>${escape(award.description)}</p></div>
      </article>`).join('');
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
    return `<span class="cover-shape cover-shape-one">${escape(form[0])}</span>`;
  };
  function featuredCard(p) {
    return `<article class="featured-project accent-${escape(p.accent)}" id="project-${escape(p.id)}">
      <div class="featured-cover" aria-hidden="true">${decor(p)}<span class="cover-big-title">${escape(p.title)}</span></div>
      <div class="featured-content"><div class="project-number-line"><span>${escape(p.category)} · ${escape(p.year)}</span></div><h3>${escape(p.title)}</h3><p class="featured-description">${escape(p.description)}</p><div class="tag-list">${p.stack.map(s=>`<span>${escape(s)}</span>`).join('')}</div><div class="featured-actions">${link(p.github,'VIEW CODE ↗','project-action')}${link(p.live,'LIVE DEMO ↗','project-action action-live')}${p.note?`<span class="project-private">${escape(p.note)}</span>`:''}</div></div>
    </article>`;
  }
  function archiveCard(p) {
    return `<article class="archive-card accent-${escape(p.accent)} reveal"><div class="archive-card-art" aria-hidden="true">${decor(p)}</div><div class="archive-card-main"><div class="archive-card-eyebrow"><span>${escape(p.category)} · ${escape(p.year)}</span></div><h4>${escape(p.title)}</h4><p>${escape(p.description)}</p><div class="tag-list">${p.stack.map(s=>`<span>${escape(s)}</span>`).join('')}</div><div class="archive-links">${link(p.github,'GITHUB ↗')}${link(p.live,'LIVE ↗')}</div></div></article>`;
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
      list.innerHTML = records.map(x => `<article class="experience-card reveal is-visible"><div class="exp-index">${escape(x.index)}</div><div class="exp-main"><div class="exp-meta"><span>${escape(x.type.toUpperCase())}</span><span>${escape(x.date)}</span></div><h3>${escape(x.role)}</h3><h4>${escape(x.org)}</h4><p class="exp-quote">${escape(x.summary)}</p><ul>${x.details.map(d => `<li>${escape(d)}</li>`).join('')}</ul><div class="tag-list">${x.tags.map(t => `<span>${escape(t)}</span>`).join('')}</div></div></article>`).join('');
    };
    render('all');
    if (filters) filters.addEventListener('click',(e)=>{ const btn=e.target.closest('button[data-filter]');if(!btn) return; $$('button',filters).forEach(b => { const active=b===btn;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active)); });render(btn.dataset.filter); });
  }
  function initEvents() {
    const archive = $('#event-grid'); if (!archive) return;
    const groupInfo = [
      { id: 'second', label: 'SECOND YEAR', chapter: 'CHAPTER 01', heading: 'WHERE IT STARTED', subtext: 'ACM marketing, Illuminati PR and the first big campus moments.' },
      { id: 'third', label: 'THIRD YEAR', chapter: 'CHAPTER 02', heading: 'LEVELING UP', subtext: 'Buildathons, workshops, sponsorships and leading initiatives.' }
    ];
    const renderCard = (event, i) => `<article class="event-card accent-${escape(event.accent)} reveal" id="event-${escape(event.id)}"><div class="event-photo" data-event="${escape(event.id)}"><div class="photo-placeholder"><span class="placeholder-art" aria-hidden="true">${['✳','✦','⚡','★','↗','❋'][i%6]}</span><strong>${escape(event.label)}</strong></div></div><div class="event-body"><div class="event-meta"><span>${escape(event.type)}</span></div><h3>${escape(event.name)}</h3><p class="event-org">${escape(event.org)}</p><p>${escape(event.description)}</p><div class="event-role"><strong>MY PART</strong><span>${escape(event.role)}</span></div></div></article>`;
    archive.innerHTML = groupInfo.map(group => {
      const records = data.events.filter(e => e.era === group.id);
      if (!records.length) return '';
      return `<section class="event-era" id="${group.id}-events" aria-labelledby="${group.id}-title"><div class="event-era-heading"><div><span class="event-era-kicker">${escape(group.chapter)} / ${escape(group.label)}</span><h3 id="${group.id}-title">${escape(group.heading)}</h3><p>${escape(group.subtext)}</p></div><span class="event-era-count">${records.length} ${group.id==='highlight'?'WIN':'EVENTS'}</span></div><div class="event-grid">${records.map(renderCard).join('')}</div></section>`;
    }).join('');
    data.events.forEach(event => {
      const frame = archive.querySelector(`[data-event="${event.id}"]`);
      if (!frame || !event.image) return;
      // A detached lazy-loaded image may never start downloading. Attach it first,
      // then switch from the comic placeholder after a successful load.
      const img = new Image();
      img.alt = `${event.name} — event photograph`;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.addEventListener('load', () => { frame.classList.add('has-photo','photo-open-trigger'); frame.setAttribute('data-photo-open', ''); frame.setAttribute('data-photo-title', event.name); frame.setAttribute('role','button'); frame.setAttribute('tabindex','0'); frame.setAttribute('aria-label', `View full-size photo of ${event.name}`); });
      img.addEventListener('error', () => { img.remove(); frame.classList.add('missing-photo'); });
      if (event.position) img.style.objectPosition = event.position;
      frame.append(img);
      img.src = event.image;
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

  // Accessible full-size photo lightbox for achievements and event images.
  function initPhotoViewer() {
    const overlay = document.createElement('div');
    overlay.className = 'photo-lightbox';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.setAttribute('aria-label','Full-size portfolio photograph');
    overlay.hidden = true;
    overlay.innerHTML = `<div class="photo-lightbox-scrim" data-photo-close></div>
      <section class="photo-lightbox-panel" aria-label="Photo viewer">
        <div class="photo-lightbox-top"><strong id="photo-lightbox-title"></strong><div class="photo-lightbox-tools">
          <a class="photo-lightbox-original" id="photo-lightbox-original" target="_blank" rel="noopener noreferrer" download>OPEN ORIGINAL ↗</a>
          <button class="photo-lightbox-close" type="button" data-photo-close aria-label="Close photograph">✕</button>
        </div></div>
        <div class="photo-lightbox-image-wrap"><img id="photo-lightbox-image" alt="" /></div>
        <p class="photo-lightbox-help">Tap the photo to zoom · ESC to close</p>
      </section>`;
    document.body.appendChild(overlay);
    const large = overlay.querySelector('#photo-lightbox-image');
    const heading = overlay.querySelector('#photo-lightbox-title');
    const original = overlay.querySelector('#photo-lightbox-original');
    const closer = overlay.querySelector('.photo-lightbox-close');
    let restoreFocus = null;
    function close() {
      if (overlay.hidden) return;
      overlay.hidden = true;
      document.body.classList.remove('photo-lightbox-open');
      large.classList.remove('is-zoomed');
      large.removeAttribute('src');
      restoreFocus?.focus?.();
    }
    document.addEventListener('click', event => {
      if (event.target.closest('[data-photo-close]')) { close(); return; }
      const trigger = event.target.closest('[data-photo-open]');
      if (!trigger) return;
      const preview = trigger.querySelector('img');
      if (!preview?.complete || !preview.naturalWidth) return;
      restoreFocus = trigger;
      const source = preview.currentSrc || preview.src;
      heading.textContent = trigger.dataset.photoTitle || preview.alt || 'Portfolio photo';
      large.src = source;
      large.alt = preview.alt;
      original.href = source;
      overlay.hidden = false;
      document.body.classList.add('photo-lightbox-open');
      closer.focus();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !overlay.hidden) { event.preventDefault(); close(); }
      if (overlay.hidden) {
        if ((event.key === 'Enter' || event.key === ' ') && document.activeElement?.matches('.event-photo[data-photo-open]')) {
          event.preventDefault(); document.activeElement.click();
        }
        return;
      }
      if (event.key === 'Tab') {
        const focusables = [original,closer];
        if (event.shiftKey && document.activeElement === focusables[0]) { event.preventDefault(); closer.focus(); }
        else if (!event.shiftKey && document.activeElement === closer) { event.preventDefault(); original.focus(); }
      }
    });
    large.addEventListener('click', () => large.classList.toggle('is-zoomed'));
    original.addEventListener('click', () => {});
  }

  initChrome(); initCinematicIntro(); initThemeAndBack(); initProjects(); initExperience(); initEvents(); initAchievements(); initPhotoViewer(); initReveals(); initMotion();
})();