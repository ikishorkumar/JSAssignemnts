// 1.
var number = +prompt("Enter number of table You want to Print");
let number2 = 5;
if (number ==""){
    document.write("<b> Table of " + number2+"</b> <br> <br>");
     for(let i = 1; i <=10 ;i++){
        document.write(number2 + " x " + i +" : "+number2*i +"<br>");
     }
     
 }
 else if (number ==" "){
    document.write("<b> Table of " + number2+"</b> <br> <br>");
    for(let i = 1; i <=10 ;i++){
       document.write(number2 + " x " + i +" : "+number2*i +"<br>");
    }
}
else{
    document.write("<b> Table of " + number+"</b> <br> <br>");

    for(let i = 1; i <=10 ;i++){
       document.write(number + " x " + i +" : "+number*i +"<br>");
    }
    
}
