const quotes = [
    {
        quote : 'Happiness is a choice that requires effort at times.',
        author : '- Aeschylus',
    },
    {
        quote : 'Ideas don’t work for people unwilling to do the work.',
        author : '- Robin Sharma',
    },
    {
        quote : 'Enthusiasm is the mother of effort, and without it nothing great was ever achieved.',
        author : '- Ralph Waldo Emerson',
    },
    {
        quote : 'Things may come to those who wait, but only the things left by those who hustle.',
        author : '- Abraham Lincoln',
    },
    {
        quote : '… only through labor and painful effort, by grim energy and… courage… we move on to better things.',
        author : '- Theodore Roosevelt',
    },
    {
        quote : '… if you give 100 percent all of the time, somehow things will work out in the end.',
        author : '- Larry Bird',
    },
    {
        quote : 'Efforts and courage are not enough without purpose and direction.',
        author : '- John F Kennedy',
    },
    {
        quote : 'Success is dependent on effort.',
        author : '- Sophocles',
    },
    {
        quote : 'Effort is only effort when it begins to hurt.',
        author : '- José Ortega y Gassett.',
    },
    {
        quote : 'What is written without effort is in general read without pleasure.',
        author : '- Samuel Johnson',
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;