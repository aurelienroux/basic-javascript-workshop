// The Fortune Teller

// Challenge: create a file called fortune.js in your Cloud9 project. 
// Running this file should output a random quote from a list of 10 different 
// quotes. Make sure to add/commit this file and push it to your GitHub.

var quotes = [
    "quote1",
    "quote2",
    "quote3",
    "quote4",
    "quote5",
    "quote6",
    "quote7",
    "quote8",
    "quote9",
    "quote10",
    ]
    
var hazard = (Math.floor(Math.random() * 9) + 1);

console.log(quotes[hazard]);