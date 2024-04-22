# Random Quote Generator

## Project Overview
The Random Quote Generator is a web application designed to inspire users by displaying random motivational quotes each time they interact with the application. Built with HTML, CSS, and JavaScript, this project fetches quotes from an external API and provides a simple, user-friendly interface that allows users to read through various quotes and share them on Twitter if they find them particularly inspiring.

## Features
### Dynamic Quote Loading
+ Fetch Quotes: Utilizes the fetch API to retrieve an array of quotes from https://type.fit/api/quotes, which is stored locally for quick access and dynamic display.
+ Display Quotes: On user request, the application randomly selects a quote to display from the preloaded set.

### User Interaction
+ New Quote Button: Allows users to load a new quote randomly selected from the available set without reloading the page.
+ Tweet Quote: Provides functionality to tweet the current quote directly from the application, using Twitter's Web Intent API to open a new tweet pre-populated with the quote and its author in a new browser tab.

### Responsive UI
+ Loading Spinner: Enhances user experience by displaying a spinner while quotes are being fetched or during any processing delay.
+ Adaptive Text Styling: Dynamically adjusts the style of the quote text based on its length for improved readability.

## Technical Implementation
The application is structured around vanilla JavaScript with major functions handling API interactions, UI updates, and user events. Error handling is robust, with retries on API fetch failures to ensure reliability.

### Key Functions
+ loading(): Activates the loading spinner.
+ complete(): Hides the loading spinner and reveals the quote container.
+ newQuote(): Randomly selects a quote and updates the DOM elements accordingly.
+ getQuotes(): Fetches quotes from the API and initializes the quote display.
+ tweetQuote(): Constructs a URL for tweeting the current quote and opens it in a new tab.

![image](https://github.com/chavez62/QuoteGen/assets/67764701/1b302ebc-5a95-44c0-9faf-88c77f4fab4d)


