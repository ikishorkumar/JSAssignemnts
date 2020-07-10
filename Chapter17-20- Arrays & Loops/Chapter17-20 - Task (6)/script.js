
document.write("<b> Counting </b> <br> ");
for (let index = 0; index < 15; index++) {
    document.write((index+1)+" ");
}

document.write("<br><br> <b> Reverse Counting </b> <br>");
for (let index = 10; index > 0; index--) {
    document.write(index+" ");
}
document.write("<br><br> <b> Even Numbers </b> <br> ");
for (let index = 0; index <= 20; index++) {
    if((index%2)===0){
    document.write(index+" ");
    }
}
document.write("<br> <br><b> Odd Numbers </b> <br> ");
for (let index = 0; index <= 19; index++) {
    if((index%2)!==0){
    document.write(index+" ");
    }
}
document.write("<br><br> <b> Even Series </b> <br> ");
for (let index = 2; index <= 20; index++) {
    if((index%2)===0){
    document.write(index+"k ");
    }
}
