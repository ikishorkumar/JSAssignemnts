var tableNumber = +prompt("Enter Number of table you want to print");
document.write(" <b> Table of "+ tableNumber + " </b> <br> <br>");
for(let i = 1 ; i <= 10 ;i ++){
    document.write( tableNumber + " x " + i + "   : "+ tableNumber*i +" <br>")
}