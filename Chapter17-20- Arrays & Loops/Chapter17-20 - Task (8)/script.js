var A = [24, 53, 78, 91, 12];
document.write(" <b>Array itmes : </b>"+A +"<br>");

A.sort((a, b) => b - a);
document.write(" <b>The largest number is  : "+A[0]);