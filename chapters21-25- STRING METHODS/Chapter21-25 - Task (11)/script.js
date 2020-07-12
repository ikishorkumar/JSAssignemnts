var input = prompt("Enter a String");
var firstChar = input.slice(0,1);
firstChar = firstChar.toUpperCase();
var others = input.slice(1);
others = others.toLowerCase();
var titleCase = firstChar+others;

document.write(" User Input : "+input +"<br> Title Case : " + titleCase);

