var userName = prompt("Enter your user name");
for (let index = 0; index < userName.length; index++) {
    if (userName[index].charCodeAt() === 33 || userName[index].charCodeAt() === 44 || userName[index].charCodeAt() === 46 || userName[index].charCodeAt() === 64) {
        alert(" Please Enter Valid User Name");
        break;
    }
    
}

