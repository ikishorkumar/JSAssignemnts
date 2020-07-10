// a.
var inputNumber = +prompt("Enter a  number");
var inputchar = inputNumber.toString();
var firstChar = inputchar.slice(0,1);
var charcode = firstChar.charCodeAt(0);

if(charcode >= 49 && charcode<= 57){
    document.write("It is positive number");
}
else if(charcode === 53 ){
    document.write("It is positive number");
}
else if(charcode ===45){
    document.write("It is negative number");
}
else if(charcode ===48){
    document.write("It's 0 ");
}
else {
    document.write("Please Enter a number");
}
