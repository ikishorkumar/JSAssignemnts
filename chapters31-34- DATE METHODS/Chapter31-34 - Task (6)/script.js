
var day = new Date();
var miliSec = day.getTime();
document.write("Current Date: " + day);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + miliSec);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + (miliSec/1000)/60);