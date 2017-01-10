//this is a comment 

//Write a function that takes a string and returns the first character of the string. 
//Test your function on a few inputs, including the empty string.

function firstChar(word) {
    word = word.split("");
    return word[0];
}

console.log(firstChar("decode"));
console.log(firstChar("Montreal"));
console.log(firstChar(""));

//Write a function that takes a string and returns the last character of a string. 
//Test your function on a few inputs, including the empty string.

function lastChar(word){
    word = word.split("");
    return word[word.length - 1];
}

console.log(lastChar("decode"));
console.log(lastChar("Montreal"));
console.log(firstChar(""));

//Write a function that takes a string and a number, 
//and returns the character at the position represented by the number. 
//The indexing of number should start at 0. 
//Test your function on a few inputs, including the empty string.

