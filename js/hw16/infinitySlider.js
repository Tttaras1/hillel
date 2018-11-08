function Slider(inf, ...images) {
    inf = inf && true;
    function addImageInArr(images) {
        let newElement;
        let newImage;
        let newImageCSS = 'width: 900px; height: 600px;'
        images.forEach(function (item, i) {
            console.log(item, i);
            newElement = document.createElement('li');
            newElement.classList.add('infinitySlider__item');
            CONTAINER.appendChild(newElement);
            // (up) add li element on the page|| (down) add img element with image and inlineStyles
            newImage = document.createElement('img');
            newImage.id = 'pictureWithDog' + i;
            newImage.alt = "dog" + i;
            newImage.src = item;
            newImage.style.cssText = newImageCSS;
            newElement.appendChild(newImage);
        })
    }

    function moveSlider(typeOfSlider) {
        typeOfSlider
            ? infSlider()
            : moveableSlider()
        function infSlider() {
            let pictureContainer = document.getElementsByClassName('infinitySlider__item');
            let copyOfTheFirstCont = pictureContainer[0].cloneNode(true);
            let style;
            copyOfTheFirstCont.getElementsByTagName('img')[0].id = 'LastPictureWithDog';
            CONTAINER.appendChild(copyOfTheFirstCont);
            startSlider()
            function startSlider() {
                style = CONTAINER.getElementsByClassName('infinitySlider__item')[0];
                CONTAINER.appendChild(style);
                setTimeout(startSlider, 2000);
            }
        }

        function moveableSlider() {

        }
    }

    const SLIDER = document.querySelector('.infinitySlider');
    const CONTAINER = document.createElement('ul');
    CONTAINER.classList.add('infinitySlider__container');
    SLIDER.appendChild(CONTAINER);
    addImageInArr(images);
    moveSlider(inf);
}


Slider(true, './img/slider1.jpg', './img/slider2.jpg', './img/slider3.jpg')
