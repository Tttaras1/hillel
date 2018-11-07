function InfSlider() {
    let sliderArr = ['slider1.jpg', 'slider2.jpg', 'slider3.jpg' ];
    let container = document.querySelector('.infinitySlider');
    let asd;
    changePicture()
    function changePicture() {
        container.style.backgroundImage = "url(../../img/" + sliderArr[0] + ")";
        asd = sliderArr.shift();
        sliderArr[sliderArr.length] = asd;
        setTimeout(changePicture, 2000)
    }
}

InfSlider()