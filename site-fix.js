(function () {
  'use strict';

  // Shared design system for every Buddies Cafe page.
  if (!document.querySelector('link[data-buddies-common-css]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'common.css?v=2';
    link.dataset.buddiesCommonCss = 'true';
    document.head.appendChild(link);
  }

  const routes = {
    home: 'index.html', 'about us': 'about_page.html', about: 'about_page.html',
    menu: 'menu_page.html', combos: 'combos_page.html', review: 'reviews_page.html', reviews: 'reviews_page.html', contact: 'contact_page.html',
    pizza: 'pizza.html', pizzas: 'pizza.html', burger: 'Burger.html', burgers: 'Burger.html', 'mo-burger': 'Burger.html', momos: 'momos.html',
    'chicken tenders': 'tenders.html', tenders: 'tenders.html', nuggets: 'tenders.html', 'coastal tenders': 'tenders.html',
    hotdog: 'hotdog.html', 'hot dog': 'hotdog.html', 'french fries': 'french fries.html', fries: 'french fries.html', snacks: 'snacks.html',
    dessert: 'dessert.html', desserts: 'dessert.html', waffle: 'dessert.html', waffles: 'dessert.html', sundae: 'dessert.html',
    beverages: 'Bevarages.html', beverage: 'Bevarages.html', 'cold coffee': 'Bevarages.html', 'milk shake': 'Bevarages.html', mocktail: 'Bevarages.html'
  };

  function clean(text) { return (text || '').replace(/\s+/g, ' ').trim().toLowerCase(); }
  function routeForText(text) {
    const t = clean(text);
    if (routes[t]) return routes[t];
    for (const key of Object.keys(routes)) if (t.includes(key)) return routes[key];
    return null;
  }

  function fixNavigation() {
    document.querySelectorAll('nav').forEach(function (nav) {
      const links = Array.from(nav.querySelectorAll('a'));
      if (!links.length) return;
      const wanted = ['home', 'about us', 'menu', 'combos', 'review', 'contact'];
      const matched = [];
      wanted.forEach(function (name) {
        const link = links.find(function (a) { const t = clean(a.textContent); return t === name || (name === 'review' && t === 'reviews'); });
        if (link) {
          if (name === 'review') link.textContent = 'Review';
          link.href = routes[name];
          link.setAttribute('data-path', name);
          matched.push(link);
        }
      });
      if (matched.length >= 4) matched.forEach(function (link) { nav.appendChild(link); });
    });
  }

  function fixHomePage() {
    if (!/index\.html?$/.test(location.pathname) && location.pathname !== '/' && !location.pathname.endsWith('/buddies-cafe/')) return;
    document.querySelectorAll('a').forEach(function (a) {
      if (clean(a.textContent) === 'explore full menu') a.href = routes.menu;
      if (clean(a.textContent).includes('book a gaming table')) { a.textContent = 'Explore Gaming'; a.href = '#gaming-lounge'; }
    });

    const homeCategories = [
      ['Pizza', routes.pizza], ['Burgers & Mo-Burgers', routes.burger], ['Chicken & Tenders', routes.tenders],
      ['Fried Momos', routes.momos], ['Loaded French Fries', routes['french fries']], ['Sundaes & Waffles', routes.dessert],
      ['Cold Brews, Shakes & Mocktails', routes.beverages]
    ];
    document.querySelectorAll('#menu-teaser .group').forEach(function (card) {
      const heading = card.querySelector('h3'); if (!heading) return;
      const item = homeCategories.find(function (entry) { return clean(entry[0]) === clean(heading.textContent); });
      if (!item) return;
      card.style.cursor = 'pointer'; card.setAttribute('role', 'link'); card.setAttribute('tabindex', '0'); card.dataset.route = item[1];
      card.addEventListener('keydown', function (event) { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); window.location.assign(item[1]); } });
    });
  }

  document.addEventListener('DOMContentLoaded', function () { fixNavigation(); fixHomePage(); });

  document.addEventListener('click', function (event) {
    const el = event.target.closest('a,button,[role="button"],.cursor-pointer,[onclick],#menu-teaser .group');
    if (!el) return;
    const label = clean(el.textContent); const href = el.getAttribute('href') || '';
    if (el.closest('nav')) { const route = routeForText(label); if (route) { event.preventDefault(); event.stopImmediatePropagation(); window.location.assign(route); return; } }
    if (el.matches('#menu-teaser .group') && el.dataset.route) { event.preventDefault(); event.stopImmediatePropagation(); window.location.assign(el.dataset.route); return; }
    const route = routeForText(label);
    const category = /pizza|burger|momo|tender|nugget|coastal|hot ?dog|french fries|fries|snack|dessert|waffle|sundae|beverage|cold coffee|milk shake|mocktail/i.test(label);
    if (route && category && (!href || href === '#' || href.startsWith('#'))) { event.preventDefault(); event.stopImmediatePropagation(); window.location.assign(route); }
  }, true);
})();
