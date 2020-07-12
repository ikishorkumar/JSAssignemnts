var str = prompt("Enter a Sentece");

function findlong(string) {
    var str = string;
    var splitedStr  = str.split(" ");
    var bigCount = 0;
    var num = 0;
    for (let index = 0; index < splitedStr.length; index++) {
        var length = splitedStr[index].length;
        if (length>bigCount) {
            bigCount = length;
            num = index;
            length = 0;
        }     
    }
    return (splitedStr[num] + " <br> Length is " + bigCount);
       
}
document.write("Input String : "+str);
document.write("<br>Longest Word : "+findlong(str));