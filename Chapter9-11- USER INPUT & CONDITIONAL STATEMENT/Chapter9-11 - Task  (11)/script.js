var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var sign = prompt("Enter Sign of Operation You Want to Perform ");

if(sign == "+" ){
    document.write(" Result of " + num1 +" + "+num2+ " is : "+(num1+num2));

}
else if(sign == "-" ){
    document.write(" Result of " + num1 +" - "+num2+ " is : "+num1-num2);

}
else if(sign == "*" ){
    document.write(" Result of " + num1 +" x "+num2+ " is : "+num1*num2);

}
else if(sign == "/" ){
    document.write(" Result of " + num1 +" / "+num2+ " is : "+num1/num2);

}
else if(sign == "%" ){
    document.write(" Result of " + num1 +" % "+num2+ " is : "+num1%num2);

}
else{
    document.write("Sorry ! this sign is not in system yet");
}