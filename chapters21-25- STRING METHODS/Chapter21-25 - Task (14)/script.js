var A =["cake", "apple pie","cookie", "chips", "patties"] ;
var userInput = prompt("Enter Cookie Name");
var lowerCase = userInput.toLowerCase();
var index = A.indexOf(lowerCase);
if( index < 0){
    document.write(" Sorry  ! " +lowerCase+" is <b>not available </b> in our bakery ");
}
else{
    document.write( lowerCase+" is <b> available </b> at index "+index +" in our bakery ");

}