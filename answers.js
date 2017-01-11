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

// function numberOp(action, numOne, numTwo){
//     if( action === "add"){
//         return numOne + numTwo;
//     } else if ( action === "subtract"){
//         return numOne - numTwo;
//     } else if ( action === "mult"){
//         return numOne * numTwo;
//     } else if ( action === "div"){
//         return numOne / numTwo;
//     } else {
//         return 0;
//     }
// }

// console.log(numberOp("add", 3, 4));
// console.log(numberOp("subtract", 30, 4));
// console.log(numberOp("mult", 3, 4));
// console.log(numberOp("div", 8, 4));

//Write a function that takes a string and a number, 
//and returns the string repeated that many number of times. 
//Test your function with various inputs.

// function repeatStr(str, num){
//     for(var i = 0; i < num; i++){
//         console.log(str);
//     }
// }

// repeatStr("text", 3);

//Write a function that uses a for loop to print the numbers from 1 to 10 inclusively.

// function oneToTen(){
//     for(var i = 1; i < 11; i++){
//         console.log(i);
//     }
// }

// oneToTen();

//Write a function that uses a for loop to print the numbers from 1 to 10 inclusively, 
//but as words ("one", "two", ...). As an extra challenge, 
//try to find a solution that does not use an if/else:

// function countFunc(){
//     for(var i = 1; i < 11; i++){
//         if ( i === 1 ){
//             console.log("one");
//         } else if ( i === 2){
//             console.log("two");
//         } else if ( i === 3){
//             console.log("three");
//         } else if ( i === 4){
//             console.log("four");
//         } else if ( i === 5){
//             console.log("five");
//         } else if ( i === 6){
//             console.log("six");
//         } else if ( i === 7){
//             console.log("seven");
//         } else if ( i === 8){
//             console.log("eight");
//         } else if ( i === 9){
//             console.log("nine");
//         } else {
//             console.log("ten");
//         }
//     }
// }

// countFunc();

//Write a function that uses a for loop to print the numbers from 1 to 10 inclusively, 
//but for each number, print it that many number of times:

// function loopNum(){
    
//     for(var i = 1; i < 11; i++){
//         for(var j = 0; j < i; j++){
//             console.log(i);
//         }
//     }
// }

// loopNum();

//Write a function that takes a string, and returns the reverse of that string. 
//For example, if you pass the function the string “hello”, it should return “olleh”. 
//Test your function on a few inputs, including the empty string.

// function reverseStr(sentence){
//     return sentence.split("").reverse().join("");
// }

// console.log(reverseStr("montreal"));
// console.log(reverseStr("Decode"));
// console.log(reverseStr(""));


//Write a function that takes a number and returns the factorial of a number. 
//The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. 
//Test your input on a few numbers, including negative numbers.

// function factor(num){
//     var tmp = 1;
//     while (num > 1){
//         tmp *= num;
//         num--;
//     }
//     return tmp;
// }

// console.log(factor(7));
// console.log(factor(0));
// console.log(factor(-5));

//Write a function that takes a phrase as a string, and returns the longest word 
//in that phrase. If the phrase contains more than one such word, 
//return the first occurrence. Test your function on a few inputs.

// function longWord(sentence){
//     var tmp = sentence.split(" ");
//     var fin = 0;
//     var sol;
    
//     for(var i = 0; i < tmp.length - 1; i++){
//         if(tmp[i].length > fin ){
//             fin = tmp[i].length;
//             sol = tmp[i];
//         }
//     }
//     return sol;
// }

// console.log(longWord("hello universe this is a sentence"));
// console.log(longWord("hello world this is a word"));
// console.log(longWord("hi country this is a number"));

//Write a function that takes a phrase, and returns the same phrase with 
//every word capitalized. For example, if you pass your function "hello world", 
//it should return "Hello World" and if you pass it "HELLO WORLD" or even 
//"HeLLo WoRLD", it will also return "Hello World". Test your function of a few inputs.

// function capitalSent(sent){
//     sent = sent.toLowerCase().split(" ");

//     for(var i = 0; i < sent.length; i ++){
//         sent[i] = sent[i].charAt(0).toUpperCase() + sent[i].slice(1);
//     }
//     console.log(sent = sent.join(" "));
// }

// // console.log(capitalSent("HellO WorLd this iS a seNtEnce"));
// capitalSent("HellO WorLd this iS a seNtEnce");
// capitalSent("HellO uNIverSe this iS a WOrd");
// capitalSent("HellO CouNtRy this iS a NumBEr");

//Write a function that takes an array and returns the largest number of the array. 
//Test your function on a few inputs.

// function maximum(arr){
//     arr = arr.sort(function(a, b){
//         return b - a;
//     })
//     console.log(arr[0]);
// }

// // console.log(maximum([12, 34, 56, 78]));
// maximum([12, 34, 56, 78]);
// maximum([12, 3334, 526, 7]);
// maximum([129, 434, 5556, 738]);

//Write a function that takes an array, and returns a filtered array. 
//The filtered array should only contain the truthy values from the initial array. 
//Hint: there is an array method called filter that can help you with this :)

// function truth(arr){
//     arr = arr.filter(function(item){
//         return Boolean(item) === false;
//     });
//     return arr;
// }

// console.log(truth([false, null, undefined, NaN, "Aurelien", -8, 0, true, 1, 19]))

//Write a function that takes an array of numbers, 
//and returns the sum of all the numbers in the array.

function sumAll(arr){
    return arr = arr.reduce(function(a,b) {return a + b});
}

console.log(sumAll([12, 23, 34, 45]));
