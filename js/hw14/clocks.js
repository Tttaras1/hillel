let time = {}
let dateNow = {}

function changeTime() {
    let date = new Date();
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');

    let days = document.querySelector('.days');
    let months = document.querySelector('.months');
    let years = document.querySelector('.years');

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

    function getDate(htmlElement, newDate) {
        if (dateNow[newDate] != date[newDate]()) {
            dateNow[newDate] = date[newDate]();
            htmlElement.innerHTML = setNum(dateNow[newDate]) +
                `${(htmlElement == years)
                    ? ''
                    : '.'}`;
        }
    }
    getTime(hours, 'getHours');
    getTime(minutes, 'getMinutes');
    getTime(seconds, 'getSeconds');


    getDate(days, 'getDay');
    getDate(months, 'getMonth');
    getDate(years, 'getFullYear');
    setTimeout(changeTime, 1000)
}
changeTime()

