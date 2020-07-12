var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
function add(num1,num2){
    var a = num1;
    var b = num2;
    return a+b;
}

document.write("Sum Of " +num1 + " + " +num2 +" : "+add(num1,num2));