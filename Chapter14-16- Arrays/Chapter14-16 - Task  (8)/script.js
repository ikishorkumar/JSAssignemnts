var students = ["Micheal", "jhon", "Tony"];
var score = [320,230,480];
var totalscore = 500;

students.forEach(myFunction);

function myFunction(item, index) {
document.write( " <b> Score of " + item  + " is " + score[index] + ". Percentage : " + (score[index]/totalscore)*100 + "&#37; <b><br>"); 
}