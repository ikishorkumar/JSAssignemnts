var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write( " <br> <br> Array  :  [ "+ arr + " ] <br> <br>" );
var select = document.getElementById("dropdown1");

for(let index = 0; index<= arr.length; index++){
    var dropdown  =document.createElement("option");
    dropdown.text = (index+1) +" . " + (arr[index].valueOf());
    dropdown.value = (arr[index].valueOf());

    select.add(dropdown);

}


 

