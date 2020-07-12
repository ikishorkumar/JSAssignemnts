var startRam = new Date("Monday April 12 2021");
var firstRam = new Date("June 18, 2015");

var milisecStart = startRam.getTime();


var milisecFirst = firstRam.getTime();

var diff = milisecStart-milisecFirst;

var days = Math.round(diff/(1000*60*60*24));
document.write(days + " Days have been passed Since 1st Ramdan 2015");