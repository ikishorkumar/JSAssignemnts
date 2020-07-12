var password = prompt("Enter Your Password");
var firstChar = password.slice(0,1);

document.write(" Entered Password : " + password + "<br>");
if (password.length >= 6) {

    if (firstChar >= 0 && firstChar <= 9) {
        document.write("Password can not starts with number");
        document.write("<br>Enter a valid password");                
    }
   
    else{
        var strmatch = password.match(/[a-z]/g);
        var nummatch= password.match(/[0-9]/g);

        if(strmatch && nummatch) {
            document.write("Password matched");
        }
        else{
            document.write("Enter a valid password");
        }   
    }
    
}

else{
    document("Your Password Must be 6 Characters long");
}


