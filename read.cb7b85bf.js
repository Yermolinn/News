!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=s),s("kzAJu"),s("9QlH3"),s("egKc1"),s("lkA0f"),s("2WEMS"),s("eGpmk");var r=s("8nrFW"),c=s("fivgP"),o=s("l4tBk"),i=s("f6M8X"),l=document.getElementById("ul-gallery"),d=document.querySelector(".spinner-container");!function(){o.spinner.spin(document.body);try{var t=localStorage.getItem("read more"),n=JSON.parse(t);if(null===n)return void o.spinner.stop();0===n.length?(o.spinner.stop(),c.Report.info("There are no news You have read")):(!function(t){var n="",a=t.map((function(e){return e.date})),s=e(r)(a).sort((function(e,t){return t-e})).map((function(e){var t=new Date(e);return"".concat(String(t.getDate()).padStart(2,0),"/").concat(String(t.getMonth()+1).padStart(2,0),"/").concat(String(t.getFullYear()))})).filter((function(e,t,n){return n.indexOf(e)===t})),c=t.reduce((function(e,t){var n={},a=new Date(t.date);return n.date="".concat(String(a.getDate()).padStart(2,0),"/").concat(String(a.getMonth()+1).padStart(2,0),"/").concat(String(a.getFullYear())),n.img=t.img,n.descr=t.descr,n.title=t.title,n.link=t.link,n.alt=t.alt,n.category=t.category,n.id=t.id,n.dateArticle=t.dateArticle,e.push(n),e}),[]);o.spinner.spin(d);var i=!0,u=!1,m=void 0;try{for(var h,g=function(e,t){var a=t.value,s='<li>\n            <div class="date-wrap">\n                <p class="cards-date">'.concat(a,'\n                   <svg class="arrow-read" width="15" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">\n                     <path d="M1.762 9 0 7.287 7.5 0 15 7.287 13.238 9 7.5 3.437 1.763 9Z" fill=""/>\n                   </svg>\n                   <svg class="arrow-read visually-hidden" width="15" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">\n                     <path d="M1.762 0 0 1.713 7.5 9 15 1.713 13.238 0 7.5 5.563 1.763 0Z" fill=""/>\n                   </svg>\n                </p>\n                <div class="clicker"></div>\n            </div>\n            <div class="news-item">\n                <div class="news-wrap">'),r=c.filter((function(e){return e.date===a})).map((function(e){return'<div class="news-card" news-id="'.concat(e.id,'">\n      <div class="news-card__img">\n        <p class="news-card__theme">').concat(e.category,'</p>\n        <img\n          class="news-card__item"\n          src="').concat(e.img,'"\n          alt="').concat(e.alt?e.alt:"photo",'"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n        <button id =\'').concat(e.id,'\' class="mybtn label-favorite">Add to favorite</button>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">').concat(e.title.limit(50,{ending:""}),'</h2>\n      <p class="news-card__info-text">').concat(e.descr.limit(120),'</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">').concat(e.dateArticle,'</p>\n        <a class="news-card__more" href="').concat(e.link,'" id="').concat(e.id,'" target="_blank" rel="noreferrer noopener">Read more</a>\n      </div>\n    </div>')}));n+=s+r.join("")+"</div></div></li>"},f=s[Symbol.iterator]();!(i=(h=f.next()).done);i=!0)g(f,h)}catch(e){u=!0,m=e}finally{try{i||null==f.return||f.return()}finally{if(u)throw m}}l.innerHTML=n,o.spinner.stop(),document.querySelectorAll(".news-item").forEach((function(e){return e.style.maxHeight=e.scrollHeight+"px"})),document.querySelectorAll(".cards-date").forEach((function(e){return e.addEventListener("click",(function(){var t=e.children,n=!0,a=!1,s=void 0;try{for(var r,c=t[Symbol.iterator]();!(n=(r=c.next()).done);n=!0){r.value.classList.toggle("visually-hidden")}}catch(e){a=!0,s=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw s}}var o=e.parentNode.nextElementSibling;"0px"!==o.style.maxHeight?o.style.maxHeight="0px":o.style.maxHeight=o.scrollHeight+"px"}))}))}(n),o.spinner.stop())}catch(e){console.error(e),o.spinner.stop()}}(),(0,i.addClassesForCoincidencesMarkupAndStoragePages)(),s("4tFZ4");var u={checkbox:document.getElementById("theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun"),iconMoon:document.querySelector(".icon-moon"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon")},m=localStorage.getItem("theme");m&&document.body.classList.add(m+"-theme-site"),"true"===localStorage.getItem("theme-checkbox-state")&&(u.checkbox.checked=!0,document.body.classList.add("dark-theme-site"),u.lightLabel.classList.add("light-theme-site"),u.darkLabel.classList.add("dark-theme-site"),u.iconSun.classList.add("dark-theme-site"),u.iconMoon.classList.add("dark-theme-site"),u.searchInput.classList.add("dark-theme-site"),u.queryBtn.classList.add("dark-theme-site"),u.mobileMenu.classList.add("dark-theme-site")),u.checkbox.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),u.lightLabel.classList.toggle("light-theme-site"),u.darkLabel.classList.toggle("dark-theme-site"),u.iconSun.classList.toggle("dark-theme-site"),u.iconMoon.classList.toggle("dark-theme-site"),u.searchInput.classList.toggle("dark-theme-site"),u.queryBtn.classList.toggle("dark-theme-site"),u.mobileMenu.classList.toggle("dark-theme-site"),function(){var e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme",e);var t=u.checkbox.checked;localStorage.setItem("theme-checkbox-state",t)}()}));var h={checkboxMobile:document.getElementById("mobile-theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun-mob"),iconMoon:document.querySelector(".icon-moon-mob"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon"),menuIcon:document.querySelector(".menu-toggle__icons"),menuCross:document.querySelector(".menu-toggle__icons-cross")},g=localStorage.getItem("theme-mobile");g&&document.body.classList.add(g+"-theme-site"),"true"===localStorage.getItem("theme-checkbox-state-mobile")&&(h.checkboxMobile.checked=!0,document.body.classList.add("dark-theme-site"),h.lightLabel.classList.add("light-theme-site"),h.darkLabel.classList.add("dark-theme-site"),h.iconSun.classList.add("dark-theme-site"),h.iconMoon.classList.add("dark-theme-site"),h.searchInput.classList.add("dark-theme-site"),h.queryBtn.classList.add("dark-theme-site"),h.mobileMenu.classList.add("dark-theme-site"),h.menuIcon.classList.add("dark-theme-site"),h.menuCross.classList.add("dark-theme-site")),h.checkboxMobile.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),h.lightLabel.classList.toggle("light-theme-site"),h.darkLabel.classList.toggle("dark-theme-site"),h.searchInput.classList.toggle("dark-theme-site"),h.iconSun.classList.toggle("dark-theme-site"),h.iconMoon.classList.toggle("dark-theme-site"),h.queryBtn.classList.toggle("dark-theme-site"),h.mobileMenu.classList.toggle("dark-theme-site"),h.menuIcon.classList.toggle("dark-theme-site"),h.menuCross.classList.toggle("dark-theme-site"),function(){var e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme-mobile",e);var t=h.checkboxMobile.checked;localStorage.setItem("theme-checkbox-state-mobile",t)}()}));i=s("f6M8X");var f=document.getElementById("search-form"),p=document.querySelector(".gallery-container");f.addEventListener("submit",(function(e){e.preventDefault(),(0,i.hideModal)();var t=e.target.elements.searchQuery.value,n=(0,i.getStorageList)("read more").filter((function(e){return e.descr.toLowerCase().includes(t.toLowerCase().trim())||e.category.toLowerCase().includes(t.toLowerCase().trim())||e.title.toLowerCase().includes(t.toLowerCase().trim())}));n.length>0?(!function(e){var t=e.reduce((function(e,t){return e+='<div class="news-card" news-id="'.concat(t.id,'">\n      <div class="news-card__img">\n        <p class="news-card__theme">').concat(t.category,'</p>\n        <img\n          class="news-card__item"\n          src="').concat(t.img,'"\n          alt="').concat(t.alt?t.alt:"photo",'"\n          loading="lazy"\n          width="395"\n        />\n        <div class="news-card__favorite">\n        <button id =\'').concat(t.id,'\' class="mybtn label-favorite">Add to favorite</button>\n        </div>\n      </div>\n      <h2 class="news-card__info-title">').concat(t.title.limit(50,{ending:""}),'</h2>\n      <p class="news-card__info-text">').concat(t.descr.limit(120),'</p>\n      <div class="news-card__additional">\n        <p class="news-card__date">').concat(t.dateArticle,'</p>\n        <a class="news-card__more" href="').concat(t.link,'" id="').concat(t.id,'" target="_blank" rel="noreferrer noopener"}>Read more</a>\n      </div>\n    </div>')}),"");p.innerHTML=t,p.classList.add("read-search")}(n),(0,i.addClassesForCoincidencesMarkupAndStoragePages)()):(0,i.showModal)();f.reset()}))}();
//# sourceMappingURL=read.cb7b85bf.js.map
