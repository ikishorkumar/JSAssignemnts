
// Array Litterla Method 
var names = [];

// JS Object Notation Method 
var namesArray = new Array();

// string array
var fruits = ["Mango", "pineApple"];

// string array
var numbers = [1,2,3,4,9];

var boolean =[false,true];

var mixed = [1,"Mango",2,"Apple"];

var qualifications =["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("<b>Qualifications:</b> <br> <br> ");
for(i=0;i<qualifications.length;i++){
    document.write((i+1) +") "+ qualifications[i] +"<br>");
}