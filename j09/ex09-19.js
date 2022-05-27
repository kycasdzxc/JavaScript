// or  : 둘 중 하나라도 true면 결과가 true
// and : 둘 중 하나라도 false면 결과가 false

console.log('Cat' || 'Dog');
console.log(false || 'Dog');
console.log('Cat' || false);

console.log('Cat' && 'Dog');
console.log(false && 'Dog');
console.log('Cat' && false);

function run(x, y) {
    console.log(`x : ${x}, y : ${y}`)
    return x + y;
}

var result = run(10);
console.log(result);

// 함수타입의 리턴
function outer() {
    return function () {
        return 10;
    }
}

console.log(outer()());

// 함수타입과 파라미터
function f(t) {
    t();
}
function f2() {
    console.log("abcd");
}
f(f2);