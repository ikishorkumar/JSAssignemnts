// 1.
var d = new Date();

var currentYear=d.getFullYear();
var currentYear = parseInt(currentYear);
var birthYear = [1997, 1998];

document.write("<b> Age Calculator </b> <br> " + "<br> Birth Year 1 : " + birthYear[0] + "<br> Birth Year 2 : " + birthYear[1] + " <br> They are either : " + (currentYear-birthYear[0]) + " or " + (currentYear-birthYear[1]));




