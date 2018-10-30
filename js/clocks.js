function clockStart() {
    let date = new Date();
    let hours;
    let minutes;
    let seconds;
    let container = document.getElementById('clocks');

    function timeNow(typeOfDate) {
        return (typeOfDate < 10)
            ? '0' + typeOfDate
            : typeOfDate;
    }

    function changeTime(time, getTime) {
        if (time != getTime) {
            time = getTime;
            time.innerHtml = timeNow(time)
        }
        time = date.getTime();
    }
    changeTime(hours, date.getHours());
    changeTime(minutes, date.getMinutes());
    changeTime(seconds, date.getSeconds());
    setTimeout(clockStart, 1000)
}

let timerId = null;

function Start() {
    timerId = setInterval(clockStart, 1000);
}
function End() {
    clearInterval(timerId);
    console.log(timerId)
}