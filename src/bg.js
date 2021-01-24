const body = document.querySelector("body");

const IMG_NUMBER = 11;

function generateRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function paintImage(imgNumber) {
    console.log(body);
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`
    image.classList.add('bgImage');
    body.prepend(image);
}

function bgInit() {
    const randNumb = generateRandom();
    paintImage(randNumb);
}

bgInit();