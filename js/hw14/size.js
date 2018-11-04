function showSize() {
    let timerId;
    let block = document.querySelector('.header__size');
    block.textContent = document.documentElement.clientWidth + '*' + document.documentElement.clientHeight;
    window.addEventListener("resize", checkTimer);
    function checkTimer() {
        window.removeEventListener("resize", checkTimer);
        clearTimeout(timerId);
        timerId = setTimeout(putSize, 2000);
        window.addEventListener("resize", checkTimer);
        function putSize() {
            block.textContent = document.documentElement.clientWidth + '*' + document.documentElement.clientHeight;
        }
    }
}

showSize();