const btn = document.querySelector('#Qbtn');
const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');

btn.addEventListener('click', function() {
   let random = Math.floor(Math.random() * quotes.length);

   quote.innerHTML = quotes[random].text;
   writer.innerHTML = quotes[random].author;
})