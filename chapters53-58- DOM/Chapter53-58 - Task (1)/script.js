// var arr = ["/images/others/1.jpg","/images/others/2.jpg"];

var images = [
    'images/others/1.jpg',
    'images/others/2.jpg',
    'images/others/3.jpg',
    'images/others/4.png',
    'images/others/5.jpg',
    'images/others/6.jpg',
    'images/others/7.png',
    'images/others/8.jpg',
    'images/others/9.jpg',
    'images/others/10.jpg',
    'images/others/11.jpg',
    'images/others/12.jpg',
    'images/others/13.jpg',
    'images/others/14.png',
    'images/others/15.jpg'
];
// innerHtml on images  is not working so i did it with append

for (let index = 0; index < images.length; index++) {
    var oneee = document.getElementById('one');
    var e=  document.createElement('img');
    e.src = images[index];
    e.setAttribute('onclick','modelFunction(this);');
    oneee.append(e);
}   

function modelFunction(v) {
    var m = document.getElementById('modal');
    m.setAttribute('class','modal-open');
    m.removeAttribute('class','modal-close');
    m.style.display = 'block';
    document.getElementById('modal-img').src = v.src;
    
}
function onClosedImagModal(){
    var n = document.getElementById('modal');
    n.setAttribute('class','modal-close');
    n.removeAttribute('class','modal-open');
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}

function zoonIn() {
    var d= document.getElementById('para');
    var computedFontSize = window.getComputedStyle(document.getElementById("para")).fontSize;
    var fontSize = parseInt(computedFontSize);
    fontSize = fontSize + 10 + "px";
    d.style.fontSize = fontSize;
}

function zoomOut() {
    var d= document.getElementById('para');
    var computedFontSize = window.getComputedStyle(document.getElementById("para")).fontSize;
    var fontSize = parseInt(computedFontSize);
    fontSize = fontSize-10;
    d.style.fontSize = fontSize+"px";
}