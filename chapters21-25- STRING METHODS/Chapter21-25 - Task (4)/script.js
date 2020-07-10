
var number = +prompt("Enter a number to print the mutliplication table");
var length = +prompt("Enter a number to print the mutliplication table");
document.write( "<b> Multiplication table of  " + number + " Length " + length + "</b> <br><br>") ;    

for (let index = 1 ; index <= length ; index++) {
    
    document.write( number + " x " + index + " : " + (index * number) + "<br>");    
}