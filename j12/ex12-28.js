function multiply(x, y) {
    return x * y;
    console.log('여기까지 실행?');
}

console.log(multiply(3, 5));

function change(d) {
    d.x = 1000;
    console.log(d.x);
}

var d = {x : 10};
console.log(d.x);
change(d);
console.log(d.x);

console.log("=================");

function change2(d) {
    d = 1000;
    console.log(d);
}

var d = 10;
console.log(d);
change2(d);
console.log(d);