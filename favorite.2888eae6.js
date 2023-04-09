!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var n={},i={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequired7c6=a),a.register("9QlH3",(function(e,t){var r,n,i,a;r=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),a=function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!e),r.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)},n.addEventListener("click",a),i.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(r.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})),a.register("fivgP",(function(t,r){var n,i;n=void 0!==e?e:"undefined"!=typeof window?window:t.exports,i=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,r="Success",n="Failure",i="Warning",a="Info",o={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,r=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],r++);for(var n=function(r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t&&"[object Object]"===Object.prototype.toString.call(r[n])?e[n]=c(e[n],r[n]):e[n]=r[n])};r<arguments.length;r++)n(arguments[r]);return e},l=function(t){var r=e.document.createElement("div");return r.innerHTML=t,r.textContent||r.innerText||""},p=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},f=function(s,p,f,h,v,m){if(!u("body"))return!1;t||d.Report.init({});var g={};if("object"==typeof v&&!Array.isArray(v)||"object"==typeof m&&!Array.isArray(m)){var y={};"object"==typeof v?y=v:"object"==typeof m&&(y=m),g=c(!0,t,{}),t=c(!0,t,y)}var b=t[s.toLocaleLowerCase("en")];"string"!=typeof p&&(p="Notiflix "+s),"string"!=typeof f&&(s===r?f='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':s===n?f='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':s===i?f='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':s===a&&(f='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof h&&(h="Okay"),t.plainText&&(p=l(p),f=l(f),h=l(h)),t.plainText||(p.length>t.titleMaxLength&&(p="Possible HTML Tags Error",f='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',h="Okay"),f.length>t.messageMaxLength&&(p="Possible HTML Tags Error",f='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',h="Okay"),h.length>t.buttonMaxLength&&(p="Possible HTML Tags Error",f='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',h="Okay")),p.length>t.titleMaxLength&&(p=p.substring(0,t.titleMaxLength)+"..."),f.length>t.messageMaxLength&&(f=f.substring(0,t.messageMaxLength)+"..."),h.length>t.buttonMaxLength&&(h=h.substring(0,t.buttonMaxLength)+"..."),t.cssAnimation||(t.cssAnimationDuration=0);var x=e.document.createElement("div");x.id=o.ID,x.className=t.className,x.style.zIndex=t.zindex,x.style.borderRadius=t.borderRadius,x.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.display="flex",x.style.flexWrap="wrap",x.style.flexDirection="column",x.style.alignItems="center",x.style.justifyContent="center";var k="",w=!0===t.backOverlayClickToClose;t.backOverlay&&(k='<div class="'+t.className+"-overlay"+(t.cssAnimation?" nx-with-animation":"")+(w?" nx-report-click-to-close":"")+'" style="background:'+(b.backOverlayColor||t.backOverlayColor)+";animation-duration:"+t.cssAnimationDuration+'ms;"></div>');var _,I,E="";if(s===r?(_=t.svgSize,I=b.svgColor,_||(_="110px"),I||(I="#32c682"),E='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+_+'" height="'+_+'" fill="'+I+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):s===n?E=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(t.svgSize,b.svgColor):s===i?E=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(t.svgSize,b.svgColor):s===a&&(E=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(t.svgSize,b.svgColor)),x.innerHTML=k+'<div class="'+t.className+"-content"+(t.cssAnimation?" nx-with-animation ":"")+" nx-"+t.cssAnimationStyle+'" style="width:'+t.width+"; background:"+t.backgroundColor+"; animation-duration:"+t.cssAnimationDuration+'ms;"><div style="width:'+t.svgSize+"; height:"+t.svgSize+';" class="'+t.className+'-icon">'+E+'</div><h5 class="'+t.className+'-title" style="font-weight:500; font-size:'+t.titleFontSize+"; color:"+b.titleColor+';">'+p+'</h5><p class="'+t.className+'-message" style="font-size:'+t.messageFontSize+"; color:"+b.messageColor+';">'+f+'</p><a id="NXReportButton" class="'+t.className+'-button" style="font-weight:500; font-size:'+t.buttonFontSize+"; background:"+b.buttonBackground+"; color:"+b.buttonColor+';">'+h+"</a></div>",!e.document.getElementById(x.id)){e.document.body.appendChild(x);var T=function(){var r=e.document.getElementById(x.id);r.classList.add("nx-remove");var n=setTimeout((function(){null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),t.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof v&&v(),T()})),k&&w&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){T()}))}t=c(!0,t,g)},d={Report:{init:function(r){t=c(!0,o,r),function(t,r){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(r)){var n=e.document.createElement("style");n.id=r,n.innerHTML=t(),e.document.head.appendChild(n)}}(p,"NotiflixReportInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Report module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,n,i,a){f(r,e,t,n,i,a)},failure:function(e,t,r,i,a){f(n,e,t,r,i,a)},warning:function(e,t,r,n,a){f(i,e,t,r,n,a)},info:function(e,t,r,n,i){f(a,e,t,r,n,i)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Report:d.Report}):{Report:d.Report}},"function"==typeof define&&define.amd?define([],(function(){return i(n)})):"object"==typeof t.exports?t.exports=i(n):n.Notiflix=i(n)})),a.register("l4tBk",(function(e,r){t(e.exports,"spinner",(function(){return n}));var n=new(0,a("b62ED").Spinner)({color:"#A8A8A8",position:"fixed",top:"50vh",left:"50vw"})})),a.register("b62ED",(function(e,r){t(e.exports,"Spinner",(function(){return a}),(function(e){return a=e}));var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},a=function(){function e(e){void 0===e&&(e={}),this.opts=n(n({},i),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),o(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var r=Math.round(t.corners*t.width*500)/1e3+"px",n="none";!0===t.shadow?n="0 2px 4px #000":"string"==typeof t.shadow&&(n=t.shadow);for(var i=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,r=[],n=0,i=e.split(",");n<i.length;n++){var a=i[n].match(t);if(null!==a){var o=+a[2],s=+a[5],u=a[4],c=a[7];0!==o||u||(u=c),0!==s||c||(c=u),u===c&&r.push({prefix:a[1]||"",x:o,y:s,xUnits:u,yUnits:c,end:a[8]})}}return r}(n),a=0;a<t.lines;a++){var c=~~(360/t.lines*a+t.rotate),l=o(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:s(t.fadeColor,a),borderRadius:r,transformOrigin:"left",transform:"rotate("+c+"deg) translateX("+t.radius+"px)"}),p=a*t.direction/t.lines/t.speed;p-=1/t.speed;var f=o(document.createElement("div"),{width:"100%",height:"100%",background:s(t.color,a),borderRadius:r,boxShadow:u(i,c),animation:1/t.speed+"s linear "+p+"s infinite "+t.animation});l.appendChild(f),e.appendChild(l)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function o(e,t){for(var r in t)e.style[r]=t[r];return e}function s(e,t){return"string"==typeof e?e:e[t%e.length]}function u(e,t){for(var r=[],n=0,i=e;n<i.length;n++){var a=i[n],o=c(a.x,a.y,t);r.push(a.prefix+o[0]+a.xUnits+" "+o[1]+a.yUnits+a.end)}return r.join(", ")}function c(e,t,r){var n=r*Math.PI/180,i=Math.sin(n),a=Math.cos(n);return[Math.round(1e3*(e*a+t*i))/1e3,Math.round(1e3*(-e*i+t*a))/1e3]}})),a.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){r(o,i,a,s,u,"next",e)}function u(e){r(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new R(n||[]);return a._invoke=function(e,t,r){var n=p;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw a;return N()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?h:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(O([])));k&&k!==r&&n.call(k,a)&&(b=k);var w=y.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function r(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,p=c.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(p).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:N}}function N(){return{value:t,done:!0}}return g.prototype=y,u(w,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},_(I.prototype),u(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new I(c(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(w),u(w,s,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("gQOBw",(function(e,r){t(e.exports,"getAuth",(function(){return a("k0X64").o})),t(e.exports,"onAuthStateChanged",(function(){return a("k0X64").w})),t(e.exports,"signInWithEmailAndPassword",(function(){return a("k0X64").a8})),t(e.exports,"signOut",(function(){return a("k0X64").z})),t(e.exports,"createUserWithEmailAndPassword",(function(){return a("k0X64").a7})),t(e.exports,"updateProfile",(function(){return a("k0X64").ah})),a("eMcUM")})),a.register("eMcUM",(function(e,r){t(e.exports,"createUserWithEmailAndPassword",(function(){return a("k0X64").a7})),t(e.exports,"getAuth",(function(){return a("k0X64").o})),t(e.exports,"onAuthStateChanged",(function(){return a("k0X64").w})),t(e.exports,"signInWithEmailAndPassword",(function(){return a("k0X64").a8})),t(e.exports,"signOut",(function(){return a("k0X64").z})),t(e.exports,"updateProfile",(function(){return a("k0X64").ah})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("k0X64")})),a.register("2xDiJ",(function(n,i){t(n.exports,"base64urlEncodeWithoutPadding",(function(){return g})),t(n.exports,"base64Decode",(function(){return y})),t(n.exports,"getDefaultEmulatorHost",(function(){return k})),t(n.exports,"getDefaultAppConfig",(function(){return w})),t(n.exports,"getExperimentalSetting",(function(){return _})),t(n.exports,"Deferred",(function(){return I})),t(n.exports,"getUA",(function(){return E})),t(n.exports,"isMobileCordova",(function(){return T})),t(n.exports,"isBrowserExtension",(function(){return S})),t(n.exports,"isReactNative",(function(){return R})),t(n.exports,"isIE",(function(){return O})),t(n.exports,"isIndexedDBAvailable",(function(){return N})),t(n.exports,"validateIndexedDBOpenable",(function(){return C})),t(n.exports,"FirebaseError",(function(){return A})),t(n.exports,"ErrorFactory",(function(){return P})),t(n.exports,"isEmpty",(function(){return L})),t(n.exports,"deepEqual",(function(){return U})),t(n.exports,"querystring",(function(){return z})),t(n.exports,"querystringDecode",(function(){return F})),t(n.exports,"extractQuerystring",(function(){return W})),t(n.exports,"createSubscribe",(function(){return B})),t(n.exports,"getModularInstance",(function(){return X}));var o=a("ds8z5"),s=a("8MBJY"),u=a("a2hTj"),c=a("eYQtU"),l=a("1t1Wn"),p=(a("8nrFW"),a("4c7YB")),f=a("2MbLg"),d=a("6qd2L"),h=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,p=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(f=64)),n.push(r[l],r[p],r[f],r[d])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new m;var c=a<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var p=s<<6&192|u;n.push(p)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},m=function(e){"use strict";r(c)(n,e);var t=r(f)(n);function n(){var e;return r(s)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",e}return n}(r(p)(Error)),g=function(e){return function(e){var t=h(e);return v.encodeByteArray(t,!0)}(e).replace(/\./g,"")},y=function(e){try{return v.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var b=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},x=function(){try{return b()||function(){if(void 0!==d&&void 0!==d.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&y(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},k=function(e){var t,r;return null===(r=null===(t=x())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},w=function(){var e;return null===(e=x())||void 0===e?void 0:e.config},_=function(e){var t;return null===(t=x())||void 0===t?void 0:t["_".concat(e)]},I=function(){"use strict";function e(){var t=this;r(s)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,r){t.resolve=e,t.reject=r}))}return r(u)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function T(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function S(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function R(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function O(){var e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function N(){try{return"object"==typeof indexedDB}catch(e){return!1}}function C(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var A=function(e){"use strict";r(c)(n,e);var t=r(f)(n);function n(e,i,a){var u;return r(s)(this,n),(u=t.call(this,i)).code=e,u.customData=a,u.name="FirebaseError",Object.setPrototypeOf(r(o)(u),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(r(o)(u),P.prototype.create),u}return n}(r(p)(Error)),P=function(){"use strict";function e(t,n,i){r(s)(this,e),this.service=t,this.serviceName=n,this.errors=i}return r(u)(e,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?M(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new A(a,u,i);return c}}]),e}();function M(e,t){return e.replace(D,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],p=t[c];if(j(l)&&j(p)){if(!U(l,p))return!1}else if(l!==p)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,d=!1,h=void 0;try{for(var v,m=n[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){d=!0,h=e}finally{try{f||null==m.return||m.return()}finally{if(d)throw h}}return!0}function j(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){var t=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(e,n){var i=r(l)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){t.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return t.length?"&"+t.join("&"):""}function F(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=r(l)(e.split("="),2),i=n[0],a=n[1];t[decodeURIComponent(i)]=decodeURIComponent(a)}})),t}function W(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){var r=new V(e,t);return r.subscribe.bind(r)}var V=function(){"use strict";function e(t,n){var i=this;r(s)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){t(i)})).catch((function(e){i.error(e)}))}return r(u)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=H),void 0===n.error&&(n.error=H),void 0===n.complete&&(n.complete=H);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r}})),a.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r.default(e)||n.default(e,t)||o.default(e,t)||i.default()};var r=s(a("8slrw")),n=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||o.default(e)||i.default()};var r=s(a("kMC0W")),n=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var r=s(a("ge8co")),n=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!n.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return r.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,a=n.default(e);if(t){var o=n.default(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i.default(this,r)}};var r=o(a("aTHs7")),n=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(a("ds8z5")),n=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("6qd2L",(function(e,t){var r,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u,c=[],l=!1,p=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):p=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++p<t;)u&&u[p].run();p=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("MjY8E",(function(e,n){t(e.exports,"_registerComponent",(function(){return T})),t(e.exports,"_getProvider",(function(){return S})),t(e.exports,"SDK_VERSION",(function(){return C})),t(e.exports,"initializeApp",(function(){return A})),t(e.exports,"getApp",(function(){return P})),t(e.exports,"registerVersion",(function(){return M}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),p=a("6ExWU"),f=a("kZfxc"),d=a("2xDiJ"),h=a("ajgRO"),v=(d=a("2xDiJ"),function(){"use strict";function e(t){r(o)(this,e),this.container=t}return r(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var m,g,y="@firebase/app",b="0.9.7",x=new(0,f.Logger)("@firebase/app"),k="[DEFAULT]",w=(m={},r(u)(m,y,"fire-core"),r(u)(m,"@firebase/app-compat","fire-core-compat"),r(u)(m,"@firebase/analytics","fire-analytics"),r(u)(m,"@firebase/analytics-compat","fire-analytics-compat"),r(u)(m,"@firebase/app-check","fire-app-check"),r(u)(m,"@firebase/app-check-compat","fire-app-check-compat"),r(u)(m,"@firebase/auth","fire-auth"),r(u)(m,"@firebase/auth-compat","fire-auth-compat"),r(u)(m,"@firebase/database","fire-rtdb"),r(u)(m,"@firebase/database-compat","fire-rtdb-compat"),r(u)(m,"@firebase/functions","fire-fn"),r(u)(m,"@firebase/functions-compat","fire-fn-compat"),r(u)(m,"@firebase/installations","fire-iid"),r(u)(m,"@firebase/installations-compat","fire-iid-compat"),r(u)(m,"@firebase/messaging","fire-fcm"),r(u)(m,"@firebase/messaging-compat","fire-fcm-compat"),r(u)(m,"@firebase/performance","fire-perf"),r(u)(m,"@firebase/performance-compat","fire-perf-compat"),r(u)(m,"@firebase/remote-config","fire-rc"),r(u)(m,"@firebase/remote-config-compat","fire-rc-compat"),r(u)(m,"@firebase/storage","fire-gcs"),r(u)(m,"@firebase/storage-compat","fire-gcs-compat"),r(u)(m,"@firebase/firestore","fire-fst"),r(u)(m,"@firebase/firestore-compat","fire-fst-compat"),r(u)(m,"fire-js","fire-js"),r(u)(m,"firebase","fire-js-all"),m),_=new Map,I=new Map;function E(e,t){try{e.container.addComponent(t)}catch(r){x.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function T(e){var t=e.name;if(I.has(t))return x.debug("There were multiple attempts to register component ".concat(t,".")),!1;I.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=_.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){E(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function S(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var R=(g={},r(u)(g,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),r(u)(g,"bad-app-name","Illegal App name: '{$appName}"),r(u)(g,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),r(u)(g,"app-deleted","Firebase App named '{$appName}' already deleted"),r(u)(g,"no-options","Need to provide options, when not being deployed to hosting via source."),r(u)(g,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),r(u)(g,"invalid-log-argument","First argument to `onLog` must be null or a function."),r(u)(g,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),r(u)(g,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),r(u)(g,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),r(u)(g,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),g),O=new(0,d.ErrorFactory)("app","Firebase",R),N=function(){"use strict";function e(t,n,i){var a=this;r(o)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,p.Component)("app",(function(){return a}),"PUBLIC"))}return r(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}}]),e}(),C="9.19.1";function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;if("object"!=typeof t){var n=t;t={name:n}}var i=Object.assign({name:k,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw O.create("bad-app-name",{appName:String(a)});if(r||(r=(0,d.getDefaultAppConfig)()),!r)throw O.create("no-options");var o=_.get(a);if(o){if((0,d.deepEqual)(r,o.options)&&(0,d.deepEqual)(i,o.config))return o;throw O.create("duplicate-app",{appName:a})}var s=new(0,p.ComponentContainer)(a),u=!0,c=!1,l=void 0;try{for(var f,h=I.values()[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var v=f.value;s.addComponent(v)}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}var m=new N(r,i,s);return _.set(a,m),m}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=_.get(e);if(!t&&e===k)return A();if(!t)throw O.create("no-app",{appName:e});return t}function M(e,t,r){var n,i=null!==(n=w[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void x.warn(s.join(" "))}T(new(0,p.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var D="firebase-heartbeat-store",L=null;function U(){return L||(L=(0,h.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(D)}}).catch((function(e){throw O.create("idb-open",{originalErrorMessage:e.message})}))),L}function j(e){return z.apply(this,arguments)}function z(){return(z=r(i)(r(l).mark((function e(t){var n,i;return r(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return n=e.sent,e.abrupt("return",n.transaction(D).objectStore(D).get(B(t)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?x.warn(e.t0.message):(i=O.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),x.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function F(e,t){return W.apply(this,arguments)}function W(){return(W=r(i)(r(l).mark((function e(t,n){var i,a,o,s;return r(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return i=e.sent,a=i.transaction(D,"readwrite"),o=a.objectStore(D),e.next=8,o.put(n,B(t));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?x.warn(e.t0.message):(s=O.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),x.warn(s.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function B(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V=function(){"use strict";function e(t){var n=this;r(o)(this,e),this.container=t,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new K(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return r(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return r(i)(r(l).mark((function t(){var n,i,a;return r(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=H(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),t)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return r(i)(r(l).mark((function t(){var n,i,a,o,s;return r(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(n=H(),i=X(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),t)})))()}}]),e}();function H(){return(new Date).toISOString().substring(0,10)}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),G(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),G(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var q,K=function(){"use strict";function e(t){r(o)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return r(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return r(i)(r(l).mark((function e(){return r(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,d.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return r(i)(r(l).mark((function t(){var n;return r(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,j(e.app);case 9:return n=t.sent,t.abrupt("return",n||{heartbeats:[]});case 11:case"end":return t.stop()}}),t)})))()}},{key:"overwrite",value:function(e){var t=this;return r(i)(r(l).mark((function n(){var i,a;return r(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,t.read();case 10:return a=r.sent,r.abrupt("return",F(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return r.stop()}}),n)})))()}},{key:"add",value:function(e){var t=this;return r(i)(r(l).mark((function n(){var i,a;return r(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,t.read();case 10:return a=n.sent,n.abrupt("return",F(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:r(c)(a.heartbeats).concat(r(c)(e.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),e}();function G(e){return(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */q="",T(new(0,p.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),T(new(0,p.Component)("heartbeat",(function(e){return new V(e)}),"PRIVATE")),M(y,b,q),M(y,b,"esm2017"),M("fire-js","")})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("6ExWU",(function(e,n){t(e.exports,"Component",(function(){return f})),t(e.exports,"ComponentContainer",(function(){return v}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),p=a("2xDiJ"),f=function(){"use strict";function e(t,n,i){r(o)(this,e),this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return r(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),d="[DEFAULT]",h=function(){"use strict";function e(t,n){r(o)(this,e),this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return r(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new(0,p.Deferred);if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:d})}catch(e){}var t=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=r(u)(a.value,2),c=s[0],l=s[1],p=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:p});l.resolve(f)}catch(e){}}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return r(i)(r(l).mark((function t(){var n;return r(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Array.from(e.instances.values()),t.next=3,Promise.all(r(c)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(r(c)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return t.stop()}}),t)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,n=void 0===t?{}:t,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,c=void 0;try{for(var l,p=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=p.next()).done);o=!0){var f=r(u)(l.value,2),d=f[0],h=f[1],v=this.normalizeInstanceIdentifier(d);i===v&&h.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==p.return||p.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===d?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.component?this.component.multipleInstances?e:d:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var v=function(){"use strict";function e(t){r(o)(this,e),this.name=t,this.providers=new Map}return r(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new h(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),a.register("kZfxc",(function(e,n){t(e.exports,"LogLevel",(function(){return i})),t(e.exports,"Logger",(function(){return g})),t(e.exports,"setLogLevel",(function(){return y})),t(e.exports,"setUserLogHandler",(function(){return b}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),p=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var f,d={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},h=i.INFO,v=(f={},r(c)(f,i.DEBUG,"log"),r(c)(f,i.VERBOSE,"log"),r(c)(f,i.INFO,"info"),r(c)(f,i.WARN,"warn"),r(c)(f,i.ERROR,"error"),f),m=function(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(t<e.logLevel)){var s=(new Date).toISOString(),u=v[t];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(r(l)(i)))}},g=function(){"use strict";function e(t){r(s)(this,e),this.name=t,this._logLevel=h,this._logHandler=m,this._userLogHandler=null,p.push(this)}return r(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?d[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(r(l)(t))),this._logHandler.apply(this,[this,i.DEBUG].concat(r(l)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(r(l)(t))),this._logHandler.apply(this,[this,i.VERBOSE].concat(r(l)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(r(l)(t))),this._logHandler.apply(this,[this,i.INFO].concat(r(l)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(r(l)(t))),this._logHandler.apply(this,[this,i.WARN].concat(r(l)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(r(l)(t))),this._logHandler.apply(this,[this,i.ERROR].concat(r(l)(t)))}}]),e}();function y(e){p.forEach((function(t){t.setLogLevel(e)}))}function b(e,t){var r=!0,n=!1,a=void 0;try{for(var o,s=p[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=null;t&&t.level&&(c=d[t.level]),u.userLogHandler=null===e?null:function(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");r>=(null!=c?c:t.logLevel)&&e({level:i[r].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){n=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw a}}}})),a.register("ajgRO",(function(e,n){t(e.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var p=["get","getKey","getAll","getAllKeys","count"],f=["put","add","delete","clear"],d=new Map;function h(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(d.get(t))return d.get(t);var n=t.replace(/FromIndex$/,""),a=t!==n,o=f.includes(n);if(n in(a?IDBIndex:IDBObjectStore).prototype&&(o||p.includes(n))){var c,l=(c=r(i)(r(u).mark((function e(t){var i,c,l,p,f,d,h=arguments;return r(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=h.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=h[l];return f=this.transaction(t,o?"readwrite":"readonly"),d=f.store,a&&(d=d.index(c.shift())),e.next=7,Promise.all([(p=d)[n].apply(p,r(s)(c)),o&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return d.set(t,l),l}}}(0,c.r)((function(e){return r(o)({},e,{get:function(t,r,n){return h(t,r)||e.get(t,r,n)},has:function(t,r){return!!h(t,r)||e.has(t,r)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){n.default(e,t,r[t])}))}return e};var r,n=(r=a("hKHmD"))&&r.__esModule?r:{default:r}})),a.register("kKOTz",(function(e,n){t(e.exports,"w",(function(){return g})),t(e.exports,"r",(function(){return h}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,p=new WeakMap,f=new WeakMap;var d={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function h(e){d=e(d)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.apply(y(this),r),g(u.get(this))}:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return g(e.apply(y(this),r))}:function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,u=(o=e).call.apply(o,[y(this),t].concat(r(s)(i)));return l.set(u,t.sort?t.sort():[t]),g(u)}}function m(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,d):e);var t}function g(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(g(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),f.set(r,t),r;var t,r;if(p.has(e))return p.get(e);var n=m(e);return n!==e&&(p.set(e,n),f.set(n,e)),n}var y=function(e){return f.get(e)}})),a.register("k0X64",(function(e,n){t(e.exports,"a7",(function(){return Ut})),t(e.exports,"a8",(function(){return zt})),t(e.exports,"ah",(function(){return Bt})),t(e.exports,"w",(function(){return qt})),t(e.exports,"z",(function(){return Kt})),t(e.exports,"o",(function(){return Fn}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),p=a("fVNic"),f=a("eYQtU"),d=a("1t1Wn"),h=a("8nrFW"),v=a("2MbLg"),m=a("2TvXO"),g=a("2xDiJ"),y=a("MjY8E"),b=a("kZfxc"),x=a("4tSb9"),k=a("6ExWU");function w(){return r(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var _=w,I=new(0,g.ErrorFactory)("auth","Firebase",w()),E=new(0,b.Logger)("@firebase/auth");function T(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var a;E.logLevel<=b.LogLevel.ERROR&&(a=E).error.apply(a,["Auth (".concat(y.SDK_VERSION,"): ").concat(e)].concat(r(h)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];throw N.apply(void 0,[e].concat(r(h)(n)))}function R(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return N.apply(void 0,[e].concat(r(h)(n)))}function O(e,t,n){var i=Object.assign(Object.assign({},_()),r(c)({},t,n));return new(0,g.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function N(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=n[0],u=r(h)(n.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(r(h)(u)))}return(a=I).create.apply(a,[e].concat(r(h)(n)))}function C(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!e)throw N.apply(void 0,[t].concat(r(h)(i)))}function A(e){var t="INTERNAL ASSERTION FAILED: "+e;throw T(t),new Error(t)}function P(e,t){e||A(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M=new Map;function D(e){P(e instanceof Function,"Expected a class definition");var t=M.get(e);return t?(P(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,M.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){var r=(0,y._getProvider)(e,"auth");if(r.isInitialized()){var n=r.getImmediate(),i=r.getOptions();if((0,g.deepEqual)(i,null!=t?t:{}))return n;S(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function j(){return"http:"===z()||"https:"===z()}function z(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var F=function(){"use strict";function e(t,n){r(s)(this,e),this.shortDelay=t,this.longDelay=n,P(n>t,"Short delay should be less than long delay!"),this.isMobile=(0,g.isMobileCordova)()||(0,g.isReactNative)()}return r(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(j()||(0,g.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t){P(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B,V=function(){"use strict";function e(){r(s)(this,e)}return r(u)(e,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void A("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void A("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void A("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),H=(B={},r(c)(B,"CREDENTIAL_MISMATCH","custom-token-mismatch"),r(c)(B,"MISSING_CUSTOM_TOKEN","internal-error"),r(c)(B,"INVALID_IDENTIFIER","invalid-email"),r(c)(B,"MISSING_CONTINUE_URI","internal-error"),r(c)(B,"INVALID_PASSWORD","wrong-password"),r(c)(B,"MISSING_PASSWORD","missing-password"),r(c)(B,"EMAIL_EXISTS","email-already-in-use"),r(c)(B,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),r(c)(B,"INVALID_IDP_RESPONSE","invalid-credential"),r(c)(B,"INVALID_PENDING_TOKEN","invalid-credential"),r(c)(B,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),r(c)(B,"MISSING_REQ_TYPE","internal-error"),r(c)(B,"EMAIL_NOT_FOUND","user-not-found"),r(c)(B,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),r(c)(B,"EXPIRED_OOB_CODE","expired-action-code"),r(c)(B,"INVALID_OOB_CODE","invalid-action-code"),r(c)(B,"MISSING_OOB_CODE","internal-error"),r(c)(B,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),r(c)(B,"INVALID_ID_TOKEN","invalid-user-token"),r(c)(B,"TOKEN_EXPIRED","user-token-expired"),r(c)(B,"USER_NOT_FOUND","user-token-expired"),r(c)(B,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),r(c)(B,"INVALID_CODE","invalid-verification-code"),r(c)(B,"INVALID_SESSION_INFO","invalid-verification-id"),r(c)(B,"INVALID_TEMPORARY_PROOF","invalid-credential"),r(c)(B,"MISSING_SESSION_INFO","missing-verification-id"),r(c)(B,"SESSION_EXPIRED","code-expired"),r(c)(B,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),r(c)(B,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),r(c)(B,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),r(c)(B,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),r(c)(B,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),r(c)(B,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),r(c)(B,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),r(c)(B,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),r(c)(B,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),r(c)(B,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),r(c)(B,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),B),X=new F(3e4,6e4);function q(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function K(e,t,r,n){return G.apply(this,arguments)}function G(){return G=r(o)(r(m).mark((function e(t,n,i,a){var s,u=arguments;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",J(t,s,r(o)(r(m).mark((function e(){var o,s,u,c;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===n?s=a:o={body:JSON.stringify(a)}),u=(0,g.querystring)(Object.assign({key:t.config.apiKey},s)).slice(1),e.next=6,t._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),e.abrupt("return",V.fetch()(Z(t,t.config.apiHost,i,u),Object.assign({method:n,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function J(e,t,r){return Y.apply(this,arguments)}function Y(){return(Y=r(o)(r(m).mark((function e(t,n,i){var a,o,s,u,c,l,p,f,h;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,a=Object.assign(Object.assign({},H),n),e.prev=2,o=new ee(t),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw te(t,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=r(d)(c.split(" : "),2),p=l[0],f=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==p){e.next=23;break}throw te(t,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==p){e.next=27;break}throw te(t,"email-already-in-use",u);case 27:if("USER_DISABLED"!==p){e.next=29;break}throw te(t,"user-disabled",u);case 29:if(h=a[p]||p.toLowerCase().replace(/[_\s]+/g,"-"),!f){e.next=34;break}throw O(t,h,f);case 34:S(t,h);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof g.FirebaseError)){e.next=41;break}throw e.t0;case 41:S(t,"network-request-failed",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Q(e,t,r,n){return $.apply(this,arguments)}function $(){return $=r(o)(r(m).mark((function e(t,n,i,a){var o,s,u=arguments;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,K(t,n,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&S(t,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}function Z(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?W(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var ee=function(){"use strict";function e(t){var n=this;r(s)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(R(r.auth,"network-request-failed"))}),X.get())}))}return r(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function te(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=R(e,t,n);return i.customData._tokenResponse=r,i}function re(e,t){return ne.apply(this,arguments)}function ne(){return(ne=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K(t,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t){return ae.apply(this,arguments)}function ae(){return(ae=r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K(t,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return se=r(o)(r(m).mark((function e(t){var n,i,a,o,s,u,c=arguments;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]&&c[1],i=(0,g.getModularInstance)(t),e.next=4,i.getIdToken(n);case 4:return a=e.sent,C((o=ce(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:oe(ue(o.auth_time)),issuedAtTime:oe(ue(o.iat)),expirationTime:oe(ue(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}function ue(e){return 1e3*Number(e)}function ce(e){var t=r(d)(e.split("."),3),n=t[0],i=t[1],a=t[2];if(void 0===n||void 0===i||void 0===a)return T("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,g.base64Decode)(i);return o?JSON.parse(o):(T("Failed to decode base64 JWT payload"),null)}catch(e){return T("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function le(e,t){return pe.apply(this,arguments)}function pe(){return pe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){var i=arguments;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof g.FirebaseError&&fe(e.t0))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),pe.apply(this,arguments)}function fe(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de=function(){"use strict";function e(t){r(s)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return r(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),n=this;this.timerId=setTimeout(r(o)(r(m).mark((function e(){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),e)}))),t)}}},{key:"iteration",value:function(){var e=this;return r(o)(r(m).mark((function t(){return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}]),e}(),he=function(){"use strict";function e(t,n){r(s)(this,e),this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}return r(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=oe(this.lastLoginAt),this.creationTime=oe(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){return me.apply(this,arguments)}function me(){return(me=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t){var n,i,a,o,s,u,c,l,p,f,d;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.auth,e.next=4,t.getIdToken();case 4:return a=e.sent,e.next=7,le(t,ie(i,{idToken:a}));case 7:C(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],t._notifyReloadListener(s),u=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?be(s.providerUserInfo):[],c=ye(t.providerData,u),l=t.isAnonymous,p=!(t.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!l&&p,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new he(s.createdAt,s.lastLoginAt),isAnonymous:f},Object.assign(t,d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return(ge=r(o)(r(m).mark((function e(t){var n;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,g.getModularInstance)(t),e.next=3,ve(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e,t){var n=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return r(h)(n).concat(r(h)(t))}function be(e){return e.map((function(e){var t=e.providerId,r=(0,x.__rest)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function xe(e,t){return ke.apply(this,arguments)}function ke(){return(ke=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){var i;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t,{},r(o)(r(m).mark((function e(){var i,a,o,s,u,c;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,g.querystring)({grant_type:"refresh_token",refresh_token:n}).slice(1),a=t.config,o=a.tokenApiHost,s=a.apiKey,u=Z(t,o,"/v1/token","key=".concat(s)),e.next=5,t._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",V.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we=function(){"use strict";function e(){r(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return r(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){C(e.idToken,"internal-error"),C(void 0!==e.idToken,"internal-error"),C(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,C(r=ce(t),"internal-error"),C(void 0!==r.exp,"internal-error"),C(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return r(o)(r(m).mark((function i(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(C(!n.accessToken||n.refreshToken,e,"user-token-expired"),t||!n.accessToken||n.isExpired){r.next=3;break}return r.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){r.next=7;break}return r.next=6,n.refresh(e,n.refreshToken);case 6:return r.abrupt("return",n.accessToken);case 7:return r.abrupt("return",null);case 8:case"end":return r.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var n=this;return r(o)(r(m).mark((function i(){var a,o,s,u;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,xe(e,t);case 2:a=r.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,n.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return r.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return A("not implemented")}}],[{key:"fromJSON",value:function(t,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new e;return n&&(C("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),i&&(C("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(C("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t){C("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ie=function(){"use strict";function e(t){r(s)(this,e);var n=t.uid,i=t.auth,a=t.stsTokenManager,o=(0,x.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new de(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?r(h)(o.providerData):[],this.metadata=new he(o.createdAt||void 0,o.lastLoginAt||void 0)}return r(u)(e,[{key:"getIdToken",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,le(t,t.stsTokenManager.getToken(t.auth,e));case 2:if(C(i=r.sent,t.auth,"internal-error"),t.accessToken===i){r.next=9;break}return t.accessToken=i,r.next=8,t.auth._persistUserIfCurrent(t);case 8:t.auth._notifyListenersIfCurrent(t);case 9:return r.abrupt("return",i);case 10:case"end":return r.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return se.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ge.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){var r=new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}},{key:"_onReload",value:function(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return r(o)(r(m).mark((function i(){var a;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=!1,e.idToken&&e.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(e),a=!0),!t){r.next=5;break}return r.next=5,ve(n);case 5:return r.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return r.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return r(o)(r(m).mark((function t(){var n;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return n=t.sent,t.next=5,le(e,re(e.auth,{idToken:n}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),t)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,r){var n,i,a,o,s,u,c,l,p=null!==(n=r.displayName)&&void 0!==n?n:void 0,f=null!==(i=r.email)&&void 0!==i?i:void 0,d=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,x=r.emailVerified,k=r.isAnonymous,w=r.providerData,_=r.stsTokenManager;C(b&&_,t,"internal-error");var I=we.fromJSON(this.name,_);C("string"==typeof b,t,"internal-error"),_e(p,t.name),_e(f,t.name),C("boolean"==typeof x,t,"internal-error"),C("boolean"==typeof k,t,"internal-error"),_e(d,t.name),_e(h,t.name),_e(v,t.name),_e(m,t.name),_e(g,t.name),_e(y,t.name);var E=new e({uid:b,auth:t,email:f,emailVerified:x,displayName:p,isAnonymous:k,photoURL:h,phoneNumber:d,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(E.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r(o)(r(m).mark((function a(){var o,s;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=new we).updateFromServerResponse(n),s=new e({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:i}),r.next=5,ve(s);case 5:return r.abrupt("return",s);case 6:case"end":return r.stop()}}),a)})))()}}]),e}(),Ee=function(){"use strict";function e(){r(s)(this,e),this.type="NONE",this.storage={}}return r(u)(e,[{key:"_isAvailable",value:function(){return r(o)(r(m).mark((function e(){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,t){var n=this;return r(o)(r(m).mark((function i(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.storage[e]=t;case 1:case"end":return r.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=t.storage[e],r.abrupt("return",void 0===i?null:i);case 2:case"end":return r.stop()}}),n)})))()}},{key:"_remove",value:function(e){var t=this;return r(o)(r(m).mark((function n(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:delete t.storage[e];case 1:case"end":return r.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.type="NONE";var Te=Ee;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var Re=function(){"use strict";function e(t,n,i){r(s)(this,e),this.persistence=t,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Se(this.userKey,o.apiKey,u),this.fullPersistenceKey=Se("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return r(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return r(o)(r(m).mark((function t(){var n;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return n=t.sent,t.abrupt("return",n?Ie._fromJSON(e.auth,n):null);case 4:case"end":return t.stop()}}),t)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.persistence!==e){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,t.getCurrentUser();case 4:return i=r.sent,r.next=7,t.removeCurrentUser();case 7:if(t.persistence=e,!i){r.next=10;break}return r.abrupt("return",t.setCurrentUser(i));case 10:case"end":return r.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return r(o)(r(m).mark((function a(){var s,u,c,l,p,f,d,h,v,g,y,b,x;return r(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new e(D(Te),t,i));case 2:return a.next=4,Promise.all(n.map(function(){var e=r(o)(r(m).mark((function e(t){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||D(Te),c=Se(i,t.config.apiKey,t.name),l=null,p=!0,f=!1,d=void 0,a.prev=9,h=n[Symbol.iterator]();case 11:if(p=(v=h.next()).done){a.next=29;break}return g=v.value,a.prev=13,a.next=16,g._get(c);case 16:if(!(y=a.sent)){a.next=22;break}return b=Ie._fromJSON(t,y),g!==u&&(l=b),u=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:p=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),f=!0,d=a.t1;case 35:a.prev=35,a.prev=36,p||null==h.return||h.return();case 38:if(a.prev=38,!f){a.next=41;break}throw d;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(x=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&x.length){a.next=46;break}return a.abrupt("return",new e(u,t,i));case 46:if(u=x[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var e=r(o)(r(m).mark((function e(t){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===u){e.next=8;break}return e.prev=1,e.next=4,t._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,t,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ne(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(De(t))return"Blackberry";if(Le(t))return"Webos";if(Ce(t))return"Safari";if((t.includes("chrome/")||Ae(t))&&!t.includes("edge/"))return"Chrome";if(Me(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/firefox\//i.test(e)}function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/crios\//i.test(e)}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iemobile/i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/android/i.test(e)}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/blackberry/i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/webos/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function je(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function ze(){return(0,g.isIE)()&&10===document.documentMode}function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(e)||Me(e)||Le(e)||De(e)||/windows phone/i.test(e)||Pe(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Oe((0,g.getUA)());break;case"Worker":t="".concat(Oe((0,g.getUA)()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(y.SDK_VERSION,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be=function(){"use strict";function e(t){r(s)(this,e),this.auth=t,this.queue=[]}return r(u)(e,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i,a,o,s,u,c,l,p,f,d,h,v,g;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.auth.currentUser!==e){r.next=2;break}return r.abrupt("return");case 2:i=[],r.prev=3,a=!0,o=!1,s=void 0,r.prev=5,u=t.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){r.next=15;break}return l=c.value,r.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,r.next=7;break;case 15:r.next=21;break;case 17:r.prev=17,r.t0=r.catch(5),o=!0,s=r.t0;case 21:r.prev=21,r.prev=22,a||null==u.return||u.return();case 24:if(r.prev=24,!o){r.next=27;break}throw s;case 27:return r.finish(24);case 28:return r.finish(21);case 29:r.next=52;break;case 31:for(r.prev=31,r.t1=r.catch(3),i.reverse(),p=!0,f=!1,d=void 0,r.prev=35,h=i[Symbol.iterator]();!(p=(v=h.next()).done);p=!0){g=v.value;try{g()}catch(e){}}r.next=43;break;case 39:r.prev=39,r.t2=r.catch(35),f=!0,d=r.t2;case 43:r.prev=43,r.prev=44,p||null==h.return||h.return();case 46:if(r.prev=46,!f){r.next=49;break}throw d;case 49:return r.finish(46);case 50:return r.finish(43);case 51:throw t.auth._errorFactory.create("login-blocked",{originalMessage:null===r.t1||void 0===r.t1?void 0:r.t1.message});case 52:case"end":return r.stop()}}),n,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),Ve=function(){"use strict";function e(t,n,i){r(s)(this,e),this.app=t,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xe(this),this.idTokenSubscription=new Xe(this),this.beforeStateQueue=new Be(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}return r(u)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=D(t));var n=this;return this._initializationPromise=this.queue(r(o)(r(m).mark((function i(){var a,o;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._deleted){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,Re.create(n,e);case 5:if(n.persistenceManager=r.sent,!n._deleted){r.next=8;break}return r.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){r.next=16;break}return r.prev=9,r.next=12,n._popupRedirectResolver._initialize(n);case 12:r.next=16;break;case 14:r.prev=14,r.t0=r.catch(9);case 16:return r.next=18,n.initializeCurrentUser(t);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){r.next=21;break}return r.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return r.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return r(o)(r(m).mark((function t(){var n;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(n=t.sent,e.currentUser||n){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!n||e.currentUser.uid!==n.uid){t.next=12;break}return e._currentUser._assign(n),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(n,!0);case 14:case"end":return t.stop()}}),t)})))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i,a,o,s,u,c,l;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t.assertedPersistence.getCurrentUser();case 3:if(a=r.sent,o=a,s=!1,!e||!t.config.authDomain){r.next=15;break}return r.next=9,t.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=t.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,r.next=13,t.tryRedirectSignIn(e);case 13:l=r.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){r.next=17;break}return r.abrupt("return",t.directlySetCurrentUser(null));case 17:if(o._redirectEventId){r.next=33;break}if(!s){r.next=28;break}return r.prev=19,r.next=22,t.beforeStateQueue.runMiddleware(o);case 22:r.next=28;break;case 24:r.prev=24,r.t0=r.catch(19),o=a,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(r.t0)}));case 28:if(!o){r.next=32;break}return r.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 32:return r.abrupt("return",t.directlySetCurrentUser(null));case 33:return C(t._popupRedirectResolver,t,"argument-error"),r.next=36,t.getOrInitRedirectPersistenceManager();case 36:if(!t.redirectUser||t.redirectUser._redirectEventId!==o._redirectEventId){r.next=38;break}return r.abrupt("return",t.directlySetCurrentUser(o));case 38:return r.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return r.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=null,r.prev=1,r.next=4,t._popupRedirectResolver._completeRedirectFn(t,e,!0);case 4:i=r.sent,r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(1),r.next=11,t._setRedirectUser(null);case 11:return r.abrupt("return",i);case 12:case"end":return r.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return r(o)(r(m).mark((function n(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,ve(e);case 3:r.next=9;break;case 5:if(r.prev=5,r.t0=r.catch(0),"auth/network-request-failed"===(null===r.t0||void 0===r.t0?void 0:r.t0.code)){r.next=9;break}return r.abrupt("return",t.directlySetCurrentUser(null));case 9:return r.abrupt("return",t.directlySetCurrentUser(e));case 10:case"end":return r.stop()}}),n,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return r(o)(r(m).mark((function t(){return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),t)})))()}},{key:"updateCurrentUser",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(i=e?(0,g.getModularInstance)(e):null)&&C(i.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),r.abrupt("return",t._updateCurrentUser(i&&i._clone(t)));case 3:case"end":return r.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return r(o)(r(m).mark((function i(){return r(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&C(n.tenantId===e.tenantId,n,"tenant-id-mismatch"),t){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",n.queue(r(o)(r(m).mark((function t(){return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.directlySetCurrentUser(e);case 2:n.notifyAuthListeners();case 3:case"end":return t.stop()}}),t)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return r(o)(r(m).mark((function t(){return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),t)})))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue(r(o)(r(m).mark((function n(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.assertedPersistence.setPersistence(D(e));case 2:case"end":return r.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,g.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var n=this;return r(o)(r(m).mark((function i(){var a;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.getOrInitRedirectPersistenceManager(t);case 2:return a=r.sent,r.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return r.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.redirectPersistenceManager){r.next=9;break}return C(i=e&&D(e)||t._popupRedirectResolver,t,"argument-error"),r.next=5,Re.create(t,[D(i._redirectPersistence)],"redirectUser");case 5:return t.redirectPersistenceManager=r.sent,r.next=8,t.redirectPersistenceManager.getCurrentUser();case 8:t.redirectUser=r.sent;case 9:return r.abrupt("return",t.redirectPersistenceManager);case 10:case"end":return r.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i,a;return r(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t._isInitialized){n.next=4;break}return n.next=4,t.queue(r(o)(r(m).mark((function e(){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=t._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){n.next=6;break}return n.abrupt("return",t._currentUser);case 6:if((null===(a=t.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){n.next=8;break}return n.abrupt("return",t.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return r(o)(r(m).mark((function n(){return r(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e!==t.currentUser){n.next=2;break}return n.abrupt("return",t.queue(r(o)(r(m).mark((function n(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t.directlySetCurrentUser(e));case 1:case"end":return r.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return C(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return r(o)(r(m).mark((function n(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.currentUser&&t.currentUser!==e&&t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh(),t.currentUser=e,!e){r.next=8;break}return r.next=6,t.assertedPersistence.setCurrentUser(e);case 6:r.next=10;break;case 8:return r.next=10,t.assertedPersistence.removeCurrentUser();case 10:case"end":return r.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=We(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return r(o)(r(m).mark((function t(){var n,i,a;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),t.next=5,null===(n=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=t.sent)&&(i["X-Firebase-Client"]=a),t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){return(0,g.getModularInstance)(e)}var Xe=function(){"use strict";function e(t){var n=this;r(s)(this,e),this.auth=t,this.observer=null,this.addObserver=(0,g.createSubscribe)((function(e){return n.observer=e}))}return r(u)(e,[{key:"next",get:function(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function qe(e,t,n){var i=He(e);C(i._canInitEmulator,i,"emulator-config-failed"),C(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");var a=!!(null==n?void 0:n.disableWarnings),o=Ke(t),s=function(e){var t=Ke(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};var i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Ge(i.substr(o.length+1))}}var s=r(d)(i.split(":"),2);return{host:s[0],port:Ge(s[1])}}(t),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ke(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ge(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Je=function(){"use strict";function e(t,n){r(s)(this,e),this.providerId=t,this.signInMethod=n}return r(u)(e,[{key:"toJSON",value:function(){return A("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return A("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return A("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return A("not implemented")}}]),e}();function Ye(e,t){return Qe.apply(this,arguments)}function Qe(){return(Qe=r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K(t,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $e(e,t){return Ze.apply(this,arguments)}function Ze(){return(Ze=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(t,"POST","/v1/accounts:signInWithPassword",q(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function et(e,t){return tt.apply(this,arguments)}function tt(){return(tt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(t,"POST","/v1/accounts:signInWithEmailLink",q(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function rt(e,t){return nt.apply(this,arguments)}function nt(){return(nt=r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(t,"POST","/v1/accounts:signInWithEmailLink",q(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(e,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r(s)(this,n),(o=t.call(this,"password",a))._email=e,o._password=i,o._tenantId=u,o}return r(u)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return r(o)(r(m).mark((function n(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=t.signInMethod,r.next="password"===r.t0?3:"emailLink"===r.t0?4:5;break;case 3:return r.abrupt("return",$e(e,{returnSecureToken:!0,email:t._email,password:t._password}));case 4:return r.abrupt("return",et(e,{email:t._email,oobCode:t._password}));case 5:S(e,"internal-error");case 6:case"end":return r.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(e,t){var n=this;return r(o)(r(m).mark((function i(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?3:"emailLink"===r.t0?4:5;break;case 3:return r.abrupt("return",Ye(e,{idToken:t,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return r.abrupt("return",rt(e,{idToken:t,email:n._email,oobCode:n._password}));case 5:S(e,"internal-error");case 6:case"end":return r.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(Je);function at(e,t){return ot.apply(this,arguments)}function ot(){return(ot=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(t,"POST","/v1/accounts:signInWithIdp",q(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(){var e;return r(s)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return r(u)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return at(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,at(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,at(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,g.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):S("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=(0,x.__rest)(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(Je);function ut(e,t){return ct.apply(this,arguments)}function ct(){return(ct=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K(t,"POST","/v1/accounts:sendVerificationCode",q(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function lt(){return(lt=r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(t,"POST","/v1/accounts:signInWithPhoneNumber",q(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pt(){return(pt=r(o)(r(m).mark((function e(t,n){var i;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t,"POST","/v1/accounts:signInWithPhoneNumber",q(t,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw te(t,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ft=r(c)({},"USER_NOT_FOUND","user-not-found");function dt(){return(dt=r(o)(r(m).mark((function e(t,n){var i;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Q(t,"POST","/v1/accounts:signInWithPhoneNumber",q(t,i),ft));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(e){var i;return r(s)(this,n),(i=t.call(this,"phone","phone")).params=e,i}return r(u)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return lt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return pt.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return dt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(Je);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt=function(){"use strict";function e(t){var n,i,a,o,u,c;r(s)(this,e);var l=(0,g.querystringDecode)((0,g.extractQuerystring)(t)),p=null!==(n=l.apiKey)&&void 0!==n?n:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);C(p&&f&&d,"argument-error"),this.apiKey=p,this.operation=d,this.code=f,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return r(u)(e,null,[{key:"parseLink",value:function(t){var r=function(e){var t=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).link,r=t?(0,g.querystringDecode)((0,g.extractQuerystring)(t)).deep_link_id:null,n=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).deep_link_id;return(n?(0,g.querystringDecode)((0,g.extractQuerystring)(n)).link:null)||n||r||t||e}(t);try{return new e(r)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mt=function(){"use strict";function e(){r(s)(this,e),this.providerId=e.PROVIDER_ID}return r(u)(e,null,[{key:"credential",value:function(e,t){return it._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=vt.parseLink(t);return C(r,"argument-error"),it._fromEmailAndCode(e,r.code,r.tenantId)}}]),e}();mt.PROVIDER_ID="password",mt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",mt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gt=function(){"use strict";function e(t){r(s)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return r(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),yt=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(){var e;return r(s)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return r(u)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return r(h)(this.scopes)}}]),n}(gt),bt=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(){return r(s)(this,n),t.call(this,"facebook.com")}return r(u)(n,null,[{key:"credential",value:function(e){return st._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(yt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.FACEBOOK_SIGN_IN_METHOD="facebook.com",bt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xt=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(){var e;return r(s)(this,n),(e=t.call(this,"google.com")).addScope("profile"),e}return r(u)(n,null,[{key:"credential",value:function(e,t){return st._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(yt);xt.GOOGLE_SIGN_IN_METHOD="google.com",xt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var kt=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(){return r(s)(this,n),t.call(this,"github.com")}return r(u)(n,null,[{key:"credential",value:function(e){return st._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(yt);kt.GITHUB_SIGN_IN_METHOD="github.com",kt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var wt=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(){return r(s)(this,n),t.call(this,"twitter.com")}return r(u)(n,null,[{key:"credential",value:function(e,t){return st._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(yt);function _t(e,t){return It.apply(this,arguments)}function It(){return(It=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(t,"POST","/v1/accounts:signUp",q(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.TWITTER_SIGN_IN_METHOD="twitter.com",wt.PROVIDER_ID="twitter.com";var Et=function(){"use strict";function e(t){r(s)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return r(u)(e,null,[{key:"_fromIdTokenResponse",value:function(t,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r(o)(r(m).mark((function o(){var s,u,c;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Ie._fromIdTokenResponse(t,i,a);case 2:return s=r.sent,u=Tt(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:n}),r.abrupt("return",c);case 6:case"end":return r.stop()}}),o)})))()}},{key:"_forOperation",value:function(t,n,i){return r(o)(r(m).mark((function a(){var o;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._updateTokensIfNecessary(i,!0);case 2:return o=Tt(i),r.abrupt("return",new e({user:t,providerId:o,_tokenResponse:i,operationType:n}));case 4:case"end":return r.stop()}}),a)})))()}}]),e}();function Tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var St=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(e,a,o,u){var c,l;return r(s)(this,n),(c=t.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(r(i)(c),n.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return r(u)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(g.FirebaseError);function Rt(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw St._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,t){return Nt.apply(this,arguments)}function Nt(){return Nt=r(o)(r(m).mark((function e(t,n){var i,a,o=arguments;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=le,e.t1=t,e.t2=n,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Et._forOperation(t,"link",a));case 14:case"end":return e.stop()}}),e)}))),Nt.apply(this,arguments)}function Ct(e,t){return At.apply(this,arguments)}function At(){return At=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){var i,a,o,s,u,c,l=arguments;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=t.auth,o="reauthenticate",e.prev=3,e.next=6,le(t,Rt(a,o,n,t),i);case 6:return C((s=e.sent).idToken,a,"internal-error"),C(u=ce(s.idToken),a,"internal-error"),c=u.sub,C(t.uid===c,a,"user-mismatch"),e.abrupt("return",Et._forOperation(t,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&S(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),At.apply(this,arguments)}function Pt(e,t){return Mt.apply(this,arguments)}function Mt(){return Mt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){var i,a,o,s,u=arguments;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,Rt(t,a,n);case 4:return o=e.sent,e.next=7,Et._fromIdTokenResponse(t,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,t._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Mt.apply(this,arguments)}function Dt(e,t){return Lt.apply(this,arguments)}function Lt(){return(Lt=r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pt(He(t),n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ut(e,t,r){return jt.apply(this,arguments)}function jt(){return(jt=r(o)(r(m).mark((function e(t,n,i){var a,o,s;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=He(t),e.next=3,_t(a,{returnSecureToken:!0,email:n,password:i});case 3:return o=e.sent,e.next=6,Et._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function zt(e,t,r){return Dt((0,g.getModularInstance)(e),mt.credential(t,r))}function Ft(e,t){return Wt.apply(this,arguments)}function Wt(){return(Wt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K(t,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Bt(e,t){return Vt.apply(this,arguments)}function Vt(){return(Vt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t,n){var i,a,o,s,u,c,l;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.displayName,a=n.photoURL,void 0!==i||void 0!==a){e.next=3;break}return e.abrupt("return");case 3:return o=(0,g.getModularInstance)(t),e.next=6,o.getIdToken();case 6:return s=e.sent,u={idToken:s,displayName:i,photoUrl:a,returnSecureToken:!0},e.next=10,le(o,Ft(o.auth,u));case 10:return c=e.sent,o.displayName=c.displayName||null,o.photoURL=c.photoUrl||null,(l=o.providerData.find((function(e){return"password"===e.providerId})))&&(l.displayName=o.displayName,l.photoURL=o.photoURL),e.next=17,o._updateTokensIfNecessary(c);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ht(e,t,r,n){return(0,g.getModularInstance)(e).onIdTokenChanged(t,r,n)}function Xt(e,t,r){return(0,g.getModularInstance)(e).beforeAuthStateChanged(t,r)}function qt(e,t,r,n){return(0,g.getModularInstance)(e).onAuthStateChanged(t,r,n)}function Kt(e){return(0,g.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return K(e,"POST","/v2/accounts/mfaEnrollment:start",q(e,t))}function Jt(e,t){return K(e,"POST","/v2/accounts/mfaEnrollment:finalize",q(e,t))}new WeakMap;var Yt="__sak",Qt=function(){"use strict";function e(t,n){r(s)(this,e),this.storageRetriever=t,this.type=n}return r(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Yt,"1"),this.storage.removeItem(Yt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(){var e,i;return r(s)(this,n),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,r){return e.onStorageEvent(t,r)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Ce(i=(0,g.getUA)())||Ue(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Fe(),e._shouldAllowMigration=!0,e}return r(u)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);ze()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var i=this,a=this;return r(o)(r(m).mark((function o(){return r(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r(l)(r(p)(n.prototype),"_set",i).call(a,e,t);case 2:a.localCache[e]=JSON.stringify(t);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var t=this,i=this;return r(o)(r(m).mark((function a(){var o;return r(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r(l)(r(p)(n.prototype),"_get",t).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var t=this,i=this;return r(o)(r(m).mark((function a(){return r(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r(l)(r(p)(n.prototype),"_remove",t).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(Qt);$t.type="LOCAL";var Zt=$t,er=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(){return r(s)(this,n),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return r(u)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(Qt);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er.type="SESSION";var tr=er;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e){return Promise.all(e.map((t=r(o)(r(m).mark((function e(t){var n;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return t.apply(this,arguments)})));var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nr=function(){"use strict";function e(t){r(s)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return r(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i,a,s,u,c,l,p,f;return r(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=e).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=t.handlersMap[u])?void 0:l.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),p=Array.from(l).map(function(){var e=r(o)(r(m).mark((function e(t){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.next=9,rr(p);case 9:f=n.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:f});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var r=this.receivers.find((function(e){return e.isListeningto(t)}));if(r)return r;var n=new e(t);return this.receivers.push(n),n}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ir(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr.receivers=[];var ar=function(){"use strict";function e(t){r(s)(this,e),this.target=t,this.handlers=new Set}return r(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return r(o)(r(m).mark((function a(){var o,s,u;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){r.next=3;break}throw new Error("connection_unavailable");case 3:return r.abrupt("return",new Promise((function(r,a){var c=ir("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);u={messageChannel:o,onMessage:function(e){var t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),r(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:t},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return r.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sr(){return void 0!==or().WorkerGlobalScope&&"function"==typeof or().importScripts}function ur(){return cr.apply(this,arguments)}function cr(){return(cr=r(o)(r(m).mark((function e(){var t;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var lr="firebaseLocalStorageDb",pr="firebaseLocalStorage",fr="fbase_key",dr=function(){"use strict";function e(t){r(s)(this,e),this.request=t}return r(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),e}();function hr(e,t){return e.transaction([pr],t?"readwrite":"readonly").objectStore(pr)}function vr(){var e=indexedDB.deleteDatabase(lr);return new dr(e).toPromise()}function mr(){var e=indexedDB.open(lr,1);return new Promise((function(t,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(pr,{keyPath:fr})}catch(e){n(e)}})),e.addEventListener("success",r(o)(r(m).mark((function n(){var i;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((i=e.result).objectStoreNames.contains(pr)){r.next=12;break}return i.close(),r.next=5,vr();case 5:return r.t0=t,r.next=8,mr();case 8:r.t1=r.sent,(0,r.t0)(r.t1),r.next=13;break;case 12:t(i);case 13:case"end":return r.stop()}}),n)}))))}))}function gr(e,t,r){return yr.apply(this,arguments)}function yr(){return(yr=r(o)(r(m).mark((function e(t,n,i){var a,o;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=hr(t,!0).put((a={},r(c)(a,fr,n),r(c)(a,"value",i),a)),e.abrupt("return",new dr(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function br(e,t){return xr.apply(this,arguments)}function xr(){return(xr=r(o)(r(m).mark((function e(t,n){var i,a;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=hr(t,!1).get(n),e.next=3,new dr(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function kr(e,t){var r=hr(e,!0).delete(t);return new dr(r).toPromise()}var wr=function(){"use strict";function e(){r(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return r(u)(e,[{key:"_openDb",value:function(){var e=this;return r(o)(r(m).mark((function t(){return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,mr();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),t)})))()}},{key:"_withRetries",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i,a;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=0;case 1:return r.prev=2,r.next=5,t._openDb();case 5:return a=r.sent,r.next=8,e(a);case 8:return r.abrupt("return",r.sent);case 11:if(r.prev=11,r.t0=r.catch(2),!(i++>3)){r.next=15;break}throw r.t0;case 15:t.db&&(t.db.close(),t.db=void 0);case 16:r.next=1;break;case 18:case"end":return r.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return r(o)(r(m).mark((function t(){return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",sr()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),t)})))()}},{key:"initializeReceiver",value:function(){var e=this;return r(o)(r(m).mark((function t(){return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.receiver=nr._getInstance(sr()?self:null),e.receiver._subscribe("keyChanged",function(){var t=r(o)(r(m).mark((function t(n,i){var a;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=r(o)(r(m).mark((function e(t,n){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}},{key:"initializeSender",value:function(){var e=this;return r(o)(r(m).mark((function t(){var n,i,a;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,ur();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new ar(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),t)})))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return r(o)(r(m).mark((function n(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.sender&&t.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===t.activeServiceWorker)){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50);case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(2);case 9:case"end":return r.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return r(o)(r(m).mark((function e(){var t;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,mr();case 5:return t=e.sent,e.next=8,gr(t,Yt,"1");case 8:return e.next=10,kr(t,Yt);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var t=this;return r(o)(r(m).mark((function n(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.pendingWrites++,r.prev=1,r.next=4,e();case 4:return r.prev=4,t.pendingWrites--,r.finish(4);case 7:case"end":return r.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,t){var n=this;return r(o)(r(m).mark((function i(){return r(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(r(o)(r(m).mark((function i(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n._withRetries((function(r){return gr(r,e,t)}));case 2:return n.localCache[e]=t,r.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return r.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._withRetries((function(t){return br(t,e)}));case 2:return i=r.sent,t.localCache[e]=i,r.abrupt("return",i);case 5:case"end":return r.stop()}}),n)})))()}},{key:"_remove",value:function(e){var t=this;return r(o)(r(m).mark((function n(){return r(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t._withPendingWrite(r(o)(r(m).mark((function n(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._withRetries((function(t){return kr(t,e)}));case 2:return delete t.localCache[e],r.abrupt("return",t.notifyServiceWorker(e));case 4:case"end":return r.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var e=this;return r(o)(r(m).mark((function t(){var n,i,a,o,s,u,c,l,p,f,d,h,v,g,y,b,x;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=hr(e,!1).getAll();return new dr(t).toPromise()}));case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)p=l.value,f=p.fbase_key,d=p.value,a.add(f),JSON.stringify(e.localCache[f])!==JSON.stringify(d)&&(e.notifyListeners(f,d),i.push(f));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(h=!0,v=!1,g=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(h=(b=y.next()).done);h=!0)x=b.value,e.localCache[x]&&!a.has(x)&&(e.notifyListeners(x,null),i.push(x));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,g=t.t1;case 35:t.prev=35,t.prev=36,h||null==y.return||y.return();case 38:if(t.prev=38,!v){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(r(o)(r(m).mark((function t(){return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();wr.type="LOCAL";var _r=wr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e,t){return K(e,"POST","/v2/accounts/mfaSignIn:start",q(e,t))}function Er(e,t){return K(e,"POST","/v2/accounts/mfaSignIn:finalize",q(e,t))}function Tr(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=R("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function Sr(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Sr("rcb"),new F(3e4,6e4);var Rr="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e,t,r){return Nr.apply(this,arguments)}function Nr(){return(Nr=r(o)(r(m).mark((function e(t,n,i){var a,o,s,u,c,l,p,f;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,C("string"==typeof o,t,"argument-error"),C(i.type===Rr,t,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return C("enroll"===u.type,t,"internal-error"),e.next=15,Gt(t,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return C("signin"===u.type,t,"internal-error"),C(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,t,"missing-multi-factor-info"),e.next=24,Ir(t,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return p=e.sent,e.abrupt("return",p.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ut(t,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Cr=function(){"use strict";function e(t){r(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=He(t)}return r(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Or(this.auth,e,(0,g.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return ht._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var r=t;return e.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?ht._fromTokenResponse(r,n):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ar(e,t){return t?D(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cr.PROVIDER_ID="phone",Cr.PHONE_SIGN_IN_METHOD="phone";var Pr=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(e){var i;return r(s)(this,n),(i=t.call(this,"custom","custom")).params=e,i}return r(u)(n,[{key:"_getIdTokenResponse",value:function(e){return at(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return at(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return at(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Je);function Mr(e){return Pt(e.auth,new Pr(e),e.bypassAuthState)}function Dr(e){var t=e.auth,r=e.user;return C(r,t,"internal-error"),Ct(r,new Pr(e),e.bypassAuthState)}function Lr(e){return Ur.apply(this,arguments)}function Ur(){return(Ur=r(o)(r(m).mark((function e(t){var n,i;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.auth,C(i=t.user,n,"internal-error"),e.abrupt("return",Ot(i,new Pr(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jr=function(){"use strict";function e(t,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];r(s)(this,e),this.auth=t,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return r(u)(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=r(o)(r(m).mark((function e(n,i){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,r){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i,a,o,s,u,c,l;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){r.next=4;break}return t.reject(u),r.abrupt("return");case 4:return l={auth:t.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:t.user,bypassAuthState:t.bypassAuthState},r.prev=5,r.t0=t,r.next=9,t.getIdpTask(c)(l);case 9:r.t1=r.sent,r.t0.resolve.call(r.t0,r.t1),r.next=16;break;case 13:r.prev=13,r.t2=r.catch(5),t.reject(r.t2);case 16:case"end":return r.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mr;case"linkViaPopup":case"linkViaRedirect":return Lr;case"reauthViaPopup":case"reauthViaRedirect":return Dr;default:S(this.auth,"internal-error")}}},{key:"resolve",value:function(e){P(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){P(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),zr=new F(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fr=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(e,a,o,u,c){var l;return r(s)(this,n),(l=t.call(this,e,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=r(i)(l),l}return r(u)(n,[{key:"executeNotNull",value:function(){var e=this;return r(o)(r(m).mark((function t(){var n;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return C(n=t.sent,e.auth,"internal-error"),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){var e=this;return r(o)(r(m).mark((function t(){var n;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(1===e.filter.length,"Popup operations only handle one event"),n=ir(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],n);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=n,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(R(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),t)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(R(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(R(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,zr.get())};t()}}]),n}(jr);Fr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wr=new Map,Br=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r(s)(this,n),(a=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return r(u)(n,[{key:"execute",value:function(){var e=this,t=this;return r(o)(r(m).mark((function i(){var a,o;return r(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Wr.get(t.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Vr(t.resolver,t.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,r(l)(r(p)(n.prototype),"execute",e).call(t);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Wr.set(t.auth._key(),a);case 21:return t.bypassAuthState||Wr.set(t.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var t=this,i=this,a=function(){return r(l)(r(p)(n.prototype),"onAuthEvent",t)};return r(o)(r(m).mark((function t(){var n;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(n=t.sent)){t.next=16;break}return i.user=n,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){return r(o)(r(m).mark((function e(){return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),n}(jr);function Vr(e,t){return Hr.apply(this,arguments)}function Hr(){return(Hr=r(o)(r(m).mark((function e(t,n){var i,a,o;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Kr(n),a=qr(t),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xr(e,t){Wr.set(e._key(),t)}function qr(e){return D(e._redirectPersistence)}function Kr(e){return Se("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e,t){return Jr.apply(this,arguments)}function Jr(){return Jr=r(o)(r(m).mark((function e(t,n){var i,a,o,s,u,c=arguments;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=He(t),o=Ar(a,n),s=new Br(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),Jr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yr=function(){"use strict";function e(t){r(s)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return r(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $r(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!$r(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(R(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Qr(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Qr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function $r(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Zr(e){return en.apply(this,arguments)}function en(){return en=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(m).mark((function e(t){var n,i=arguments;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",K(t,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),e)}))),en.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rn=/^https?/;function nn(){return(nn=r(o)(r(m).mark((function e(t){var n,i,a,o,s,u,c;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Zr(t);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!an(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:S(t,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function an(e){var t=U(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!rn.test(n))return!1;if(tn.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var on=new F(3e4,6e4);function sn(){var e=or().___jsl,t=!0,n=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=r(h)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}var un=null;function cn(e){return un=un||function(e){return new Promise((function(t,r){var n,i,a;function o(){sn(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){sn(),r(R(e,"network-request-failed"))},timeout:on.get()})}if(null===(i=null===(n=or().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=or().gapi)||void 0===a?void 0:a.load)){var s=Sr("iframefcb");return or()[s]=function(){gapi.load?o():r(R(e,"network-request-failed"))},Tr("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw un=null,e}))}(e),un}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ln=new F(5e3,15e3),pn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dn(e){var t=e.config;C(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?W(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:y.SDK_VERSION},i=fn.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat((0,g.querystring)(n).slice(1))}function hn(e){return vn.apply(this,arguments)}function vn(){return vn=r(o)(r(m).mark((function e(t){var n,i;return r(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,cn(t);case 2:return n=e.sent,C(i=or().gapi,t,"internal-error"),e.abrupt("return",n.open({where:document.body,url:dn(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pn,dontclear:!0},(function(e){return new Promise((n=r(o)(r(m).mark((function n(i,a){var o,s,u;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=function(){or().clearTimeout(s),i(e)},r.next=3,e.restyle({setHideOnLeave:!1});case 3:o=R(t,"network-request-failed"),s=or().setTimeout((function(){a(o)}),ln.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return r.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return e.stop()}}),e)}))),vn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gn="_blank",yn="http://localhost",bn=function(){"use strict";function e(t){r(s)(this,e),this.window=t,this.associatedEvent=null}return r(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function xn(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},mn),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,g.getUA)().toLowerCase();n&&(u=Ae(l)?gn:n),Ne(l)&&(t=t||yn,c.scrollbars="yes");var p=Object.entries(c).reduce((function(e,t){var n=r(d)(t,2),i=n[0],a=n[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(je(l)&&"_self"!==u)return kn(t||"",u),new bn(null);var f=window.open(t||"",u,p);C(f,e,"popup-blocked");try{f.focus()}catch(e){}return new bn(f)}function kn(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wn="__/auth/handler",_n="emulator/auth/handler";function In(e,t,n,i,a,o){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:y.SDK_VERSION,eventId:a};if(t instanceof gt){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",(0,g.isEmpty)(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var p,f=Object.entries(o||{})[Symbol.iterator]();!(u=(p=f.next()).done);u=!0){var h=r(d)(p.value,2),v=h[0],m=h[1];s[v]=m}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(t instanceof yt){var b=t.getScopes().filter((function(e){return""!==e}));b.length>0&&(s.scopes=b.join(","))}e.tenantId&&(s.tid=e.tenantId);var x,k,w=s,_=!0,I=!1,E=void 0;try{for(var T,S=Object.keys(w)[Symbol.iterator]();!(_=(T=S.next()).done);_=!0){var R=T.value;void 0===w[R]&&delete w[R]}}catch(e){I=!0,E=e}finally{try{_||null==S.return||S.return()}finally{if(I)throw E}}return"".concat((x=e,k=x.config,k.emulator?W(k,_n):"https://".concat(k.authDomain,"/").concat(wn)),"?").concat((0,g.querystring)(w).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var En="webStorageSupport",Tn=function(){"use strict";function e(){r(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tr,this._completeRedirectFn=Gr,this._overrideRedirectResult=Xr}return r(u)(e,[{key:"_openPopup",value:function(e,t,n,i){var a=this;return r(o)(r(m).mark((function o(){var s,u;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return P(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=In(e,t,n,U(),i),r.abrupt("return",xn(e,u,ir()));case 4:case"end":return r.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,t,n,i){var a=this;return r(o)(r(m).mark((function o(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a._originValidation(e);case 2:return o=In(e,t,n,U(),i),or().location.href=o,r.abrupt("return",new Promise((function(){})));case 4:case"end":return r.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(P(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i,a;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,hn(e);case 2:return i=r.sent,a=new Yr(e),i.register("authEvent",(function(t){return C(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:a},t.iframes[e._key()]=i,r.abrupt("return",a);case 8:case"end":return r.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(En,{type:En},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),S(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return nn.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Fe()||Ce()||Ue()}}]),e}(),Sn=Tn,Rn=function(){"use strict";function e(t){r(s)(this,e),this.factorId=t}return r(u)(e,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return A("unexpected MultiFactorSessionType")}}}]),e}(),On=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(e){var i;return r(s)(this,n),(i=t.call(this,"phone")).credential=e,i}return r(u)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return K(e,"POST","/v2/accounts/mfaEnrollment:finalize",q(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return K(e,"POST","/v2/accounts/mfaSignIn:finalize",q(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(Rn);(function(){"use strict";function e(){r(s)(this,e)}return r(u)(e,null,[{key:"assertion",value:function(e){return On._fromCredential(e)}}]),e}()).FACTOR_ID="phone",(function(){"use strict";function e(){r(s)(this,e)}return r(u)(e,null,[{key:"assertionForEnrollment",value:function(e,t){return Nn._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Nn._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(e){return r(o)(r(m).mark((function t(){var n,i;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(void 0!==(n=e).auth,"internal-error"),t.next=4,r=n.auth,a={idToken:n.credential,totpEnrollmentInfo:{}},K(r,"POST","/v2/accounts/mfaEnrollment:start",q(r,a));case 4:return i=t.sent,t.abrupt("return",Cn._fromStartTotpMfaEnrollmentResponse(i,n.auth));case 6:case"end":return t.stop()}var r,a}),t)})))()}}]),e}()).FACTOR_ID="totp";var Nn=function(e){"use strict";r(f)(n,e);var t=r(v)(n);function n(e,i,a){var o;return r(s)(this,n),(o=t.call(this,"totp")).otp=e,o.enrollmentId=i,o.secret=a,o}return r(u)(n,[{key:"_finalizeEnroll",value:function(e,t,n){var i=this;return r(o)(r(m).mark((function a(){return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return C(void 0!==i.secret,e,"argument-error"),r.abrupt("return",Jt(e,{idToken:t,displayName:n,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return r.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(e,t){var n=this;return r(o)(r(m).mark((function i(){var a;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return C(void 0!==n.enrollmentId&&void 0!==n.otp,e,"argument-error"),a={verificationCode:n.otp},r.abrupt("return",Er(e,{mfaPendingCredential:t,mfaEnrollmentId:n.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return r.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new n(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new n(t,e)}}]),n}(Rn),Cn=function(){"use strict";function e(t,n,i,a,o,u,c){r(s)(this,e),this.sessionInfo=u,this.auth=c,this.secretKey=t,this.hashingAlgorithm=n,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return r(u)(e,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var r,n=!1;return(An(e)||An(t))&&(n=!0),n&&(An(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),An(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(t,r){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,r)}}]),e}();function An(e){return void 0===e||0===(null==e?void 0:e.length)}var Pn="@firebase/auth",Mn="0.22.0",Dn=function(){"use strict";function e(t){r(s)(this,e),this.auth=t,this.internalListeners=new Map}return r(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return r(o)(r(m).mark((function n(){var i;return r(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.assertAuthConfigured(),r.next=3,t.auth._initializationPromise;case 3:if(t.auth.currentUser){r.next=5;break}return r.abrupt("return",null);case 5:return r.next=7,t.auth.currentUser.getIdToken(e);case 7:return i=r.sent,r.abrupt("return",{accessToken:i});case 9:case"end":return r.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ln,Un=(0,g.getExperimentalSetting)("authIdTokenMaxAge")||300,jn=null,zn=function(e){return t=r(o)(r(m).mark((function t(n){var i,a,o;return r(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=n,!t.t0){t.next=5;break}return t.next=4,n.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Un)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,jn!==o){t.next=12;break}return t.abrupt("return");case 12:return jn=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)};var t};function Fn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getApp)(),t=(0,y._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var r=L(e,{popupRedirectResolver:Sn,persistence:[_r,Zt,tr]}),n=(0,g.getExperimentalSetting)("authTokenSyncURL");if(n){var i=zn(n);Xt(r,i,(function(){return i(r.currentUser)})),Ht(r,(function(e){return i(e)}))}var a=(0,g.getDefaultEmulatorHost)("auth");return a&&qe(r,"http://".concat(a)),r}Ln="Browser",(0,y._registerComponent)(new(0,k.Component)("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){C(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),C(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:Ln,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:We(Ln)},i=new Ve(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(D);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),(0,y._registerComponent)(new(0,k.Component)("auth-internal",(function(e){var t=He(e.getProvider("auth").getImmediate());return new Dn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,y.registerVersion)(Pn,Mn,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ln)),(0,y.registerVersion)(Pn,Mn,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return i(e,t,r)};var r,n=(r=a("2mz0K"))&&r.__esModule?r:{default:r};function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=n.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(r||e):a.value}})(e,t,r)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=a("fVNic"))&&r.__esModule?r:{default:r}})),a.register("4tSb9",(function(e,r){t(e.exports,"__rest",(function(){return n}));function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create})),a.register("9IEE9",(function(e,r){t(e.exports,"app",(function(){return n})),a("fkNhc");var n=(0,a("MjY8E").initializeApp)({apiKey:"AIzaSyBYFRnxBhSHKppebqhWSSfM3IZgMhFP9pE",authDomain:"news-test-4fad2.firebaseapp.com",databaseURL:"https://news-test-4fad2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"news-test-4fad2",storageBucket:"news-test-4fad2.appspot.com",messagingSenderId:"57974720197",appId:"1:57974720197:web:e3ad893de97f19908a92ac"})})),a.register("fkNhc",(function(e,r){t(e.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),t(e.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a("MjY8E").registerVersion)("firebase","9.19.1","app")}))}();
//# sourceMappingURL=favorite.2888eae6.js.map
