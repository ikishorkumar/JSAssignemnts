var text = "The quick brown fox jumps over the lazy dog";
var count = 0;
for (let index = 0; index < text.length; index++) {
    if (text.slice(index, index+3) === "The" || text.slice(index, index+3) === "the" ) {
        count+=1;
    }   
}
document.write("Text : "+text + "<br> There are "+count+" Occurence(s) of word 'the'");