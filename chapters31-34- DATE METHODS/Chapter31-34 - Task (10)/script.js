var Last = new Date("Sat Dec 05 2015 22:50:16");
var first = new Date("Jan 1, 2015");

var lastmili = Last.getTime();


var firstmili = first.getTime();

var diff = lastmili-firstmili;

var seconds = Math.round(diff/(1000));
document.write(" On Refrence date : "+Last + ", <br>"+seconds + " Seconds have been passed Since 1st Jan 2015");