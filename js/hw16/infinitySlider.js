function Slider(inf, ...images) {
    inf = inf || false;
    const SLIDER = document.querySelector('.infinitySlider');
    const CONTAINER = document.createElement('ul');
    CONTAINER.classList.add('infinitySlider__container');
    SLIDER.appendChild(CONTAINER);
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
            if (window.getComputedStyle(document.querySelector('#HW_16'), null).getPropertyValue("display") == 'block') {
                let pictureContainer = document.getElementsByClassName('infinitySlider__item');
                let moveableItem = CONTAINER.getElementsByClassName('infinitySlider__item')[0];
                Array.prototype.forEach.call(pictureContainer, function (item) {
                    item.style = "left: -900px"
                });

                moveableItem.addEventListener('transitionend', moveSlide);

                function moveSlide() {
                    CONTAINER.appendChild(moveableItem);
                    Array.prototype.forEach.call(pictureContainer, function (item) {
                        item.style = "left: 0px; transition: none;"
                    });
                    moveableItem.removeEventListener('transitionend', moveSlide)
                }
            }

            setTimeout(infSlider, 2000);
        }

        function moveableSlider() {

        }
    }
    addImageInArr(images);
    moveSlider(inf);
}


let infSlider = new Slider(true, './img/slider1.jpg', './img/slider2.jpg', './img/slider3.jpg');
infSlider;

