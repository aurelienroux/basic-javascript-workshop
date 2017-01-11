var counter = 0;
var guess = prompt("Guess the number");
var rand = (Math.floor(Math.random() * 100) + 1) ;

while(counter < 4){
    if(guess == rand){
        alert("you won! congrats");
        break;
    } else if( guess < rand ){
        guess = prompt("number is higher. guess again");
    } else {
        guess = prompt("number is lower. guess again");
    }
    counter++;

    if(counter == 4){
		alert("sorry, you lost! number was " + rand);
    }
}

console.log(rand);

