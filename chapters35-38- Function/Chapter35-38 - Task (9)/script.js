var w = +prompt("Enter Width of Rectangle");
var h = +prompt("Enter Height of Rectangle");


function area(w, h) {
    var w = w;
    var h = h;
    return (w*h)
}


document.write("1. Arrgument As Variable  <br> Area of Rectangle is "+area(w,h));

document.write("<br><br>2. Arrgument As Value  <br> Area of Rectangle is "+area(w.valueOf(),h.valueOf()));