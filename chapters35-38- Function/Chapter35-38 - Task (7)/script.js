
var start = +prompt("Enter A Number To Start A Count");
var end = +prompt("Enter A Number To End A Count");


function countPrint(start, end) {
    var a = start;
    var b = end;

    for (let index = a; index <= b; index++) {
        document.write(index + " ");   
    }
    
}

countPrint(start,end);