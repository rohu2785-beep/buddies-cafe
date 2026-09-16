(function () {
  'use strict';

  const BASE = 'https://rohu2785-beep.github.io/buddies-cafe/';
  const routes = {
    home: 'index.html', 'about us': 'about_page.html', about: 'about_page.html',
    menu: 'menu_page.html', combos: 'combos_page.html', review: 'reviews_page.html', reviews: 'reviews_page.html',
    contact: 'contact_page.html', pizza: 'pizza.html', pizzas: 'pizza.html',
    burger: 'Burger.html', burgers: 'Burger.html', 'mo-burger': 'Burger.html',
    momos: 'momos.html', 'chicken tenders': 'tenders.html', tenders: 'tenders.html', nuggets: 'tenders.html',
    'coastal tenders': 'tenders.html', hotdog: 'hotdog.html', 'hot dog': 'hotdog.html',
    'french fries': 'french_fries.html', fries: 'french_fries.html', snacks: 'snacks.html',
    dessert: 'dessert.html', desserts: 'dessert.html', waffle: 'dessert.html', waffles: 'dessert.html', sundae: 'dessert.html',
    beverages: 'Bevarages.html', beverage: 'Bevarages.html', 'cold coffee': 'Bevarages.html',
    'milk shake': 'Bevarages.html', 'milkshake': 'Bevarages.html', mocktail: 'Bevarages.html'
  };
  const wanted = [['Home','home'],['About Us','about us'],['Menu','menu'],['Combos','combos'],['Review','review'],['Contact','contact']];
  const seo = {
    'index.html': ['Buddies Cafe Virudhunagar | Gaming Cafe, Pizza, Burger & Fast Food','Buddies Cafe in Virudhunagar is a gaming cafe serving pizza, burgers, momos, tenders, fries, desserts, milkshakes and mocktails. Eat. Play. Repeat.','Buddies Cafe Virudhunagar, gaming cafe Virudhunagar, cafe in Virudhunagar, fast food Virudhunagar, pizza burger cafe, gaming cafe Tamil Nadu'],
    'about_page.html': ['About Buddies Cafe Virudhunagar | Gaming & Food Cafe','Learn about Buddies Cafe, a gaming cafe in Virudhunagar combining delicious food, gaming and a fun hangout experience. Eat. Play. Repeat.','about Buddies Cafe, Buddies Cafe Virudhunagar, gaming cafe Virudhunagar, cafe story Virudhunagar, gaming and food cafe'],
    'menu_page.html': ['Buddies Cafe Menu | Pizza, Burger, Momos & Fast Food','Explore the Buddies Cafe menu with pizza, burgers, chicken tenders, momos, fries, hot dogs, snacks, desserts, milkshakes and mocktails.','Buddies Cafe menu, cafe menu Virudhunagar, pizza Virudhunagar, burger Virudhunagar, momos Virudhunagar, fast food menu, gaming cafe food'],
    'combos_page.html': ['Buddies Cafe Combos | Food Combos in Virudhunagar','Check out Buddies Cafe food combos in Virudhunagar with delicious burgers, pizza, snacks and refreshing beverages for a fun gaming cafe experience.','Buddies Cafe combos, food combos Virudhunagar, cafe combos, burger combo Virudhunagar, pizza combo Virudhunagar, gaming cafe combos'],
    'reviews_page.html': ['Buddies Cafe Reviews | Customer Reviews in Virudhunagar','Read customer reviews and experiences from Buddies Cafe in Virudhunagar. Discover why customers enjoy the food, gaming and cafe atmosphere.','Buddies Cafe reviews, Buddies Cafe Virudhunagar reviews, best cafe reviews Virudhunagar, gaming cafe reviews, cafe customer reviews'],
    'contact_page.html': ['Contact Buddies Cafe Virudhunagar | Location & Contact','Contact Buddies Cafe in Virudhunagar, Tamil Nadu. Find our location and contact details for food, gaming and cafe enquiries.','Buddies Cafe contact, Buddies Cafe Virudhunagar contact, cafe near Virudhunagar, gaming cafe contact, Buddies Cafe location'],
    'pizza.html': ['Pizza in Virudhunagar | Buddies Cafe Pizza Menu','Enjoy delicious pizza at Buddies Cafe in Virudhunagar. Explore our pizza menu and enjoy great food with a fun gaming cafe experience.','pizza Virudhunagar, best pizza Virudhunagar, pizza cafe Virudhunagar, Buddies Cafe pizza, pizza near Virudhunagar'],
    'Burger.html': ['Burgers in Virudhunagar | Buddies Cafe Burger Menu','Try delicious burgers and Mo-Burgers at Buddies Cafe in Virudhunagar. Explore our burger menu and enjoy your food with a gaming cafe experience.','burger Virudhunagar, best burger Virudhunagar, burger cafe Virudhunagar, Mo-Burger Virudhunagar, Buddies Cafe burger'],
    'momos.html': ['Momos in Virudhunagar | Buddies Cafe Momos','Enjoy delicious momos at Buddies Cafe in Virudhunagar. Discover our momo options and enjoy a fun food and gaming cafe experience.','momos Virudhunagar, best momos Virudhunagar, momo cafe Virudhunagar, fried momos Virudhunagar, Buddies Cafe momos'],
    'tenders.html': ['Chicken Tenders in Virudhunagar | Buddies Cafe','Enjoy chicken tenders, nuggets and coastal tenders at Buddies Cafe in Virudhunagar. Explore tasty snacks for your gaming cafe visit.','chicken tenders Virudhunagar, chicken snacks Virudhunagar, nuggets Virudhunagar, coastal tenders, Buddies Cafe tenders'],
    'french_fries.html': ['French Fries in Virudhunagar | Buddies Cafe','Enjoy crispy French fries at Buddies Cafe in Virudhunagar. Perfect snacks to enjoy while gaming, hanging out and spending time with friends.','French fries Virudhunagar, fries Virudhunagar, best fries Virudhunagar, cafe fries, Buddies Cafe fries'],
    'snacks.html': ['Snacks in Virudhunagar | Buddies Cafe Snacks Menu','Explore tasty snacks at Buddies Cafe in Virudhunagar including cutlet, spring roll, cheeseball and cheese bun.','snacks Virudhunagar, cafe snacks Virudhunagar, cutlet Virudhunagar, spring roll Virudhunagar, cheeseball, cheese bun, Buddies Cafe snacks'],
    'hotdog.html': ['Hot Dog in Virudhunagar | Buddies Cafe','Enjoy tasty hot dogs at Buddies Cafe in Virudhunagar. Perfect for food lovers looking for a fun gaming cafe experience.','hot dog Virudhunagar, hotdog Virudhunagar, hot dog cafe, fast food Virudhunagar, Buddies Cafe hot dog'],
    'dessert.html': ['Desserts in Virudhunagar | Waffles & Sundaes | Buddies Cafe','Enjoy delicious waffles and sundaes at Buddies Cafe in Virudhunagar. A perfect dessert stop after food and gaming with friends.','desserts Virudhunagar, waffles Virudhunagar, sundae Virudhunagar, waffle cafe Virudhunagar, dessert cafe Virudhunagar, Buddies Cafe desserts'],
    'Bevarages.html': ['Cold Coffee, Milkshakes & Mocktails | Buddies Cafe','Refresh yourself with cold coffee, milkshakes and mocktails at Buddies Cafe in Virudhunagar. Enjoy refreshing drinks with food and gaming.','cold coffee Virudhunagar, milkshake Virudhunagar, mocktail Virudhunagar, beverages Virudhunagar, cold drinks cafe, Buddies Cafe beverages']
  };
  const clean = t => (t || '').replace(/\s+/g, ' ').trim().toLowerCase(); 
  const fileName = () => (location.pathname.split('/').pop() || 'index.html').toLowerCase() === '' ? 'index.html' : (location.pathname.split('/').pop() || 'index.html');

  function removeZapierChatbot() {
    document.querySelectorAll('zapier-interfaces-chatbot-embed').forEach(el => el.remove());
    document.querySelectorAll('script[src*="interfaces.zapier.com"]').forEach(el => el.remove());
  }

  function addMeta(name, content) {
    let el = document.querySelector('meta[name="' + name + '"]');
    if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
    el.content = content;
  }
  function fixSEO() {
    const key = fileName();
    const data = seo[key] || seo['index.html'];
    document.title = data[0];
    addMeta('description', data[1]);
    addMeta('keywords', data[2]);
    addMeta('robots', 'index, follow');
    addMeta('author', 'Buddies Cafe');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = BASE + (key === 'index.html' ? '' : key);
    let og = document.querySelector('meta[property="og:title"]');
    if (!og) { og = document.createElement('meta'); og.setAttribute('property','og:title'); document.head.appendChild(og); }
    og.content = data[0];
    let ogd = document.querySelector('meta[property="og:description"]');
    if (!ogd) { ogd = document.createElement('meta'); ogd.setAttribute('property','og:description'); document.head.appendChild(ogd); }
    ogd.content = data[1];
    document.querySelectorAll('img').forEach((img, i) => { if (!img.getAttribute('alt')) img.setAttribute('alt', i === 0 ? 'Buddies Cafe' : 'Buddies Cafe food and gaming cafe'); });
  }

  function loadCommonCSS() {
    if (!document.querySelector('link[data-buddies-common-css]')) {
      const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'common.css?v=5'; link.dataset.buddiesCommonCss = 'true'; document.head.appendChild(link);
    }
  }

  function fixNavigation() {
    let nav = document.querySelector('header nav');
    if (!nav) {
      const old = document.querySelector('body>nav, .nav');
      if (old) { nav = old; nav.removeAttribute('class'); }
      else {
        const header = document.createElement('header'); header.innerHTML = '<div class="bc-nav-wrap"><a class="bc-brand" href="index.html"><span class="bc-brand-name">Buddies Cafe</span></a><nav></nav></div>';
        document.body.prepend(header); nav = header.querySelector('nav');
      }
    }
    const oldLinks = Array.from(nav.querySelectorAll('a'));
    nav.innerHTML = '';
    wanted.forEach(([label, key]) => {
      let a = oldLinks.find(x => clean(x.textContent) === clean(label) || (key === 'review' && clean(x.textContent) === 'reviews') || (key === 'about us' && clean(x.textContent) === 'about')) || document.createElement('a');
      a.textContent = label; a.href = routes[key]; a.removeAttribute('data-path'); a.removeAttribute('aria-current'); nav.appendChild(a);
    });
    const current = fileName();
    nav.querySelectorAll('a').forEach(a => { if (a.getAttribute('href') === current || (current === 'index.html' && a.getAttribute('href') === 'index.html')) a.setAttribute('aria-current','page'); });
    let header = nav.closest('header');
    if (header && !header.querySelector('.bc-mobile-toggle')) {
      const btn = document.createElement('button'); btn.className='bc-mobile-toggle'; btn.type='button'; btn.setAttribute('aria-label','Open menu'); btn.textContent='☰';
      header.querySelector('.bc-nav-wrap')?.appendChild(btn) || header.appendChild(btn);
      btn.addEventListener('click', () => { nav.classList.toggle('bc-mobile-open'); btn.textContent = nav.classList.contains('bc-mobile-open') ? '✕' : '☰'; });
    }
  }

  function fixLinks() {
    document.querySelectorAll('a').forEach(a => {
      const text = clean(a.textContent);
      if (text === 'explore full menu') a.href = routes.menu;
      if (text.includes('book a gaming table')) { a.textContent = 'Explore Gaming'; a.href = '#gaming-lounge'; }
      if (text === 'read reviews' || text === 'reviews' || text === 'review') a.href = routes.review;
      if (text.includes('about us')) a.href = routes['about us'];
      if (text === 'combos') a.href = routes.combos;
      if (text === 'contact') a.href = routes.contact;
      if (text === 'menu') a.href = routes.menu;
    });
    const categoryMap = [
      ['Pizza', routes.pizza], ['Burgers & Mo-Burgers', routes.burger], ['Chicken & Tenders', routes.tenders],
      ['Fried Momos', routes.momos], ['Loaded French Fries', routes['french fries']], ['Sundaes & Waffles', routes.dessert],
      ['Cold Brews, Shakes & Mocktails', routes.beverages]
    ];
    document.querySelectorAll('#menu-teaser .group, [data-category]').forEach(card => {
      const h = card.querySelector('h3,h2,[data-category]'); if (!h) return;
      const found = categoryMap.find(x => clean(x[0]) === clean(h.textContent));
      if (found) { card.style.cursor='pointer'; card.addEventListener('click', () => location.assign(found[1])); }
    });
  }

  function fixButtons() {
    document.querySelectorAll('a,button').forEach(el => {
      if (el.closest('nav')) return;
      const t = clean(el.textContent);
      if (/order now|explore full menu|explore menu|read reviews|call us|whatsapp|order online/.test(t)) el.classList.add('bc-primary-btn');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    removeZapierChatbot();
    loadCommonCSS(); fixSEO(); fixNavigation(); fixLinks(); fixButtons();
  });
})();
