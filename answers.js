//this is a comment 

//Write a function that takes a string and returns the first character of the string. 
//Test your function on a few inputs, including the empty string.

function firstChar(word) {
    word = word.split("");
    return word[0];
}

// console.log(firstChar("decode"));
// console.log(firstChar("Montreal"));
// console.log(firstChar(""));

//Write a function that takes a string and returns the last character of a string. 
//Test your function on a few inputs, including the empty string.

function lastChar(word){
    word = word.split("");
    return word[word.length - 1];
}

// console.log(lastChar("decode"));
// console.log(lastChar("Montreal"));
// console.log(firstChar(""));

//Write a function that takes a string and a number, 
//and returns the character at the position represented by the number. 
//The indexing of number should start at 0. 
//Test your function on a few inputs, including the empty string.

// function locate( str, num ){
//         return str.charAt(num);
// }

// console.log(locate("decode", 3));
// console.log(locate("Montreal", 4));
// console.log(locate(""));

//Write a function that takes two numbers and adds them together. Test your function on a few inputs. 
//Write in the comments what happens when you pass something other than a number to your function.

function add(a, b){
    return a + b;
}

console.log(add(4,5));
console.log(add(5,10));

//
console.log(add("text", "num"));