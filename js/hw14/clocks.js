let time = {}
let dateNow = {}

function changeTime() {
    let date = new Date();
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');

    function setNum(num) {
        return (num < 10)
            ? '0' + num
            : num
    }

    function getTime(htmlElement, newTime) {
        if (time[newTime]!= date[newTime]()) {
            time[newTime] = date[newTime]();
            htmlElement.innerHTML = setNum(time[newTime]) +
                `${(htmlElement == seconds)
                    ? ''
                    : ':'}`;
        }
    }
    getTime(hours, 'getHours');
    getTime(minutes, 'getMinutes');
    getTime(seconds, 'getSeconds');
    setTimeout(changeTime, 1000)
}
changeTime()


function changeDate() {
    let date = new Date();
    let days = document.querySelector('.days');
    let months = document.querySelector('.months');
    let years = document.querySelector('.years');

    days.innerHTML = date.getDate() + '.';
    months.innerHTML = date.getMonth() + 1 + '.';
    years.innerHTML = date.getFullYear();
}

changeDate()

