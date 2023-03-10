import localStorageService from '../localStorageService/localStorageService';
import {
  checkLokalStorage,
  removeFavoriteBtnHTML,
  addFavoriteBtnHTML,
  alreadyRead,
  handleFavorite,
  handleRead,
} from '../render/render';

const favCollectionEl = document.querySelector('.favorite-collection');


const cardFromLocal = localStorageService.load('readMoreLocal');


const refs = {
  iconSvg: new URL('../../images/sprite.svg', import.meta.url),
};

let j = 1;
let readDate = 1;
const arrayForCollection = [];
const markUp = [];
if (cardFromLocal) {
  for (let i = 0; i < cardFromLocal.length; i += 1) {
    setTimeout(() => {
      const btn = document.querySelector(
        `.favorite-btn--${cardFromLocal[i].id}`
      );
      const link = document.querySelector(`.news-link--${cardFromLocal[i].id}`);
      const p = document.querySelector(`.isread--${cardFromLocal[i].id}`);
      const newsCard = document.querySelector(
        `.news-card--${cardFromLocal[i].id}`
      );


      let isFav = true;
      let localFavorite = localStorageService.load('favorite');
      let checkFavorite = checkLokalStorage(cardFromLocal[i], localFavorite);
      if (checkFavorite === true) {
        btn.innerHTML = removeFavoriteBtnHTML;
        btn.classList.add('favorite-btn--active');
      }

      btn.onclick = handleFavorite(isFav, cardFromLocal[i], btn);
    }, 0);


    let headCard = false;
    if (readDate) {
      markUp.push(`<div class="read--date--card">
        <div class="read--one--day">
        <a class="read--date">${cardFromLocal[i].dayRead}</a>
        <svg class="read--contacts__svg" width="15px" height="9px"><use href="./sprite.f14d31f7.svg#icon-arrow-up"></use></svg>
        <svg class="read--contacts__svg_hid read--is-hidden" width="15px" height="9px"><use href="./sprite.f14d31f7.svg#icon-arrow-down"></use></svg>
        </div>
         <div class= "read--day"> <div class="read--news-cards news-list">`);
    }

    markUp.push(`<div class="news-card ${`news-card--${cardFromLocal[i].id}`} grid grid-item-${i}">
            <div class="top-wrap">
              <img
                src="${cardFromLocal[i].image}"
                loading="lazy"
                width="288"
                height="395"
                class="news-img"
              />
              <p class="isread ${`isread--${cardFromLocal[i].id}`}"></p>
                <div class="category-wrap">
                <p class="top-text">${cardFromLocal[i].section}</p>
                </div>
              <button class="favorite-btn ${`favorite-btn--${cardFromLocal[i].id}`}" data-id="${
      cardFromLocal[i].id
    }">
                ${addFavoriteBtnHTML}
              </button>
            </div>
            <div class="info">
              <h2 class="info-item">${cardFromLocal[i].title}</h2>
              <p class="describe">${cardFromLocal[i].description}</p>
              <div class="lower-content">
                <p class="news-date">${cardFromLocal[i].date
                  .slice(0, 10)
                  .replaceAll('-', '/')}</p>
                <a class="news-link ${`news-link--${cardFromLocal[i].id}`} link" href="${
      cardFromLocal[i].url
    }"  onclick="handleRead()" target="_blank">Read more</a>
              </div>
            </div>
          </div>
        `);

    if (cardFromLocal.length < 2) {
      readDate = 0;
    } else {
      if (j < cardFromLocal.length) {
        readDate = Math.abs(
          cardFromLocal[i].dayRead.replace(/[\s.,%]/g, '') -
            cardFromLocal[j].dayRead.replace(/[\s.,%]/g, '')
        );
        j++;
      }
      if (readDate) {
        markUp.push(`</div> </div> </div>`);
      }
    }
  }
  //
  document
    .querySelector('.readCollection')
    .insertAdjacentHTML('beforeend', markUp.join(''));

  let dateCardsEls = document.querySelectorAll('.read--date--card');


  for (el of dateCardsEls) {
    el.addEventListener("click", (event) => {

      if (event.target.querySelector('.read--contacts__svg')) {
        // event.currentTarget.querySelector('.read--day').style.display = "none"
        event.currentTarget.querySelector('.read--day').classList.toggle('read--is-hidden');
        event.target.querySelector('.read--contacts__svg').classList.toggle('read--is-hidden');
        event.target.querySelector('.read--contacts__svg_hid').classList.toggle('read--is-hidden');
      }
    });
  }
} else {
  markUp.push(
    `<section class="read--underfined">  <p class="read--underfined___title">We haven't found news from <br> this category</p> <picture> <source srcset="./src/images/img-error-mobile-x1.png 1x, ./src/images/img-error-mobile-x2.png 2x" type="image/png" media="(max-width: 479.98px)" alt="underfined-picture"> <source srcset="./src/images/img-error-tablet-x1.png 1x 1x, ./src/images/img-error-tablet-x2.png 2x" type="image/png" media="(max-width:767.98px)" alt="underfined-picture"> <source srcset="./src/images/img-error-x1.png 1x, ./src/images/img-error-x2.png 2x" type="image/png" media="(min-width: 1279.98px)" alt="underfined-picture"> <img class="read--underfined___picture" src="/goIt-news-team-project/mobile.9ca3fe39.png" alt="underfined-picture" width="248" height="198"> </picture>  </section>`
  );
  document
    .querySelector('.readCollection')
    .insertAdjacentHTML('beforeend', markUp.join(''));
}
