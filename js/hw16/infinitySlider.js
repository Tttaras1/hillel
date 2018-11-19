function Slider() {
    let pos;
    let count;
    let img;
    let cont;
    this.setImg = function (string) {
        this.images = document.querySelectorAll(string);
        img = string;
    }
    this.setCont = function (string) {
        this.container = document.querySelector(string);
        cont = string;
    }
    this.center = function () {
        Array.prototype.forEach.call(this.images, function (item) {
            item.style.left = '-900px'
        })
    }
    this.left = function () {
        pos = -1800;
        Array.prototype.forEach.call(this.images, function (item) {
            item.style = 'left:' + pos + 'px;';
        })
        setTimeout(this.move, 400, 'left');
    }
    this.right = function () {
        pos = 0;
        Array.prototype.forEach.call(this.images, function (item, i) {
            item.style = 'left:' + pos + 'px;';
        })
        setTimeout(this.move, 400, 'right');
    }
    this.move = function (direction) {
        this.container = document.querySelector(cont);
        this.images = document.querySelectorAll(img);
        if (direction == 'left') {
            pos = -900;
            count = 0;
            this.container.appendChild(this.images[count]);
        } else {
            pos = -900;
            count = this.images.length - 1;
            this.container.insertBefore(this.images[count], this.images[0]);
        }
        
        Array.prototype.forEach.call(this.images, function (item) {
            item.style = 'left:' + pos +'px; transition: none;';
        })
    }
}


infSlider = new Slider();

infSlider.setImg('.infinitySlider__item');
infSlider.setCont('.infinitySlider__container');
infSlider.start = function () {
    infSlider.right();
    setTimeout(infSlider.start, 2000)
}
infSlider.center();
infSlider.start();




