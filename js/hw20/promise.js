let progressBar = document.querySelector('.progressBar');
let pictures = document.querySelectorAll('.promiseEx__img');
let containers = document.querySelectorAll('.promiseEx');
let head = document.getElementsByTagName('h2');
let toogle;
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
                Promise.resolve(pictures[0].addEventListener('transitionend', (event) => {
                    event.stopPropagation()
                    removeCont(0);
                }))
            })
            .then(() => {
                Promise.resolve(containers[0].addEventListener('transitionend', (event) => {
                    event.stopPropagation()
                    removeHead(0)
                }))
            })
            .then(() => {
                Promise.resolve(head[0].addEventListener('transitionend', (event) => {
                    event.stopPropagation()
                    removeImg(1)
                }))
            })
            .then(() => {
                Promise.resolve(pictures[1].addEventListener('transitionend', (event) => {
                    event.stopPropagation()
                    removeCont(1)
                }))
            })
            .then(() => {
                Promise.resolve(containers[1].addEventListener('transitionend', (event) => {
                    event.stopPropagation()
                    removeHead(1)
                }))
            })
            .then(() => {
                Promise.resolve(head[1].addEventListener('transitionend', (event) => {
                    event.stopPropagation()
                    removeImg(2)
                }))
            })
            .then(() => {
                Promise.resolve(pictures[2].addEventListener('transitionend', (event) => {
                    event.stopPropagation()
                    removeCont(2)
                }))
            })
            .then(() => {
                Promise.resolve(containers[2].addEventListener('transitionend', (event) => {
                    event.stopPropagation()
                    removeHead(2)
                }))
            });
    } else {
        promise
            .then(() => {
                Promise.resolve(removeImg(0), removeImg(1), removeImg(2))
            })
            .then(() => {
                Promise.resolve(pictures[0].addEventListener('transitionend', (event) => {
                    event.stopPropagation();
                    removeCont(0);
                    removeCont(1);
                    removeCont(2);
                }))
            })
            .then(() => {
                Promise.resolve(containers[0].addEventListener('transitionend', (event) => {
                    event.stopPropagation();
                    removeHead(0);
                    removeHead(1);
                    removeHead(2);
                }))
            });
        }
}
