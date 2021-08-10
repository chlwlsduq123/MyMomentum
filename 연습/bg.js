const video = document.querySelector("video");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    video.setAttribute('src', `images/${imgNumber+1}.mp4`);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}  

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();