var gender = prompt("Enter Your Gender");
var FirstChar = gender.slice(0,1);
FirstChar = FirstChar.toUpperCase();
var otherChar = gender.slice(1);
otherChar = otherChar.toLowerCase();
gender= FirstChar+otherChar;

if(gender==="Male"){
    document.write("Good Morning Sir");
}
else if(gender ==="Female"){
    document.write("Good Morning Ma’am");
}
else{
    document.write("Hello! Dear.")
}
