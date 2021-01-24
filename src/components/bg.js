{
    const body = document.querySelector("body");

    const IMG_NUMBER = 11;

    const generateRandom = () => {
        const number = Math.floor(Math.random() * IMG_NUMBER);
        return number;
    }

    const paintImage = (imgNumber) => {
        const image = new Image();
        image.src = `images/${imgNumber + 1}.jpg`
        image.classList.add('bgImage');
        body.prepend(image);
    }

    const init = () => {
        const randNumb = generateRandom();
        paintImage(randNumb);
    }

    init();
}

