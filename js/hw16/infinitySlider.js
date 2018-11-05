function InfSlider() {
    let container = document.getElementById('HW_16');
    let slideNumber = 0;
    let sliderContainer = document.createElement("div");
    sliderContainer.classList.add('content__infinitySlider');
    document.getElementById('infinitySlider').addEventListener('click', addSlider)
    function addSlider() {
        console.log('succes')
    }

    function startSlider() {
        
    }
}

InfSlider()