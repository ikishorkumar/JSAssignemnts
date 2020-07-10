
var colors = ["Green", "Red", "Blue", "Yellow", "Orange"];
var userinputcolor = prompt("Enter color you want");
var userinputindex = prompt("Enter the index you want to add color at");



// function to reduce rewriting of code;

function myFunction() {
        
    // Case Conversion
    var firstChar = userinputcolor.slice(0,1);
    firstChar =firstChar.toUpperCase();

    var others = userinputcolor.slice(1);
    others =others.toLowerCase();
    
    var newuserinput =firstChar+others;
    var name = newuserinput.toString();

    document.write( "Postion of Array Statrs with 1 , <br> <br> Array Before Updation :  [ "+ colors + " ]");

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
    
    var index1 = userinputindex-1;

    colors.splice(index1,0,removeditems);

    document.write( "<br><br> Your Input is  : "+ removeditems );

    document.write( " <br><br> Position of Your Input is  : " + (index1 +1));
    document.write( "<br><br> Array After Updation : [ "+ colors + " ]");


}

// index comparsion


if( userinputindex > colors.length+1){
    var number = (userinputindex -(colors.length+1));
    for(let i = 0; i<number; i++){
        colors.push('" "');
    }
    var my = myFunction();

    
}
else if(userinputindex == 0){
    alert(" please enter number Greater than 0");
    
}

else{
    var my = myFunction();
}

