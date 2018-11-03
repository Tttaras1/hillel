function timer() {
    let container = document.querySelector('.footer__timer');
    let hoursTimer = document.querySelector('.hoursTimer');
    let minutesTimer = document.querySelector('.minutesTimer');
    let secondsTimer = document.querySelector('.secondsTimer');
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timerId;
    function setNum(num) {
        return (num < 10)
            ? '0' + num
            : num
    }

    secondsTimer.textContent = setNum(seconds);
    minutesTimer.textContent = setNum(minutes) + ":";
    hoursTimer.textContent = setNum(hours) + ":";
    container.addEventListener("mouseover", startTimer);
    container.addEventListener("mouseout", stopTimer);
    asd()
    function asd() {
        seconds += 1;
        if (seconds > 59) {
            seconds = seconds - 60;
            minutes += 1;
            minutesTimer.textContent = setNum(minutes) + ":";
        }
        secondsTimer.textContent = setNum(seconds);
        if (minutes > 59) {
            minutes = minutes - 60;
            hours += 1;
            hoursTimer.textContent = setNum(hours) + ":";
        }
        timerId = setTimeout(asd, 1000)
        console.log(hours)
        console.log(minutes)
        console.log(seconds)
    }
    function startTimer() {
        console.log('start');
    }
    function stopTimer() {
        console.log('stop');
        clearTimeout(timerId);
    }
}

timer()