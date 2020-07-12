var num = +prompt("Enter A Number");


function calculate(num) {

    var a = num;
    var fac = num;
    if(num === 0){
        fac = 1;
    }
    else{
        for (let index = num-1; index > 0; index--) {
            fac = fac * index;   
        }
    }
    return fac;
    
}

document.write("Factorial of "+num+"! is : "+calculate(num));