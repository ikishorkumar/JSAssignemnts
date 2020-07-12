
var day = new Date();

var time = day.getHours();

if(time >= 0 && time < 12){
    document.write("It's AM");
}
else{
    document.write("It's PM");

}