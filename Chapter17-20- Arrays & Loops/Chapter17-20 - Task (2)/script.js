var students = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];
for (let index = 0; index < students.length; index++) {
    
    for (let index1 = 0; index1 < (students[index]).length; index1++) {
        document.write((students[index][index1]) +" ");
    }
    document.write("<br>");

}