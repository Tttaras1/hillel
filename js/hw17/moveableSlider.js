let moveableSlider = new Slider();
moveableSlider.setImages('moveableSlider__item');
moveableSlider.setContainer('.moveableSlider__container');
moveableSlider.cloneLastImg();
let sliderTimerId;
moveableSlider.start = function () {
    moveableSlider.moveLeft();
    sliderTimerId = setTimeout(moveableSlider.start, 2000);
}
Array.prototype.forEach.call(moveableSlider.images, function (item, i) {
    item.title = 'the cutiest dog' + i;
})
moveableSlider.start()
moveableSlider.container.addEventListener('mouseover', () => clearTimeout(sliderTimerId))
moveableSlider.container.addEventListener('mouseout', moveableSlider.start)

document.querySelector('#qwe').addEventListener('click', moveableSlider.moveLeft)
document.querySelector('#rty').addEventListener('click', moveableSlider.moveRight)

let sliderWithIndicators = new Slider();
sliderWithIndicators.setImages('secondSlider__item');
sliderWithIndicators.setContainer('.secondSlider__container');
sliderWithIndicators.moveOnTarget = function (event) {
    let picture = event.target.getAttribute('slidenum') - 1;
    if (picture >= 0) {
        for (let i = 0; i < sliderWithIndicators.images.length; i++) {
            document.querySelectorAll('.navigation__dot')[i].classList.remove('navigation__dot--active');
        }
        event.target.classList.add('navigation__dot--active');
        Array.prototype.forEach.call(this.images, function (item) {
            item.style = 'left:' + (-900 * picture) + 'px;';
        })
    }
}
sliderWithIndicators.buildIndicators = function () {
    let containerForDots = document.createElement('div');
    let referenceElement = document.querySelector('.students');
    containerForDots.classList.add('navigation');
    document.querySelector('#HW_17').insertBefore(containerForDots, referenceElement);
    containerForDots.addEventListener('click', () => sliderWithIndicators.moveOnTarget(event));
    Array.prototype.forEach.call(this.images, function (item, i) {
        let span = document.createElement('span');
        span.classList.add('navigation__dot');
        containerForDots.appendChild(span);
        span.setAttribute('slidenum', i + 1);
    })
    containerForDots.querySelector('.navigation__dot').classList.add('navigation__dot--active')
}
sliderWithIndicators.buildIndicators()