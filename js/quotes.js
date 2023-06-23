const quotes = [
    {
        quote : "I'm not here to be perfect, I'm here to be real." 
        , author : "Lady Gaga" 
    },
    {
        quote : "If you can dream it, you can do it." 
        , author : "Walt Disney" 
    },
    {
        quote : "The most important thing is to enjoy your life - to be happy - it's all that matters." 
        , author : "Steve Jobs" 
    },
    {
        quote : "Your time is limited, don't waste it living someone else's life." 
        , author : "Steve Jobs" 
    },
    {
        quote : "In order to be truly happy, you must pursue your dreams and goals." 
        , author : "Oprah Winfrey" 
    },
    {
        quote : "You can have anything you want if you are willing to give up everything you have." 
        , author : "Oprah Winfrey" 
    },
    {
        quote : "You only live once, but if you do it right, once is enough." 
        , author : "Mae West" 
    },
    {
        quote : "If you don't build your dream, someone else will hire you to help them build theirs." 
        , author : "Tony Gaskins" 
    },
    {
        quote : "The best way to find out if you can trust somebody is to trust them." 
        , author : "Ernest Hemingway" 
    },
    {
        quote : "The only way to do great work is to love what you do." 
        , author : "Steve Jobs" 
    }

]



const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerText = ` -  ${todaysQuote.author}`;





