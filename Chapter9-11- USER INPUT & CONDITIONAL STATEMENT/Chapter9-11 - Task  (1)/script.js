// 1.

var cityName = prompt("Enter Your City Name");
var city = cityName.slice(1);
city = city.toLowerCase();
var FirstChar = cityName.slice(0,1);
FirstChar=FirstChar.toUpperCase();

cityName =FirstChar+city;
if(cityName === "Karachi"){
    document.write("Welcome to city of lights"); 
}
else{
    document.write("Sorry ! You Are Little Away form city of lights ");
}
