Привіт команда. В цій збірці:

вже підключені шрифти та скинуто базові стилі.

в SASS папці вже є папка utils, в якій є файл vars.scss (в ньому додані змінні
для шрифтів), і є папка base, з файлами common.scss, fonts.scss,reset.scss (в
ких вже підключено modern-normalize, шрифти та стилі, які скидають базові
стилі).

додано папку scripts в якій будть всі js файли, крім index.js.

вже додано до залежностей бібліотеки axios та calendar-dates.

налаштовано firebase realtime database (тут посилання на документацію. з якою
бажано ознайомитись:
https://firebase.google.com/docs/database/rest/start?hl=en&authuser=0

https://firebase.google.com/docs/reference/rest/database?authuser=0#section-server-values
).

URL: "https://news-db-8a691-default-rtdb.europe-west1.firebasedatabase.app/"

Api-key для бекенду новин: "6NeZFvbRUjOlM3jxAALEHJAyoskEi5UY"

Api-key для бекенду погоди: 'd144a2c840446e4183b50680264513d2'

Код для додавання до масиву обʼєктів єкземпляру даних, що приходять з бекенду:

const response = await fetchNews.fetchNews();

const { docs } = response;

docs.forEach(element => {

const img = element.multimedia.forEach(e => { if (e.subType === 'xlarge') {
return e.url; } });

fetchNews.addData( fetchNews.createObj( element.headline.main,
element.lead_paragraph, element.section_name, element.pub_date, element.web_url,
img, element.id ) ); }); console.log(fetchNews.getData());

const response = await fetchNews.fetchNews();

const { docs } = response;

docs.forEach(element => { const img = element.multimedia.forEach(e => { if
(e.subType === 'xlarge') { return e.url; } }); fetchNews.addData(
fetchNews.createObj( element.headline.main, element.lead_paragraph,
element.section_name, element.pub_date, element.web_url, img, element.\_id ) );
}); console.log(fetchNews.getData());
