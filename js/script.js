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
         // Анимировать смену текста цитаты
         quote.classList.add('fade-out');
         writer.classList.add('fade-out');
 
         setTimeout(() => {
             quote.classList.remove('fade-out');
             writer.classList.remove('fade-out');
         }, 500);

        quote.innerHTML = randomQuote.text;
        writer.innerHTML = randomQuote.author;
    }
}

btn.addEventListener('click', showRandomtext);

langRuButton.addEventListener('click', () => {
    currentLanguage = 'ru';
    loadQuotesRU();
    langRuButton.classList.add('active');
    langEnButton.classList.remove('active');
});

langEnButton.addEventListener('click', () => {
    currentLanguage = 'en';
    loadQuotesEN();

    langEnButton.classList.add('active');
    langRuButton.classList.remove('active');
});

loadQuotesRU();
