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
    container.addEventListener("mouseenter", stopTimer);
    container.addEventListener("mouseleave", startTimer);
    window.addEventListener("keydown", resetTimer);
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
            minutesTimer.textContent = setNum(minutes) + ":";
            hours += 1;
            hoursTimer.textContent = setNum(hours) + ":";
        }
        timerId = setTimeout(asd, 1000)
    }

    function startTimer() {
        console.log('start timer');
        clearTimeout(timerId);
        timerId = setTimeout(asd, 1000);
    }

    function stopTimer() {
        console.log('stop timer');
        clearTimeout(timerId);
    }

    function resetTimer(e) {
        if (e.keyCode == 27) {
            hours = 0;
            minutes = 0;
            seconds = 0;
            secondsTimer.textContent = setNum(seconds);
            minutesTimer.textContent = setNum(minutes) + ":";
            hoursTimer.textContent = setNum(hours) + ":";
        }   
    }
}

timer()