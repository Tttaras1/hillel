function Slider() {
    let pos = 0;
    let ths = this;
    this.setImages = function (selector) {
        this.images = document.getElementsByClassName(selector);
    }
    this.setContainer = function (selector) {
        this.container = document.querySelector(selector);
    }
    this.cloneLastImg = function () {
        let clonePic = this.images[this.images.length - 1].cloneNode(true);
        this.container.insertBefore(clonePic, this.images[0]);
    }
    this.checkPictureLeft = function () {
        if (pos == 0) {
            pos = -(this.images.length - 1) * 900;
            Array.prototype.forEach.call(this.images, function (item) {
                item.style = 'left:' + pos + 'px; transition: none;';
            })
        }
    }
    this.checkPictureRight = function () {
        if (pos == -(this.images.length - 1) * 900) {
            pos = 0;
            Array.prototype.forEach.call(this.images, function (item) {
                item.style = 'left:' + pos + 'px; transition: none;';
            })
        }
    }
    this.moveElements = function () {
        Array.prototype.forEach.call(ths.images, function (item) {
            item.style = 'left:' + pos + 'px;';
        })
    }
    this.moveLeft = function () {
        ths.checkPictureLeft();
        pos += 900;
        setTimeout(ths.moveElements, 100)
    }
    this.moveRight = function () {
        ths.checkPictureRight();
        pos -= 900;
        setTimeout(ths.moveElements, 100)
    }
}

let infinitySlider = new Slider();
infinitySlider.setImages('infinitySlider__item');
infinitySlider.setContainer('.infinitySlider__container');
infinitySlider.cloneLastImg();
infinitySlider.start = function () {
    infinitySlider.moveLeft();
    setTimeout(infinitySlider.start, 2000)
}
infinitySlider.start()