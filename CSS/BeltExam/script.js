var Hide = document.querySelector("#Alert")

function setActive() {
    Hide.remove();
}

function displayAlert(MessageAlert) {
    alert(MessageAlert);
}

var Img = document.querySelector("#SwichImg")
var RandomImg = ["cactus-s.jpg","aloe-m.jpg","aloe-s.jpg","aeonium-s.jpg","echeveria-s.jpg"];

function switchImp() {
    Img.src = RandomImg[Math.floor(Math.random()*5)];  
}