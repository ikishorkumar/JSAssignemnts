// a.
var colorName = prompt("Enter Color's Of  Name of Trafic Light");
var firstChar = colorName.slice(0,1);
firstChar = firstChar.toUpperCase();
var otherChar = colorName.slice(1);
otherChar = otherChar.toLowerCase();
colorName= firstChar+otherChar;

if(colorName ==="Red"){
    document.write("Hello  You Must Stop");
}
else if(colorName ==="Green"){
    document.write("yaho! Move Now");
}
else if(colorName ==="Yellow"){
    document.write("Hey Be Ready To Move");
}
else {
    document.write("Please Enter Correct Name");
}