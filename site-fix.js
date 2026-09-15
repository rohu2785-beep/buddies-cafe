(function () {
  'use strict';

  if (!document.querySelector('link[data-buddies-common-css]')) {
    const link = document.createElement('link'); link.rel='stylesheet'; link.href='common.css?v=4'; link.dataset.buddiesCommonCss='true'; document.head.appendChild(link);
  }
  const routes={home:'index.html','about us':'about_page.html',about:'about_page.html',menu:'menu_page.html',combos:'combos_page.html',review:'reviews_page.html',reviews:'reviews_page.html',contact:'contact_page.html',pizza:'pizza.html',pizzas:'pizza.html',burger:'Burger.html',burgers:'Burger.html','mo-burger':'Burger.html',momos:'momos.html','chicken tenders':'tenders.html',tenders:'tenders.html',nuggets:'tenders.html','coastal tenders':'tenders.html',hotdog:'hotdog.html','hot dog':'hotdog.html','french fries':'french fries.html',fries:'french fries.html',snacks:'snacks.html',dessert:'dessert.html',desserts:'dessert.html',waffle:'dessert.html',waffles:'dessert.html',sundae:'dessert.html',beverages:'Bevarages.html',beverage:'Bevarages.html','cold coffee':'Bevarages.html','milk shake':'Bevarages.html',mocktail:'Bevarages.html'};
  const wanted=[['Home','home'],['About Us','about us'],['Menu','menu'],['Combos','combos'],['Review','review'],['Contact','contact']];
  const clean=t=>(t||'').replace(/\s+/g,' ').trim().toLowerCase();

  function fixNavigation(){
    const navs=Array.from(document.querySelectorAll('header nav,body>nav,.nav'));
    if(!navs.length)return;
    const nav=document.querySelector('header nav')||navs[0];
    navs.forEach(n=>{if(n!==nav)n.remove()});
    const old=Array.from(nav.querySelectorAll('a'));
    nav.innerHTML='';
    wanted.forEach(([label,key])=>{
      let a=old.find(x=>{const t=clean(x.textContent);return t===clean(label)||(key==='review'&&t==='reviews')||(key==='about us'&&t==='about')});
      if(!a)a=document.createElement('a');
      a.textContent=label;a.href=routes[key];a.removeAttribute('data-path');a.removeAttribute('aria-current');
      nav.appendChild(a);
    });
    const current=clean(document.title);
    nav.querySelectorAll('a').forEach(a=>{if(current.includes(clean(a.textContent))||((clean(a.textContent)==='review')&&current.includes('review')))a.setAttribute('aria-current','page')});
  }

  function fixHome(){
    if(!/index\.html?$/.test(location.pathname)&&location.pathname!=='/'&&!location.pathname.endsWith('/buddies-cafe/'))return;
    document.querySelectorAll('a').forEach(a=>{if(clean(a.textContent)==='explore full menu')a.href=routes.menu;if(clean(a.textContent).includes('book a gaming table')){a.textContent='Explore Gaming';a.href='#gaming-lounge'}});
    const cats=[['Pizza',routes.pizza],['Burgers & Mo-Burgers',routes.burger],['Chicken & Tenders',routes.tenders],['Fried Momos',routes.momos],['Loaded French Fries',routes['french fries']],['Sundaes & Waffles',routes.dessert],['Cold Brews, Shakes & Mocktails',routes.beverages]];
    document.querySelectorAll('#menu-teaser .group').forEach(card=>{const h=card.querySelector('h3');if(!h)return;const x=cats.find(e=>clean(e[0])===clean(h.textContent));if(x){card.style.cursor='pointer';card.dataset.route=x[1]}});
  }
  document.addEventListener('DOMContentLoaded',()=>{fixNavigation();fixHome()});
  document.addEventListener('click',e=>{const el=e.target.closest('a,button,[role="button"],.cursor-pointer,[onclick],#menu-teaser .group');if(!el)return;if(el.closest('nav')){const r=routes[clean(el.textContent)];if(r){e.preventDefault();e.stopImmediatePropagation();location.assign(r);return}}if(el.matches('#menu-teaser .group')&&el.dataset.route){e.preventDefault();location.assign(el.dataset.route)}},true);
})();
