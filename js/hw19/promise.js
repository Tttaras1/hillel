let progressBar = document.querySelector('.progressBar');
let pictures = document.querySelectorAll('.promiseEx__img');
let containers = document.querySelectorAll('.promiseEx');
let head = document.getElementsByTagName('h2');
let toogle;
let qweqwe;
document.getElementById('firstB').addEventListener('click', () => startBar(event), {
    once: true
})
document.getElementById('secondB').addEventListener('click', () => startBar(event), {
    once: true
})
function removeImg(i) {
    pictures[i].style = 'width: 0px;height: 0px;margin:0;padding:0';
}
function removeCont(i) {
    containers[i].style = 'width: 0px;height: 0px;margin:0;padding:0';
    containers[i].addEventListener('transitionend', () => {
        containers[i].style.border = '0px';
    })
}
function removeHead(i) {
    head[i].style = 'height: 0px;';
}
function startBar(event) {
    if (event.target.id == 'firstB') {
        toogle = true;
    } else {
        toogle = false;
    }
    document.getElementById('firstB').removeEventListener('click', startBar);
    document.querySelector('.progressBar__inside').style = 'width: 0px';
}

function removeItems(i) {
    pictures[i].addEventListener('transitionend', (event) => {
        event.stopPropagation()
        removeCont(i);
    })
    containers[i].addEventListener('transitionend', (event) => {
        event.stopPropagation()
        removeHead(i)
    })
    head[i].addEventListener('transitionend', () => {
        removeImg(i + 1);
    })

}
let promise = new Promise(function (resolve, reject) {
    resolve(document.querySelector('.progressBar').addEventListener('transitionend', close));
});

function close() {
    if (toogle) {
        promise
            .then(() => {
                Promise.resolve(removeImg(0))
            })
            .then(() => {
                for (let i = 0; i < containers.length; i++) {
                    removeItems(i);
                }
            });
    } else {
        promise
            .then(() => {
                for (let i = 0; i < pictures.length; i++) {
                    removeImg(i);
                }
            })
            .then(() => {
                Promise.resolve(pictures[0].addEventListener('transitionend', (event) => {
                    event.stopPropagation();
                    for (let i = 0; i < containers.length; i++) {
                        removeCont(i);
                    }
                }))
            })
            .then(() => {
                Promise.resolve(containers[0].addEventListener('transitionend', (event) => {
                    event.stopPropagation();
                    for (let i = 0; i < head.length; i++) {
                        removeHead(i);
                    }
                }))
            });
        }
}
