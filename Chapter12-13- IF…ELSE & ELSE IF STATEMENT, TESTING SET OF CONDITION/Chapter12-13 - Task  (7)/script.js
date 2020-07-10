var userinputtime = +prompt("Enter time in 24 hour format with no demicolon");

if( userinputtime >= 0000 && userinputtime < 1200){
    document.write("Good Morning !");
}
else if( userinputtime >= 1200 && userinputtime < 1700){
    document.write("Good afternoon !");
}
else if( userinputtime >= 1700 && userinputtime < 2100){
    document.write("Good Evening !");
}
else if( userinputtime >= 2100 && userinputtime <= 2359){
    document.write("Good night !");
}