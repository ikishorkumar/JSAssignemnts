var str = prompt("Enter a String");
var ltr = prompt("Enter a letter");


function findltr(string,letter) {
    var str = string;
    var ltr = letter;
    var count  = 0;
    for (let index = 0; index < str.length; index++) {
        if (ltr=== str[index]) {
            count += 1;
        }     
    }
   return count    
}
document.write("Input String : "+str);
document.write("<br>Number of "+ltr+"'s : "+findltr(str,ltr));