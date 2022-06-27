const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a rondom quote from apiQuotes array
  const quote = apiQuotes[Math.floor(math.random() * apiQuotes.length)];
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
}

// Get Quotes From API
async function GetQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
  console.log(apiQuotes);
}

// On Load
GetQuotes();
