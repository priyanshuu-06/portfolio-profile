/* ============================================================
   PRIYANSHU PATIL — ENGINEERING PORTFOLIO
   Main JavaScript — All interactions
   ============================================================ */
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ── PAGE PROGRESS BAR ── */
(function() {
  const bar = $('#pageProgress');
  if (!bar) return;
  function update() {
    const d = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (d > 0 ? (window.scrollY / d) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ── NAV ── */
(function() {
  const nav = $('#navBar');
  const mobileBtn = $('#mobileBtn');
  const links = $('#navLinks');
  const allLinks = $$('.nav-link');
  const sections = $$('section[id]');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 10);
    const btt = $('#backToTop');
    if (window.scrollY > 500) btt.removeAttribute('hidden');
    else btt.setAttribute('hidden', '');

    let current = '';
    sections.forEach(s => {
      if (s.getBoundingClientRect().top <= 90) current = s.id;
    });
    allLinks.forEach(l => {
      const h = l.getAttribute('href') || '';
      l.classList.toggle('active', h.replace('#','') === current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  mobileBtn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    mobileBtn.setAttribute('aria-expanded', String(open));
  });
  allLinks.forEach(l => {
    l.addEventListener('click', () => {
      links.classList.remove('open');
      mobileBtn.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) {
      links.classList.remove('open');
      mobileBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Mobile dropdown toggle
  $$('.nav-dropdown').forEach(dd => {
    const trigger = dd.querySelector('.nav-link');
    if (trigger) {
      trigger.addEventListener('click', e => {
        if (window.innerWidth <= 640) {
          e.preventDefault();
          dd.classList.toggle('dd-open');
        }
      });
    }
  });

  // Nav filter shortcuts (dropdown items with data-filter-nav)
  $$('[data-filter-nav]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const cat = el.dataset.filterNav;
      // activate the filter
      $$('.proj-filter').forEach(b => b.classList.remove('active'));
      const btn = $(`.proj-filter[data-proj-cat="${cat}"]`);
      if (btn) btn.click();
      // scroll
      const target = $('#projects');
      if (target) {
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH - 16, behavior: 'smooth' });
      }
      links.classList.remove('open');
      mobileBtn.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ── BACK TO TOP ── */
(function() {
  const btn = $('#backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ── SMOOTH SCROLL ── */
(function() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH - 16, behavior: 'smooth' });
  });
})();

/* ── HERO PREVIEWS ── */
(function() {
  $$('.hero-preview[data-target]').forEach(el => {
    function go() {
      const target = document.getElementById(el.dataset.target);
      if (!target) return;
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH - 16, behavior: 'smooth' });
    }
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
})();

/* ── DASHBOARD TILES ── */
(function() {
  $$('.dash-tile[data-filter-target]').forEach(tile => {
    tile.addEventListener('click', e => {
      const cat = tile.dataset.filterTarget;
      const btn = $(`.proj-filter[data-proj-cat="${cat}"]`);
      if (btn) btn.click();
    });
  });
})();

/* ── SCROLL FADE-UP ── */
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sel = [
    '.proj-card', '.patent-card', '.achievement-card', '.interest-card',
    '.timeline-item', '.research-item', '.sec-header', '.arch-node',
    '.dash-tile', '.cert-card'
  ].join(',');
  $$(sel).forEach((el, i) => {
    if (!el.classList.contains('fade-up')) {
      el.classList.add('fade-up');
      el.style.transitionDelay = `${(i % 5) * 55}ms`;
    }
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  $$('.fade-up').forEach(el => obs.observe(el));
})();

/* ── PROJECT FILTERS ── */
(function() {
  const btns = $$('.proj-filter');
  const cards = $$('.proj-card[data-cats]');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.projCat;
      cards.forEach(card => {
        if (cat === 'all') card.classList.remove('hidden');
        else {
          const cats = (card.dataset.cats || '').split(' ');
          card.classList.toggle('hidden', !cats.includes(cat));
        }
      });
    });
  });
})();

/* ── PROJECT MODAL ── */
(function() {
  const overlay = $('#projModal');
  const body = $('#modalBody');
  const closeBtn = $('#modalCloseBtn');
  if (!overlay || !body || !closeBtn) return;

  function buildArch(steps) {
    if (!steps || !steps.length) return '';
    return `<div class="modal-arch">
      ${steps.map((s, i) => `
        <div class="modal-arch-step${i === Math.floor(steps.length / 2) ? ' highlight' : ''}">
          <div class="modal-arch-label">${typeof s === 'string' ? s : s.step}</div>
          ${typeof s === 'object' && s.desc ? `<div class="modal-arch-desc">${s.desc}</div>` : ''}
        </div>`).join('')}
    </div>`;
  }

  function buildModal(p) {
    const hw = p.hardware && p.hardware.length
      ? `<ul>${p.hardware.map(h => `<li>${h}</li>`).join('')}</ul>`
      : '<p>Hardware details to be documented.</p>';
    const sw = p.software && p.software.length
      ? `<ul>${p.software.map(s => `<li>${s}</li>`).join('')}</ul>`
      : '<p>Software details to be documented.</p>';
    const fw = p.futureWork && p.futureWork.length
      ? `<ul>${p.futureWork.map(f => `<li>${f}</li>`).join('')}</ul>` : '';

    const tagsHtml = (p.tags || []).map(t => `<span class="modal-tag">${t}</span>`).join('');
    const patentHtml = p.patent
      ? `<div class="modal-sec"><h3>Patent Information</h3>
          <p><strong>Published Application:</strong> ${p.patent}</p>
          ${p.patent2 ? `<p><strong>Related Application:</strong> ${p.patent2}</p>` : ''}
         </div>` : '';
    const achieveHtml = p.achievement
      ? `<div class="modal-sec"><h3>Recognition</h3><p>${p.achievement}</p></div>` : '';
    const teamHtml = p.team
      ? `<div class="modal-sec"><h3>Team &amp; Context</h3>
          <p>${p.team}</p>
          ${p.hackathon ? `<p><strong>Event:</strong> ${p.hackathon}</p>` : ''}
          ${p.myRole ? `<p><strong>My Role:</strong> ${p.myRole}</p>` : ''}
         </div>` : '';
    const linksHtml = (p.githubUrl || p.demoUrl)
      ? `<div class="modal-links">
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-dark">View on GitHub →</a>` : ''}
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Live Demo ↗</a>` : ''}
         </div>` : '';

    return `
      <p class="modal-cat">${p.category}</p>
      <h2 class="modal-title" id="modalHeading">${p.title}</h2>
      ${p.subtitle ? `<p style="font-size:15px;color:var(--text-sec);margin-bottom:20px;">${p.subtitle}</p>` : ''}
      ${p.coverImage ? `<img src="${p.coverImage}" alt="${p.coverAlt || p.title}" class="modal-hero-img" onerror="this.style.display='none'" />` : ''}
      ${tagsHtml ? `<div class="modal-tag-row" style="margin-bottom:28px;">${tagsHtml}</div>` : ''}

      <div class="modal-sec"><h3>The Problem</h3><p>${p.problem}</p></div>
      <div class="modal-sec"><h3>Project Objective</h3><p>${p.objective}</p></div>
      <div class="modal-sec"><h3>System Overview</h3><p>${p.overview}</p></div>
      <div class="modal-sec"><h3>My Technical Contribution</h3><p>${p.contribution}</p></div>

      <div class="modal-sec modal-two-col">
        <div><h3>Hardware &amp; Components</h3>${hw}</div>
        <div><h3>Software &amp; Technologies</h3>${sw}</div>
      </div>

      ${p.architecture && p.architecture.length ? `<div class="modal-sec"><h3>System Architecture</h3>${buildArch(p.architecture)}</div>` : ''}

      <div class="modal-sec"><h3>Technical Results</h3><p>${p.results}</p></div>
      <div class="modal-sec"><h3>Challenges &amp; Engineering Decisions</h3><p>${p.challenges}</p></div>

      ${fw ? `<div class="modal-sec"><h3>Future Improvements</h3>${fw}</div>` : ''}
      ${patentHtml}${achieveHtml}${teamHtml}${linksHtml}
    `;
  }

  function open(id) {
    if (typeof PROJECTS === 'undefined' || !PROJECTS[id]) return;
    body.innerHTML = buildModal(PROJECTS[id]);
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  $$('.proj-card').forEach(card => {
    card.addEventListener('click', () => open(card.dataset.project));
    const btn = card.querySelector('.inline-arrow');
    if (btn) btn.addEventListener('click', e => { e.stopPropagation(); open(card.dataset.project); });
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !overlay.hasAttribute('hidden')) close(); });
})();

/* ── SIGNAL FLOW ── */
(function() {
  const stages = $$('.signal-stage-btn[data-stage]');
  const panel = $('#signalPanel');
  if (!stages.length || !panel) return;

  const DATA = {
    sensors: {
      title: 'Sensor Layer',
      body: 'Physical inputs are captured by dedicated hardware sensors. In Vanrakshak, a digital IR flame sensor detects thermal events while a camera module provides visual frames for YOLO inference. The Vision Stick uses an ultrasonic sensor for proximity detection alongside a camera. Sanket Edge uses a waterproof ultrasonic sensor for water level, a soil moisture sensor, and a DHT11 for temperature and humidity.',
      chips: ['Digital IR Flame Sensor', 'Camera Module', 'Ultrasonic Sensor (JSN-SR04T)', 'Soil Moisture Sensor', 'DHT11 Temp & Humidity']
    },
    edge: {
      title: 'Edge Processing',
      body: 'Sensor data is processed locally on-device — no cloud dependency required. Vanrakshak runs YOLO inference on a Raspberry Pi 5, classifying frames in real time while simultaneously evaluating IR sensor readings. Sanket Edge runs a TinyML flood classification model directly on an ESP32 using Edge Impulse, and performs on-device drought risk assessment on a second node.',
      chips: ['Raspberry Pi 5', 'YOLO Inference', 'Python Runtime', 'ESP32 + TinyML', 'Edge Impulse', 'On-Device Classification']
    },
    wireless: {
      title: 'Wireless Communication',
      body: 'Structured alert payloads are transmitted over LoRa — a long-range, low-power protocol suited for forest and remote environments where cellular connectivity is absent. Both Vanrakshak and Sanket Edge use LoRa modules for inter-node communication, enabling kilometre-range transmission without infrastructure dependency.',
      chips: ['LoRa / LPWAN', 'SX1278 LoRa Modules', 'Long-Range Transmission', 'Low Bandwidth Payloads', 'No Cellular Required', 'ArduinoJson Serialization']
    },
    dashboard: {
      title: 'Monitoring Dashboard',
      body: 'Received alerts are logged at the gateway node and displayed on a monitoring interface. Vanrakshak uses a React-based dashboard showing alert history and event logs. Sanket Edge connects to Blynk IoT for cloud visualization and explainability. Both systems continue generating local alerts even when internet connectivity is unavailable.',
      chips: ['React Dashboard', 'Alert History', 'Blynk IoT', 'Gateway Node', 'Offline Local Alerts', 'Event Logging']
    }
  };

  function show(key) {
    stages.forEach(s => {
      const active = s.dataset.stage === key;
      s.classList.toggle('active', active);
      s.setAttribute('aria-selected', String(active));
    });
    const d = DATA[key];
    if (!d) return;
    panel.innerHTML = `
      <h3>${d.title}</h3>
      <p>${d.body}</p>
      <div class="signal-chips">${d.chips.map(c => `<span class="signal-chip">${c}</span>`).join('')}</div>
    `;
  }

  stages.forEach(s => s.addEventListener('click', () => show(s.dataset.stage)));
  show('sensors');
})();

/* ── GALLERY FILTER + LIGHTBOX ── */
(function() {
  // Filter
  const filterBtns = $$('.filter-btn');
  const items = $$('#mainGallery .gallery-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      items.forEach(item => {
        item.classList.toggle('hidden', f !== 'all' && item.dataset.category !== f);
      });
    });
  });

  // Lightbox
  const lb = $('#lightbox');
  const lbImg = $('#lbImg');
  const lbTitle = $('#lbTitle');
  const lbDesc = $('#lbDesc');
  const lbClose = $('#lbClose');
  const lbPrev = $('#lbPrev');
  const lbNext = $('#lbNext');
  if (!lb) return;

  let allItems = [], idx = 0;

  function buildList() { allItems = $$('.gallery-item[data-src]'); }

  function show(i) {
    buildList();
    if (!allItems.length) return;
    idx = ((i % allItems.length) + allItems.length) % allItems.length;
    const item = allItems[idx];
    lbImg.src = item.dataset.src || '';
    lbImg.alt = item.querySelector('img') ? item.querySelector('img').alt : '';
    lbTitle.textContent = item.dataset.title || '';
    lbDesc.textContent = item.dataset.desc || '';
    lb.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLb() {
    lb.setAttribute('hidden', '');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item[data-src]');
    if (!item) return;
    buildList();
    const i = allItems.indexOf(item);
    if (i !== -1) show(i);
  });

  lbClose.addEventListener('click', closeLb);
  lbPrev.addEventListener('click', () => show(idx - 1));
  lbNext.addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => {
    if (lb.hasAttribute('hidden')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
})();

/* ── PATENTS ── */
(function() {
  const grid = $('#patentsGrid');
  if (!grid || typeof PATENTS === 'undefined') return;

  function observeFadeUp(el) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.classList.add('visible'); return; }
    el.classList.add('fade-up');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.05 });
    obs.observe(el);
  }

  PATENTS.forEach(p => {
    const card = document.createElement('article');
    card.className = 'patent-card';
    card.innerHTML = `
      <div class="patent-top">
        <span class="patent-idx">${p.index}</span>
        <span class="patent-status-pill">${p.status}</span>
      </div>
      <h3 class="patent-title">${p.title}</h3>
      <div class="patent-fields">
        <div class="patent-field">
          <span class="patent-field-key">Application Number</span>
          <span class="patent-field-val">${p.applicationNumber}</span>
        </div>
        <div class="patent-field">
          <span class="patent-field-key">Publication Period</span>
          <span class="patent-field-val">${p.publicationPeriod}</span>
        </div>
        <div class="patent-field">
          <span class="patent-field-key">Field</span>
          <span class="patent-field-val">${p.field}</span>
        </div>
      </div>
      <p class="patent-note">${p.note}</p>
      ${p.relatedProject ? `<a href="#projects" class="inline-arrow" style="margin-top:12px;display:inline-flex;color:rgba(255,255,255,0.7);">View Related Project →</a>` : ''}
    `;
    grid.appendChild(card);
    observeFadeUp(card);
  });
})();

/* ── RESEARCH ── */
(function() {
  const confList = $('#confList');
  const journalList = $('#journalList');
  if ((!confList && !journalList) || typeof RESEARCH === 'undefined') return;

  // Re-run fade-up observer for dynamically added elements
  function observeFadeUp(el) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible');
      return;
    }
    el.classList.add('fade-up');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.05 });
    obs.observe(el);
  }

  function renderItem(r, list) {
    const item = document.createElement('div');
    item.className = 'research-item';

    const flowHtml = r.flowSteps && r.flowSteps.length
      ? `<div class="research-flow">${r.flowSteps.map((s, i) => `
          <span class="research-flow-step">${s}</span>
          ${i < r.flowSteps.length - 1 ? '<span class="research-flow-arrow">→</span>' : ''}
        `).join('')}</div>` : '';

    const metricsHtml = r.metrics && r.metrics.length
      ? `<div class="research-metrics">${r.metrics.map(m => `
          <div class="metric-pill">
            <span class="metric-value">${m.value}</span>
            <span class="metric-label">${m.label}</span>
            <span class="metric-note">${m.note}</span>
          </div>`).join('')}</div>` : '';

    const limitHtml = r.limitations
      ? `<div class="research-limit-note"><strong>⚠ Stated Limitations:</strong> ${r.limitations}</div>` : '';

    const venueHtml = r.venueUrl
      ? `<a href="${r.venueUrl}" target="_blank" rel="noopener noreferrer">${r.venueFull}</a>`
      : (r.venueFull || r.venue || '');

    item.innerHTML = `
      <div class="research-item-header" tabindex="0" aria-expanded="false" data-toggle>
        <div class="research-title-group" style="flex:1;">
          <p class="research-title">${r.title}</p>
          <p class="research-venue">${venueHtml}</p>
          <span class="research-status-tag ${r.status.toLowerCase().includes('revision') ? 'status-revision' : ''}">${r.status}</span>
        </div>
        <span class="research-badge ${r.type === 'conference' ? 'badge-conf' : 'badge-journal'}">${r.typeLabel}</span>
        <button class="research-toggle-btn" aria-label="Expand details">+</button>
      </div>
      <div class="research-detail">
        <div class="research-detail-inner">
          <p style="font-size:14px;color:var(--text-sec);line-height:1.75;margin-bottom:12px;">${r.abstract}</p>
          ${flowHtml}
          ${metricsHtml}
          ${limitHtml}
          ${r.authors ? `<p style="margin-top:12px;font-size:12px;color:var(--text-sec);"><strong>Authors:</strong> ${r.authors}</p>` : ''}
        </div>
      </div>
    `;

    const header = item.querySelector('[data-toggle]');
    const detail = item.querySelector('.research-detail');
    const toggleBtn = item.querySelector('.research-toggle-btn');

    function toggle() {
      const open = detail.classList.toggle('open');
      toggleBtn.classList.toggle('open', open);
      header.setAttribute('aria-expanded', String(open));
    }
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    toggleBtn.addEventListener('click', e => { e.stopPropagation(); toggle(); });

    list.appendChild(item);
    observeFadeUp(item);
  }

  RESEARCH.forEach(r => {
    if (r.type === 'conference' && confList) renderItem(r, confList);
    if (r.type === 'journal' && journalList) renderItem(r, journalList);
  });

  // Tab switching
  $$('.research-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.research-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const target = tab.dataset.tab;
      if (confList) confList.style.display = target === 'conference' ? '' : 'none';
      if (journalList) journalList.style.display = target === 'journal' ? '' : 'none';
    });
  });
})();

/* ── SKILLS ── */
(function() {
  const catsEl = $('#skillCats');
  const panelsEl = $('#skillPanels');
  if (!catsEl || !panelsEl) return;

  const skills = [
    {
      id: 'hardware',
      label: 'Hardware & IoT',
      title: 'Hardware & IoT',
      primary: true,
      tags: ['Raspberry Pi 5', 'ESP32', 'Arduino', 'LoRa / LPWAN', 'Flame Sensors', 'Ultrasonic Sensors', 'Soil Sensors', 'Camera Modules', 'DHT11', 'JSN-SR04T']
    },
    {
      id: 'programming',
      label: 'Programming',
      title: 'Programming Languages',
      primary: false,
      tags: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'Assembly']
    },
    {
      id: 'edge-ai',
      label: 'Edge AI',
      title: 'Edge AI & Computer Vision',
      primary: false,
      tags: ['YOLO', 'TinyML', 'Edge Impulse', 'Computer Vision', 'Image Processing', 'Edge AI', 'Object Detection']
    },
    {
      id: 'satellite',
      label: 'Satellite & GIS',
      title: 'Satellite & Geospatial',
      primary: false,
      tags: ['Google Earth Engine', 'Sentinel-1', 'Sentinel-2', 'Landsat', 'NDVI Analytics', 'NDWI', 'Remote Sensing', 'REST APIs']
    },
    {
      id: 'web',
      label: 'Web & Cloud',
      title: 'Web & Cloud',
      primary: false,
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Docker', 'MQTT', 'Blynk IoT']
    },
    {
      id: 'tools',
      label: 'Dev Tools',
      title: 'Development Tools',
      primary: false,
      tags: ['Git', 'VS Code', 'Arduino IDE', 'Linux', 'Postman', 'Overleaf']
    }
  ];

  skills.forEach((cat, i) => {
    // Button
    const btn = document.createElement('button');
    btn.className = 'skill-cat-btn' + (i === 0 ? ' active' : '');
    btn.dataset.cat = cat.id;
    btn.textContent = cat.label;
    btn.setAttribute('aria-controls', `skill-panel-${cat.id}`);
    catsEl.appendChild(btn);

    // Panel
    const panel = document.createElement('div');
    panel.className = 'skill-panel' + (i === 0 ? ' active' : '');
    panel.id = `skill-panel-${cat.id}`;
    panel.innerHTML = `
      <p class="skill-group-title">${cat.title}</p>
      <div class="skill-tags">
        ${cat.tags.map(t => `<span class="skill-tag${cat.primary ? ' primary' : ''}">${t}</span>`).join('')}
      </div>
    `;
    panelsEl.appendChild(panel);
  });

  $$('.skill-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.skill-cat-btn').forEach(b => b.classList.remove('active'));
      $$('.skill-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = $(`#skill-panel-${btn.dataset.cat}`);
      if (panel) panel.classList.add('active');
    });
  });
})();

/* ── CERTIFICATES ── */
(function() {
  const grid = $('#certGrid');
  if (!grid || typeof CERTIFICATES === 'undefined') return;
  if (!CERTIFICATES.length) {
    grid.innerHTML = '<p style="color:var(--text-sec);font-size:14px;">Certificates will appear here once files are added.</p>';
    return;
  }
  CERTIFICATES.forEach(cert => {
    const card = document.createElement('article');
    card.className = 'cert-card';
    const preview = cert.available
      ? `<img src="${cert.imagePath}" alt="${cert.title}" loading="lazy" />`
      : `<span class="cert-placeholder">Document to be added</span>`;
    const actions = cert.available
      ? `<a href="${cert.filePath}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="font-size:11px;padding:5px 12px;">View</a>
         <a href="${cert.filePath}" download class="btn btn-dark" style="font-size:11px;padding:5px 12px;">Download</a>`
      : `<span style="font-size:11px;color:var(--text-sec);font-style:italic;">File to be added</span>`;
    card.innerHTML = `
      <div class="cert-preview">${preview}</div>
      <div class="cert-body">
        <p class="cert-issuer">${cert.issuer}</p>
        <p class="cert-title">${cert.title}</p>
        <p class="cert-date">${cert.type} · ${cert.date}</p>
        <div class="cert-actions">${actions}</div>
      </div>
    `;
    grid.appendChild(card);
  });
})();

/* ── CONTACT FORM ── */
(function() {
  const form = $('#contactForm');
  if (!form) return;
  const fields = {
    name:    { el: $('#cName'),    err: $('#errName'),    fn: v => v.trim().length >= 2 ? '' : 'Please enter your full name.' },
    email:   { el: $('#cEmail'),   err: $('#errEmail'),   fn: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.' },
    subject: { el: $('#cSubject'), err: $('#errSubject'), fn: v => v.trim().length >= 3 ? '' : 'Please enter a subject.' },
    message: { el: $('#cMessage'), err: $('#errMessage'), fn: v => v.trim().length >= 10 ? '' : 'Please enter a message (at least 10 characters).' }
  };
  Object.values(fields).forEach(({ el, err, fn }) => {
    el.addEventListener('blur', () => {
      const msg = fn(el.value);
      err.textContent = msg;
      el.classList.toggle('err', !!msg);
    });
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    Object.values(fields).forEach(({ el, err, fn }) => {
      const msg = fn(el.value);
      err.textContent = msg;
      el.classList.toggle('err', !!msg);
      if (msg) valid = false;
    });
    if (valid) {
      $('#formOk').removeAttribute('hidden');
      form.querySelector('button[type="submit"]').textContent = 'Message Ready ✓';
      $('#formOk').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
})();

/* ── GITHUB ── */
(function() {
  const grid = $('#githubGrid');
  if (!grid || typeof GITHUB_REPOS === 'undefined') return;
  GITHUB_REPOS.forEach(repo => {
    const card = document.createElement('a');
    card.href = repo.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'github-card' + (repo.featured ? ' featured' : '');
    card.setAttribute('aria-label', repo.name + ' on GitHub');
    const langColor = (typeof LANG_COLORS !== 'undefined' && LANG_COLORS[repo.language]) || '#888';
    const tagsHtml = repo.tags.map(t => `<span class="github-chip">${t}</span>`).join('');
    const demoLink = repo.demo
      ? `<a href="${repo.demo}" target="_blank" rel="noopener noreferrer" class="github-link-item github-link-demo" onclick="event.stopPropagation()">Live Demo ↗</a>`
      : '';
    card.innerHTML = `
      <div class="github-card-top">
        <span class="github-repo-icon">⌥</span>
        ${repo.featured ? '<span class="github-feat-badge">Featured</span>' : ''}
      </div>
      <p class="github-name">${repo.name}</p>
      <p class="github-desc">${repo.description}</p>
      <div class="github-tag-row">${tagsHtml}</div>
      <div class="github-card-foot">
        <div class="github-lang">
          <span class="github-lang-dot" style="background:${langColor}"></span>
          <span>${repo.language}</span>
        </div>
        <div class="github-card-links">
          ${demoLink}
          <span class="github-link-item">View Code →</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
})();


/* ============================================================
   GEN Z INTERACTIVE EFFECTS
   ============================================================ */

/* ── CUSTOM CURSOR ── */
(function() {
  const glow = document.getElementById('cursorGlow');
  const ring = document.getElementById('cursorRing');
  if (!glow || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    glow.style.left = mouseX + 'px';
    glow.style.top = mouseY + 'px';
  });

  // Ring lags behind for smooth feel
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Grow ring on interactive elements
  document.querySelectorAll('a, button, .proj-card, .dash-tile, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('cursor-hover'));
  });
})();

/* ── PARTICLE CANVAS ── */
(function() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.color = Math.random() > 0.5 ? '79,124,172' : '45,125,98';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
      ctx.fill();
    }
  }

  const COUNT = Math.min(80, Math.floor(W * H / 14000));
  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(79,124,172,${0.08 * (1 - dist/100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ── TYPING ANIMATION for hero headline ── */
(function() {
  const el = document.getElementById('typingHeadline');
  if (!el) return;

  const phrases = [
    'I build intelligent systems that interact with the real world.',
    'From sensors to satellites — end-to-end engineering.',
    'Hardware meets AI meets real-world impact.',
    'Building the future, one edge node at a time.'
  ];

  let phraseIdx = 0, charIdx = 0, deleting = false;
  el.classList.add('typing-text');

  function tick() {
    const current = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, 2200);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 28 : 52);
  }
  setTimeout(tick, 1000);
})();

/* ── RIPPLE EFFECT on buttons ── */
(function() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size/2}px;
        top: ${e.clientY - rect.top - size/2}px;
      `;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
})();

/* ── STAT COUNTER ANIMATION ── */
(function() {
  const statItems = document.querySelectorAll('.stat-item');
  if (!statItems.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      const valEl = entry.target.querySelector('.stat-value');
      if (!valEl || valEl.dataset.counted) return;
      valEl.dataset.counted = '1';
      const target = parseInt(valEl.dataset.target);
      const suffix = valEl.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();
      const startVal = target > 100 ? target - 100 : 0;

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startVal + (target - startVal) * eased);
        valEl.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else valEl.textContent = target + suffix;
      }
      requestAnimationFrame(update);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  statItems.forEach(item => obs.observe(item));
})();

/* ── REAL IMAGES for project cards — your actual photos ── */
(function() {
  // Your photos are now displayed directly in HTML img tags
  // This just ensures proper loading and fallback styling
  document.querySelectorAll('.proj-card-img').forEach(img => {
    img.addEventListener('error', function() {
      // If image fails, add placeholder class
      this.parentElement.classList.add('img-ph');
    });
  });
})();

/* ── MAGNETIC BUTTONS ── */
(function() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.btn-dark, .btn-outline, .btn-blue').forEach(btn => {
    btn.classList.add('btn-magnetic');
    btn.addEventListener('mousemove', function(e) {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.2;
      const dy = (e.clientY - cy) * 0.2;
      btn.style.transform = `translate(${dx}px, ${dy}px) translateY(-1px)`;
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.transform = '';
    });
  });
})();

/* ── DASH TILE SVG PLACEHOLDER fix for hero previews ── */
(function() {
  // Gallery items that have no real images — apply nice placeholder
  document.querySelectorAll('.hero-preview img').forEach(img => {
    img.addEventListener('error', function() {
      const parent = img.closest('.hero-preview');
      if (!parent) return;
      const target = parent.dataset.target || '';
      const icons = { 'vanrakshak': '🌲', 'projects': '⚡', 'field-visit': '🏛️' };
      const icon = icons[target] || '◈';
      parent.style.background = 'linear-gradient(135deg, #0f1e3d, #1e3a5f)';
      parent.style.display = 'flex';
      parent.style.alignItems = 'center';
      parent.style.justifyContent = 'center';
      parent.style.flexDirection = 'column';
      parent.style.gap = '4px';
      img.style.display = 'none';
      const span = document.createElement('span');
      span.textContent = icon;
      span.style.cssText = 'font-size:24px;opacity:0.8;';
      parent.insertBefore(span, img);
    });
  });
})();

/* ── TILT EFFECT on project cards ── */
(function() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.proj-card:not(.proj-card-wide), .dash-tile').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
      card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });
})();
