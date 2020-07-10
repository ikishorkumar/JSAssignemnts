// 1.
var char = prompt("Enter A Character to check it's Vowel or not");

var character = char.toUpperCase();


if(character === "A" || character === "E" || character ==="I" || character === "O" || character ==="U"){
    document.write("True! It's Vowel");
}
else{
    document.write("false ! It's not Vowel");
}