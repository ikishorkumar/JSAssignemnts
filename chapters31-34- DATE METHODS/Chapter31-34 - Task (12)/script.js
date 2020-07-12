var currentDate = new Date();
var NextHour = new Date(currentDate.getFullYear()-100,currentDate.getMonth(), currentDate.getDate(),currentDate.getHours()+1,currentDate.getMinutes());
document.write(" Current Date : "+currentDate + ", <br> 100 years Back it was : "+NextHour  );