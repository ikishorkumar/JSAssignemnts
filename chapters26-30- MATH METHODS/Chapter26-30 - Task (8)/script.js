var secNum = Math.floor((Math.random()*10)+1);
var num = +prompt("Enter Number to guess");
if (secNum === num) {
    document.write("Congratulations You Win the Game");

}
else{
    document.write("Try Again !");
}
