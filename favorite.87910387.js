var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in s){var n=s[e];delete s[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},e.parcelRequired7c6=n),n("6aCLh"),n("J9Bl9"),n("kuWPD"),n("3lP9e"),n("8QvHW"),n("iIJoo");var a=n("irLYq"),o=n("i37YJ"),i=n("7B1mV");const c=document.querySelector(".gallery-container");!function(){i.spinner.spin(document.body);try{const e=localStorage.getItem("favourites"),t=JSON.parse(e);if(null===t)return void i.spinner.stop();0===t.length?(i.spinner.stop(),o.Report.info("You have no favorite news yet!")):(!function(){const e=(0,a.getStorageList)("favourites").reduce(((e,t)=>e+=`<div class="news-card" news-id="${t.id}">\n      <div class="news-card__img">\n        <p class="news-card__theme">${t.category}</p>\n        <img\n          class="news-card__item"\n          src="${t.img}"\n          alt="${t.alt?t.alt:"photo"}"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n        <button id ='${t.id}' class="mybtn label-favorite">Add to favorite</button>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">${t.title.limit(50,{ending:""})}</h2>\n      <p class="news-card__info-text">${t.descr.limit(180)}</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">${t.dateArticle}</p>\n        <a class="news-card__more" href="${t.link}" id="${t.id}" target="_blank" rel="noreferrer noopener"}>Read more</a>\n      </div>\n    </div>`),"");c.insertAdjacentHTML("beforeend",e)}(),i.spinner.stop())}catch(e){console.log(e)}}(),(0,a.addClassesForCoincidencesMarkupAndStoragePages)(),c.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&e.target.parentNode.parentNode.parentNode.remove()})),n("3F1U7");const r={checkbox:document.getElementById("theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun"),iconMoon:document.querySelector(".icon-moon"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon")},d=localStorage.getItem("theme");d&&document.body.classList.add(d+"-theme-site");"true"===localStorage.getItem("theme-checkbox-state")&&(r.checkbox.checked=!0,document.body.classList.add("dark-theme-site"),r.lightLabel.classList.add("light-theme-site"),r.darkLabel.classList.add("dark-theme-site"),r.iconSun.classList.add("dark-theme-site"),r.iconMoon.classList.add("dark-theme-site"),r.searchInput.classList.add("dark-theme-site"),r.queryBtn.classList.add("dark-theme-site"),r.mobileMenu.classList.add("dark-theme-site")),r.checkbox.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),r.lightLabel.classList.toggle("light-theme-site"),r.darkLabel.classList.toggle("dark-theme-site"),r.iconSun.classList.toggle("dark-theme-site"),r.iconMoon.classList.toggle("dark-theme-site"),r.searchInput.classList.toggle("dark-theme-site"),r.queryBtn.classList.toggle("dark-theme-site"),r.mobileMenu.classList.toggle("dark-theme-site"),function(){const e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme",e);const t=r.checkbox.checked;localStorage.setItem("theme-checkbox-state",t)}()}));const l={checkboxMobile:document.getElementById("mobile-theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun-mob"),iconMoon:document.querySelector(".icon-moon-mob"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon"),menuIcon:document.querySelector(".menu-toggle__icons"),menuCross:document.querySelector(".menu-toggle__icons-cross")},m=localStorage.getItem("theme-mobile");m&&document.body.classList.add(m+"-theme-site");"true"===localStorage.getItem("theme-checkbox-state-mobile")&&(l.checkboxMobile.checked=!0,document.body.classList.add("dark-theme-site"),l.lightLabel.classList.add("light-theme-site"),l.darkLabel.classList.add("dark-theme-site"),l.iconSun.classList.add("dark-theme-site"),l.iconMoon.classList.add("dark-theme-site"),l.searchInput.classList.add("dark-theme-site"),l.queryBtn.classList.add("dark-theme-site"),l.mobileMenu.classList.add("dark-theme-site"),l.menuIcon.classList.add("dark-theme-site"),l.menuCross.classList.add("dark-theme-site")),l.checkboxMobile.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),l.lightLabel.classList.toggle("light-theme-site"),l.darkLabel.classList.toggle("dark-theme-site"),l.iconSun.classList.toggle("dark-theme-site"),l.iconMoon.classList.toggle("dark-theme-site"),l.searchInput.classList.toggle("dark-theme-site"),l.queryBtn.classList.toggle("dark-theme-site"),l.mobileMenu.classList.toggle("dark-theme-site"),l.menuIcon.classList.toggle("dark-theme-site"),l.menuCross.classList.toggle("dark-theme-site"),function(){const e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme-mobile",e);const t=l.checkboxMobile.checked;localStorage.setItem("theme-checkbox-state-mobile",t)}()}));a=n("irLYq");const u=document.getElementById("search-form"),h=document.querySelector(".gallery-container");u.addEventListener("submit",(function(e){e.preventDefault(),(0,a.hideModal)();const t=e.target.elements.searchQuery.value,s=(0,a.getStorageList)("favourites").filter((e=>e.descr.toLowerCase().includes(t.toLowerCase().trim())||e.category.toLowerCase().includes(t.toLowerCase().trim())||e.title.toLowerCase().includes(t.toLowerCase().trim())));s.length>0?(!function(e){const t=e.reduce(((e,t)=>e+=`<div class="news-card" news-id="${t.id}">\n      <div class="news-card__img">\n        <p class="news-card__theme">${t.category}</p>\n        <img\n          class="news-card__item"\n          src="${t.img}"\n          alt="${t.alt?t.alt:"photo"}"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n        <button id ='${t.id}' class="mybtn label-favorite">Add to favorite</button>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">${t.title.limit(50,{ending:""})}</h2>\n      <p class="news-card__info-text">${t.descr.limit(120)}</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">${t.dateArticle}</p>\n        <a class="news-card__more" href="${t.link}" id="${t.id}" target="_blank" rel="noreferrer noopener"}>Read more</a>\n      </div>\n    </div>`),"");h.innerHTML=t}(s),(0,a.addClassesForCoincidencesMarkupAndStoragePages)()):(0,a.showModal)();u.reset()}));
//# sourceMappingURL=favorite.87910387.js.map
