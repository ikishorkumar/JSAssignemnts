var currentDate = new Date();
var NextHour = new Date(currentDate.getFullYear(),currentDate.getMonth(), currentDate.getDate(),currentDate.getHours()+1,currentDate.getMinutes());
document.write(" Current Date : "+NextHour + ", <br> After 1 hour it was : "+currentDate  );