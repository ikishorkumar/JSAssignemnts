var r = prompt("Enter the Radius Circle");


function calcCircumference(radius) {
    var r = radius;
    
   return (2* (Math.PI * r)).toFixed(2);    
}

function calcArea(radius) {
    var r = radius;
   return (Math.PI * (Math.pow(r,2))).toFixed(2);    
}

document.write("<br>Area of circle is : "+calcArea(r));
document.write("<br>Circumference of circle is : "+calcCircumference(r));