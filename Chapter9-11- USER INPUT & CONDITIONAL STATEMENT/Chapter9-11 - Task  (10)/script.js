var temprature = +prompt("Enter tempture to determine the weather");
if(temprature > 40 ){
    document.write(" It is too hot outside ");

}
else if(temprature > 30 ){
    document.write(" The Weather today is Normal ");

}
else if(temprature > 20 ){
    document.write(" Today’s Weather is cool ");

}
else if(temprature > 10 ){
    document.write("OMG! Today’s weather is so Cool ");

}
else{
    document.write("Stay Near to Fire or Wear Wam Cloths");
}