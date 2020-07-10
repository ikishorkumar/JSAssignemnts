
    var junckFood = "PIZZA";
    var  food = junckFood.split("");
    
    var pattern = "";
   
    for ( let i = food.length   ; i > 0 ; i--) {
        for (let j = 0 ; j < i ; j++) {
            pattern = pattern.concat(food[j]);                
        }  
        pattern = pattern.concat("\n");
    }    
    
    alert(pattern);