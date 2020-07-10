// 1.

var inputchar = prompt("Enter Any Character or number");
var asccii = inputchar.charCodeAt(0);
if(asccii >= 65 && asccii <= 90 ){
    document.write("You Have Enterd UperCase Charater"); 
}
else if(asccii  >= 97 && asccii <= 122 ){
    document.write("You Have Enterd LowerCase Charater"); 
}
else if(asccii >= 46 && asccii <= 57 ){
    document.write("You Have Enterd a Number"); 
}

else{
    document.write("you must have enterd sign or some symbol");
}
 