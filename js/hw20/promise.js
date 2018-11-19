let progressBar = document.querySelector('.progressBar');
let pictures = document.querySelectorAll('.promiseEx__img');
let containers = document.querySelectorAll('.promiseEx');
let head = document.getElementsByTagName('h2');
let i = 0;
let k = 0;
let n = 0;
let check = false;
function checker() {
    console.log(123)
}
function removeImg() {
    pictures[i].style = 'width: 0px;height: 0px;margin:0;padding:0';
    i++;
    console.log(i)
}
function removeCont(count) {
    containers[count].style = 'width: 0px;height: 0px;margin:0;padding:0';
    return k++;
}
function removeHead(count) {
    head[count].style = 'height: 0px;';
    return n++;
}
let promise = new Promise(function (resolve, reject) {
    resolve();
});


promise
    .then(() => {
        Promise.resolve(removeImg())
    })
    .then(() => {
        Promise.resolve(pictures[0].addEventListener('transitionend', removeImg))
    })
    .then(() => {
        Promise.resolve(pictures[1].addEventListener('transitionend', () => pictures[2].style = 'width: 0px;height: 0px;margin:0;padding:0'))
    });