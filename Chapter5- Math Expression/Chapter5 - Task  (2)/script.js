// 1.
var num1, num2, sign;

num1 = +prompt("Enter First Number");
num2 = +prompt("Enter Second Numebr");
sign = prompt("Enter sign of operation you want to perform");

if(sign == "+"){
    var result = num1 + num2;
    document.write("Sum of " + num1 +" and "+ num2 + " is " + result);    
}
else if(sign == "-"){
    if(num1<num2){
        alear("Number 1 should be greater than Number 2 for subtraction");
    }else{
        var result = num1 - num2;
        document.write("Subtration of " + num2 +" from "+ num1 + " is " + result);    
    }
}
else if(sign == "*"){
    var result = num1 * num2;
    document.write("Multiplication of " + num1 +" by "+ num2 + " is " + result);       
}
else if(sign == "/"){
        var result = num1 / num2;
        document.write("Divsion of " + num1 +" by "+ num2 + " is " + result);       
}
else if(sign == "%"){
    var result = num1 % num2;
    document.write("Modules of " + num1 +" divided by "+ num2 + " is " + result);       
}




