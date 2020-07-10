
var colors = ["Green", "Red", "Blue", "Yellow", "Orange"];
var colorsInput = ["Brown", "White"]
document.write( "Array Before Updation :  [ "+ colors + " ]");

colors.unshift(colorsInput);

document.write( "<br><br> Your Input is  : "+ colorsInput );

document.write( "<br><br> Array After Updation : [ "+ colors + " ]");


