let startTime;
let endTime;

function showSize() {
    let date = new Date();
    startTime = date.valueOf()
    setTimeout(checkTimeChanging, 2000);
    
    block = document.querySelector('.header__size');
    function checkTimeChanging() {
        let date = new Date();
        endTime = date.valueOf()
        if (endTime - startTime >= 2000) {
            console.log(document.documentElement.clientHeight);
            console.log(document.documentElement.clientWidth);
            block.textContent = document.documentElement.clientWidth + '*' + document.documentElement.clientHeight;
        }
    }
}

window.addEventListener("resize", showSize);