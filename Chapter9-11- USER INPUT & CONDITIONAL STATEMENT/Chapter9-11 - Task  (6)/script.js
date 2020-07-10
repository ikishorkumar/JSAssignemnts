var  sub1markObtained = +prompt("Enter the Obtained Marks in English");
var  sub2markObtained = +prompt("Enter the Obtained Marks in Science");
var  sub3markObtained = +prompt("Enter the Obtained Marks in Physics");

var  totalMarksSub1 = +prompt("Enter the Total Marks of English");
var  totalMarksSub2 = +prompt("Enter the Total Marks of Science");
var  totalMarksSub3 = +prompt("Enter the Total Marks of Physics");

var totalmarks = totalMarksSub1+totalMarksSub2+totalMarksSub3;
var obtainedMarks = sub1markObtained+sub2markObtained+sub3markObtained;
var percentage = (obtainedMarks/totalmarks)*100;
document.write("<b>Marks Sheet</b> <br> <br>");

if(percentage >= 80){
    document.write("Total Marks : "+totalmarks+ " <br>" +"Obtained Marks : "+obtainedMarks+ " <br>" +"Percentage : "+ percentage + " &#37; <br>" + "Grade : A-one <br>"+"Remarks : Excellent <br>");

}

else if(percentage >= 70){
    document.write("Total Marks : "+totalmarks+ " <br>" +"Obtained Marks : "+obtainedMarks+ " <br>" +"Percentage : "+ percentage + " &#37; <br>" + "Grade : A <br>"+"Remarks : Good <br>");

}
else if(percentage >= 60){
    document.write("Total Marks : "+totalmarks+ " <br>" +"Obtained Marks : "+obtainedMarks+ " <br>" +"Percentage : "+ percentage + " &#37; <br>" + "Grade : B - one <br>"+"Remarks : You need to improve <br>");

}
else if(percentage < 60){
    document.write("Total Marks : "+totalmarks+ " <br>" +"Obtained Marks : "+obtainedMarks+ " <br>" +"Percentage : "+ percentage + " &#37; <br>" + "Grade : Fail <br>"+"Remarks : Sorry <br>");

}
