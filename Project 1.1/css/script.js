
//Here I store the quotes to be called later by the getRandomQuote function
var quotes = [
  {
    quote:'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us',
    source: 'Helen Keller'
  },
      {
    quote: 'Oh since we know dreams are dead, and life turns plans up on their head. I will plan to be a bum so I might just become someone.',
    source: 'Twenty One Pilots'
  },
  {
    quote:'It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all-in which case, you lose by default',
    source:'J.K. Rowling'
  },
  {
    quote:'We are all of us more complicated than the roles we are assigned in the stories other people tell',
    source:'Tara Westover'
  },
  {
    quote:'I do not want to die tomorrow knowing I could have had piece of cake tonight',
    source:'Gabriel Iglesias'
  }
]

//This function is used to randomize which group of objects are pulled from the array

const getRandomQuote = (quotes) => {
    var randomNumber = Math.floor(Math.random() * this.quotes.length);
    return quotes[randomNumber]
}
//This function is used to check which properties are in the quote object and concat them together
//Then the newly formed string will print to the document
function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var message = ' ';
  message = message + '<p class = "quote">' + randomQuote.quote + '</p>';
  message = message + '<p class = "source">' + randomQuote.source + '</p>';
  
  document.getElementById('quote-box').innerHTML = message;
}
printQuote(quotes);

//This preloaded code will listen to the mouse pointer to click on the button created to trigger another quote to be displayed
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
