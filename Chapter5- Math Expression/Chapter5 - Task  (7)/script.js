// checkout process of e-commerce;

var item1Price = +prompt("Enter Price of item 1");
var item2Price = +prompt("Enter Price of item 2");

var item1Quantity = +prompt("Enter Quantity of item 1");
var item2Quantity = +prompt("Enter Quantity of item 2");

var shippingCharges = +prompt("Enter Shipping Charges");
var totalCharges = (item1Price*item1Quantity)+(item2Price*item2Quantity)+shippingCharges; 

document.write("<b> Shipping Cart </b>" + "<br> Price of item 1 is " + item1Price + "<br> Quantity of item 1 is " + item1Quantity + "<br> Price of item 2 is "+ item2Price + "<br> Quantity of item 2 is " + item2Quantity + "<br> Shipping Charges are " + shippingCharges + "<br> <br> <br> Total Cost of Your Order is " + totalCharges);