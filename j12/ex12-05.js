// console.log(add1(3, 5));
// console.log(add2(2, 3));

function add1(x, y) {
    return x + y;
}

var add2 = function(x, y) { // 익명함수 많이 쓰임
    return x + y;
}

var add = (x, y) => x + y;
// var add = (x, y) => { return x + y }; 이게 정석 애로우

console.log(add(3, 5));

console.log(add1(3, 5));
console.log(add2(2, 3));

var result = (function() {
    return "hello world";
})();

console.log(result);

(function test() {
    console.log("test");
}());

test();

function Student(no, name) {
    var n = no;
    var na = name;

    this.getNo = function() {
        return n;
    }
    this.setNo = function(no) {
        n = no;
    }
}

var student = new Student(10, "가가가");
console.log(student.getNo());