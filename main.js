// Array to make list of qoute dynamic
var allQoute = [
  {
    qoute: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    qoute: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    qoute: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    qoute: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
];

var qouteNumber = -1; //For the first time comparison
var qouteContent = document.getElementById("qouteContent");
var qouteAuthor = document.getElementById("qouteAuthor");

// 1- Generate my qoute just in case user click on buttom
// 2- If user reload, there will not be a qoute till user click on
// 3- Display a qoute while the current qoute not equal the qoute that want to be displayed
// 4- If current qoute equal the qoute that it will be generated, the function will be called again instead of display the same qoute

function generateQuote() {
  var randomVariable = Math.trunc(Math.random() * allQoute.length);
  if (randomVariable === qouteNumber) {
    generateQuote();
  } else {
    qouteNumber = randomVariable;
    qouteContent.innerHTML = `“${allQoute[randomVariable].qoute}”`;
    qouteAuthor.innerHTML = `--${allQoute[randomVariable].author}`;
  }
}
