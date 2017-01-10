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

// function add(a, b){
//     return a + b;
// }

// console.log(add(4,5));
// console.log(add(5,10));

// //if Nan, the function concatenates the two inputs
// console.log(add("text", "num"));

//Write a function that takes two numbers and multiplies them together. 
//Test your function on a few inputs. 
//Write in your comments what happens when you pass something other than a number to your function.

// function multiply(a, b){
//     return a * b;
// }

// console.log(multiply(3,4));
// console.log(multiply(5,10));
// //function return Nan
// console.log(multiply("text", "num"));


//Write a function that takes two numbers and a string. 
//If the string is ‘add’, then return the sum of the numbers. 
//If the string is ‘subtract’, return the difference. 
//If the string is ‘mult’, return the product. 
//If the string is ‘div’, return the ratio. Otherwise return 0.

function numberOp(action, numOne, numTwo){
    if( action === "add"){
        return numOne + numTwo;
    } else if ( action === "subtract"){
        return numOne - numTwo;
    } else if ( action === "mult"){
        return numOne * numTwo;
    } else if ( action === "div"){
        return numOne / numTwo;
    } else {
        return 0;
    }
}

console.log(numberOp("add", 3, 4));
console.log(numberOp("subtract", 30, 4));
console.log(numberOp("mult", 3, 4));
console.log(numberOp("div", 8, 4));