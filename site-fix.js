(function () {
  'use strict';

  const routes = {
    home: 'index.html',
    'about us': 'about_page.html',
    about: 'about_page.html',
    menu: 'menu_page.html',
    combos: 'combos_page.html',
    review: 'reviews_page.html',
    reviews: 'reviews_page.html',
    contact: 'contact_page.html',
    pizza: 'pizza.html',
    pizzas: 'pizza.html',
    burger: 'Burger.html',
    burgers: 'Burger.html',
    'mo-burger': 'Burger.html',
    momos: 'momos.html',
    'chicken tenders': 'tenders.html',
    tenders: 'tenders.html',
    nuggets: 'tenders.html',
    'coastal tenders': 'tenders.html',
    hotdog: 'hotdog.html',
    'hot dog': 'hotdog.html',
    'french fries': 'french fries.html',
    fries: 'french fries.html',
    snacks: 'snacks.html',
    dessert: 'dessert.html',
    desserts: 'dessert.html',
    waffle: 'dessert.html',
    waffles: 'dessert.html',
    sundae: 'dessert.html',
    beverages: 'Bevarages.html',
    beverage: 'Bevarages.html',
    'cold coffee': 'Bevarages.html',
    'milk shake': 'Bevarages.html',
    mocktail: 'Bevarages.html'
  };

  function clean(text) {
    return (text || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function routeForText(text) {
    const t = clean(text);
    if (routes[t]) return routes[t];
    for (const key of Object.keys(routes)) {
      if (t === key || t.includes(key)) return routes[key];
    }
    return null;
  }

  document.addEventListener('click', function (event) {
    const el = event.target.closest('a,button,[role="button"],.cursor-pointer,[onclick]');
    if (!el) return;

    const href = el.getAttribute('href');
    const dataPath = clean(el.getAttribute('data-path'));
    const label = clean(el.textContent);

    // Repair navigation links even when a generated page contains an old/incorrect href.
    const navRoute = routeForText(dataPath);
    if (navRoute && (el.closest('nav') || dataPath)) {
      event.preventDefault();
      window.location.href = navRoute;
      return;
    }

    // Repair menu/category cards and buttons by their visible label.
    const menuRoute = routeForText(label);
    const looksLikeCategory = /pizza|burger|momo|tender|nugget|coastal|hot ?dog|french fries|fries|snack|dessert|waffle|sundae|beverage|cold coffee|milk shake|mocktail/i.test(label);
    if (menuRoute && looksLikeCategory && (!href || href === '#' || href.startsWith('#'))) {
      event.preventDefault();
      window.location.href = menuRoute;
    }
  }, true);
})();
