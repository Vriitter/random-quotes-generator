const btn = document.querySelector('#Qbtn');
const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');
const langRuButton = document.querySelector('#langRu');
const langEnButton = document.querySelector('#langEn');

let quotes = [];
let currentLanguage = 'ru';

function loadQuotesRU() {
    fetch('./js/quotes-ru.json')
        .then(response => response.json())
        .then(data => {
            quotes = data;
            showRandomtext();
        })
        .catch(error => {
            console.error('Ошибка загрузки русских цитат:', error);
            quote.innerHTML = 'Не удалось загрузить русские цитаты.';
            writer.innerHTML = 'Не удалось загрузить';
        });
}

function loadQuotesEN() {
    fetch('./js/quotes-en.json')
        .then(response => response.json())
        .then(data => {
            quotes = data;
            showRandomtext();
        })
        .catch(error => {
            console.error('Ошибка загрузки английских цитат:', error);
            quote.innerHTML = 'Не удалось загрузить английские цитаты.';
            writer.innerHTML = 'Не удалось загрузить';
        });
}

function showRandomtext() {
    if (quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quote.innerHTML = randomQuote.text;
        writer.innerHTML = randomQuote.author;
    } else {
        text.innerHTML = 'Цитаты не загружены.';
    }
}

btn.addEventListener('click', showRandomtext);

langRuButton.addEventListener('click', () => {
    currentLanguage = 'ru';
    loadQuotesRU();
});

langEnButton.addEventListener('click', () => {
    currentLanguage = 'en';
    loadQuotesEN();
});

loadQuotesRU();


