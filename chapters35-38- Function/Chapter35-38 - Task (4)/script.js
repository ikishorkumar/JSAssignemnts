var num1 = +prompt("Enter First Number");
var sign = prompt("Enter Opertaor");
var num2 = +prompt("Enter Second Number");


function calculate(num1,sign,num2) {

    var a = num1;
    var b = num2;
    var oper = sign;

    switch (oper) {
        case "+":
            var c = a+b;
            return c
            break;
        case "-":
            var c = a-b;
            return c
            break;
        case "*":
            var c = a*b;
            return c
            break;
        case "/":
            var c = a/b;
            return c
            break;
        case "%":
            var c = a%b;
            return c
            break;
    
        default:
            break;
    }
    
}

document.write("Result of "+num1+" "+sign+" " +num2+" is "+calculate(num1,sign,num2));