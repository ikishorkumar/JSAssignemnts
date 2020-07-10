var A = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
var input = prompt("Enter name of item to Search in List");
var firstChar = input.slice(0,1);
 firstChar=firstChar.toUpperCase();
var others = input.slice(1);
others=others.toLowerCase();

var newInput = firstChar+others;

for (let index = 0; index < A.length; index++) {
    if(A[index] === newInput){
        document.write( newInput + " is <b>available</b> at index " + index + " in our bakery");
        break;
    }
    else{
        if(index === (A.length-1))
         document.write("We are sorry " + newInput + " is<b> not available</b> in our bakery");
    }
}


 

