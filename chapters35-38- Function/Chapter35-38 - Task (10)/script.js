var string = prompt("Enter a String to check its plaindrome or not");
function check(str) {
    var str  = str;
    var strrev ="";
    
    for (let index = str.length-1; index >= 0; index--) {
        strrev += str[index];        
    }
    if (str == strrev) {
        document.write("Its Plaindrome");
    } else {
        document.write("Its not Plaindrome");

    }
    
}

check(string);