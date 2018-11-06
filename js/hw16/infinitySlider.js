function InfSlider() {
    let container = document.getElementById('HW_16');
    let slideNumber = 0;
    let slider = document.createElement('div');
    let sliderContainer = document.createElement('ul');
    let sliderContainerList;
    slider.classList.add('infinitySlider');
    document.getElementById('infinitySlider').addEventListener('click', addSlider);
    let imageSrc1 = '../../img/slider1.jpg';
    let imageSrc2 = '../../img/slider2.jpg';
    let imageSrc3 = '../../img/slider3.jpg';
    let imgArr = [imageSrc1, imageSrc2, imageSrc3];
    function addSlider() {
        console.log('succes')
        document.getElementById('HW_16').appendChild(slider);
        slider.appendChild(sliderContainer);
        sliderContainer.classList.add('infinitySlider__container');
        imgArr.forEach(function (item, i) {
            console.log(i + item);
            sliderContainerList = document.createElement('li');
            sliderContainerList.classList.add('infinitySlider__sliderContainer');
            sliderContainerImg = document.createElement('img');
            sliderContainerImg.setAttribute('src', item);
            sliderContainerImg.classList.add('infinitySlider__sliderImage');
            sliderContainer.appendChild(sliderContainerList);
            sliderContainerList.appendChild(sliderContainerImg);
        })

        setTimeout(startSlider, 2000)
    }

    function startSlider() {

    }
}

InfSlider()