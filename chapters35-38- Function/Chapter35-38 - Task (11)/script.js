var str = prompt("Enter a Sentece");

function caseConvert(string) {
    var str = string;
    var splitedStr  = str.split(" ");

    var strUpr =[];
    for (let index = 0; index < splitedStr.length; index++) {
        var first = splitedStr[index].slice(0,1);
        var last = splitedStr[index].slice(1);
        first = first.toUpperCase()
        var word = first+last + " ";
        strUpr += word;     
    }
    strUpr = strUpr.toString()
    return strUpr;
       
}
document.write("Input String : "+str);
document.write("<br>Output String : "+caseConvert(str));