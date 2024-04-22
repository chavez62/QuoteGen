const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = localQuotes;

// Loading Spinner Shown
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Function to clean author names
function cleanAuthorName(author) {
  if (!author) return 'Unknown';
  const [cleanAuthor] = author.split(','); // Splits the author string and takes the first part
  return cleanAuthor;
}

// Show New Quote
function newQuote() {
  loading();
  // Pick a random quote from array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Set author text
  authorText.textContent = cleanAuthorName(quote.author);
  // Check Quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  complete();
}

// Prepare and Display Quotes Initially
function prepareQuotes() {
  loading();
  // No fetch needed, directly use 'localQuotes'
  apiQuotes = localQuotes.map(quote => ({
    ...quote,
    author: cleanAuthorName(quote.author)
  }));
  newQuote();
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
prepareQuotes();
