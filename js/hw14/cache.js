let cache = {};
function sum(arg1, arg2) {
    return arg1 + arg2;
}

function cachedFunction(arg1, arg2) {
    let id = [arg1, arg2];
    if (cache[id] || cache[id.reverse()]) {
        console.log('cached')
        return console.log(cache[id] || cache[id.reverse()])
    } else {
        console.log('notcached')
        cache[id] = sum(arg1, arg2)
        return console.log(cache[id]);
    }
}