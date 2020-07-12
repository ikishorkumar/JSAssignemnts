var currentDate = new Date();
var consumerName = "Kishor Kumar";
var monthName = currentDate.getMonth();
var month = ["Janurary", "Feburary","March","April","May","Jun","July","August","September","Octumber","November","December"]
var units = 146;
var unitPrice = 16;
var latePayment = 350;
var netAmount = units * unitPrice;
var  grossAmount = netAmount+ latePayment;

document.write(" <b> K-Electric Bill</b> <br> <br> <br> ");
document.write(" Customer Name : <b>" + consumerName);
document.write(" <br></b> Month :  <b>"+month[monthName]);
document.write(" <br></b> Number of Units :  <b>"+units);
document.write(" <br></b> Charges Per Unit :  <b>" +unitPrice);



document.write("</b><br> <br> <br> Net Amount Payable (within Due Date) <b> : "+ netAmount);
document.write(" <br> </b> Late Payment Surcharges <b> : "+ latePayment);
document.write(" <br></b> Gross Amount Payable (after Due Date) <b> : "+ grossAmount);