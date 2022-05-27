function max() {
    // arguments를 사용해 최대값을 반환
    var ret = arguments[0];

    // for (var i = 1 ; i < arguments.length ; i++) {
    //     if(ret < arguments[i]) {
    //         ret = arguments[i]
    //     }
    // }
    for (var i in arguments) {
        if(ret < arguments[i]) {
            ret = arguments[i]
        }
    }
    return ret;
}

console.log(max(10, 3, 20, 55, 23));
console.log(max.length);

const obj = {a : 1};
console.log(obj.__proto__ == Object.prototype);