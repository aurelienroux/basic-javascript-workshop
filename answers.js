//this is a comment 

//Write a function that takes a string and returns the first character of the string. 
//Test your function on a few inputs, including the empty string.

function firstChar(word) {
    word = word.split("");
    return word[0];
}

console.log(firstChar("decode"));
console.log(firstChar("Montreal"));