const btn = document.querySelector('#Qbtn');
const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');
let quotes = [];


fetch('./js/quotes.json')
    .then(response => response.json())
    .then(data => {
        quotes = data;

        if (quotes.length > 0) {
            let random = Math.floor(Math.random() * quotes.length);
            quote.innerHTML = quotes[random].text;
            writer.innerHTML = quotes[random].author;
        }
    })
    .catch(error => {
        console.error('Ошибка загрузки файла:', error);
        quote.innerHTML = 'Не удалось загрузить цитаты.';
    });

btn.addEventListener('click', function() {
    if (quotes.length > 0) {
        let random = Math.floor(Math.random() * quotes.length);
        quote.innerHTML = quotes[random].text;
        writer.innerHTML = quotes[random].author;
    }
});