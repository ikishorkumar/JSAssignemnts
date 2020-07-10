
var colors = ["Green", "Red", "Blue", "Yellow", "Orange"];
var userinput = prompt("Enter color you want at first");
// Case Conversion
var firstChar = userinput.slice(0,1);
firstChar =firstChar.toUpperCase();

var others = userinput.slice(1);
others =others.toLowerCase();
 
var newuserinput =firstChar+others;
var name = newuserinput.toString();

document.write( "Array Before Updation :  [ "+ colors + " ]");


let removeditems;
for (let index = 0; index < colors.length; index++) {

    if(name == (colors[index]).valueOf()){
        removeditems  = colors.splice(index, 1);
        break;
    }
    else{
        removeditems = name;
    }
    
}


colors.unshift(removeditems);

document.write( "<br><br> Your Input is  : "+ removeditems );

document.write( "<br><br> Array After Updation : [ "+ colors + " ]");


