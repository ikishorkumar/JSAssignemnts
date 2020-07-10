// a.
var correctPassword = "kishorkumar"; 
var userinput = prompt("Enter Your  Password");
if(userinput==""){
    document.write("Please Enter Your Password");
}
else if(userinput === correctPassword){
    document.write("Correct! The password you entered matches the original password");
}
else{
    document.write("Incorrect Password !")
}