var  secretNumber = Math.random();
secretNumber = parseInt(secretNumber*10);

var guessNumber = +prompt("Enter number to guess between 1 to 10");
if(secretNumber === 0){
    secretNumber++;
    if(secretNumber === guessNumber){
        document.write("Bingo! Correct answer ");
    }
}

if(guessNumber === secretNumber ){
    document.write("Bingo! Correct answer ");

}

else if(guessNumber+1 === secretNumber){
    document.write("Close enough to the correct answer");
}
else{
    document.write(" Refresh to try again!")
}