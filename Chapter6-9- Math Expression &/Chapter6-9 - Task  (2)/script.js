var a=2, b=1, result;
result = --a - --b + ++b + b--

document.write(" a is : "+a + "<br>");

document.write(" b is : "+b +"<br>");
document.write("Result is : "+result);

// --a = 1
// this means first decrement of 1 form a  so output is 1.
// 1

// --a - --b means decrement of 1 from b first then value is printed.
//  1 - 0 = 1

// --a - --b + ++b = 1 - 0 + 1 = 2
// ++b first increment of 1 in b  is done then value is pritned.

// --a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3
//first the value of b is printed then decrement of 1 is done.

