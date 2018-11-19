let moveableSlider = new Slider();
moveableSlider.setImg('.moveableSlider__item');
moveableSlider.setCont('.moveableSlider__container');
moveableSlider.center();
Array.prototype.forEach.call(moveableSlider.images, function (item, i) {
    item.title = 'cute dog ' + i;
})
moveableSlider.start = function () {
    moveableSlider.right();
    setTimeout(moveableSlider.start, 2000)
}
moveableSlider.start()

let secondSlider = new Slider();
secondSlider.setImg('.secondSlider__item');
secondSlider.setCont('.secondSlider__container');
secondSlider.center();