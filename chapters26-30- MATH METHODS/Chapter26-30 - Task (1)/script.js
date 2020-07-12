var num=+prompt("Enter a positive Number");
var sign = Math.sign(num);
if (sign == 1 ){
    document.write(" Number : "+num);
    document.write(" <br> Round off Value : "+Math.round(num));
    document.write(" <br> Floor Value : "+Math.floor(num));
    document.write(" <br> Ceil Value : "+Math.ceil(num));
}
else{
    document.write("Enter Positive Number Only");    
}
