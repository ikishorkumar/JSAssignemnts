var integer1 = +prompt("Enter 1st Number");
var integer2 = +prompt("Enter 2nd Number");

if(integer1=== integer2){
    document.write("Numbers Are Equals");
}
else if(integer1 < integer2){
    document.write(  integer2 +" is Lager than " + integer1);
}
else{
    document.write(  integer1 +" is Lager than " + integer2);
}
