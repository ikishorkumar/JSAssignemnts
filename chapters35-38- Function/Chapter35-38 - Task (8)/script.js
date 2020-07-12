var base = +prompt("Enter A Base Value of Triangle");
var perpendicular = +prompt("Enter A Perpendicular Value of Triangle");


function calculateHypotenuse(base, perpendicular) {
    var b = base;
    var p = perpendicular;
    var h = "";
    function calculateSquare(b,p,h){
            var b= b;
            var p = p;
            var h =h;

            return ((Math.sqrt(Math.pow(b,2)+Math.pow(p,2))).toFixed(2))
    }
    return (calculateSquare(b,p,h))
}


document.write("Hypotinuse &#8776; "+calculateHypotenuse(base,perpendicular));