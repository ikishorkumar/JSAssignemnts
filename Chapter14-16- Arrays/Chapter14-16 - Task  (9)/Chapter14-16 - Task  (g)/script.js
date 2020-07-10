
var colors = ["Green", "Red", "Blue", "Yellow", "Orange"];
var userinputindex = +prompt( "Hint : Index Starts at 1 \n Enter the index you want to delete the items from an Array");
var index1 = userinputindex-1;
var length = colors.length;


// index comparsion

if( length < index1){
    document.write(" Number of element does not exits on that index");
    document.write( "<br> <br> Existing  Array  :  [ "+ colors + " ]");
    
}
else if(userinputindex === 0){
    alert(" Please enter number Greater than 0");   
    
}

else{
    var removeditems;
    var numbersofitems = +prompt("Enter the number of  colors you want to delete from an Array");

    if(length < numbersofitems){
        alert("Number of items does not exists ");
    }
    else{
        document.write( " Array Before Updation :  [ "+ colors + " ]");
        removeditems = colors.splice(index1,numbersofitems);  
        document.write( "<br><br> Removed Elements : [ "+ removeditems + " ]");

        
        document.write( "<br><br> Array After Updation : [ "+ colors + " ]");
    }

}

