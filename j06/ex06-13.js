var first ="예찬";
var last = "김";

console.log("제 이름은 " + last + " " + first + "입니다.");
console.log("제 이름은 ${last} ${first} 입니다.");
console.log(`제 이름은 ${last} ${first} 입니다.`);

console.log(`1234 * 567 = ${1234 * 567}`)

var tmp;

console.log(!!10);

// true, false
// 0 > false

for(var i = 5 ; i-- ; ) {
    console.log(i);
}

console.log("=======================================");
console.log(10, !!10);
console.log(0, !!0);
console.log("abcd", !!"abcd");
console.log("", !!"");
console.log({}, !!{});
console.log([], !![]);
console.log(null, !!null);
console.log(undefined, !!undefined);
console.log(function() {}, !!function() {});

console.log("=======================================");
var num1 = 10; // number
var num2 = new Number(10);  // object

console.log(num1 == num2);
console.log(num1 === num2 / 1);

console.log(5 == '5');
console.log(5 === '5');
console.log(5 == true);

// 문자열 >> 숫자

var str = "1234";
var num = Number(str);
var bool = Boolean(str);

console.log(num, typeof num);
console.log(bool, typeof bool);

// 숫자 >> 문자
var str2 = String(num);

// 숫자 >> 불린
// 문자열 >> 불린
var bool = Boolean(str);

// 불린 >> 숫자 :: /1
// 불린 >> 문자열 :: +""

console.log(true / 1);
console.log(false / 1);

console.log(undefined / 1);
console.log(null / 1);
console.log({} / 1);
console.log(function() {} / 1);

console.log("==========================================")
console.log(-0 === +0);
console.log(Object.is(-0, +0));
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

// 연산자 : 피연산자의 타입, 연산결과의 타입

console.log("abcd" > 1);
console.log(1 < "abcd");
console.log("abcd" && 1);
console.log(1 && "abcd");

var a = 1 ? 2 : 3;
console.log(a);

console.log("==========================================")
var x, y, z;
a = (x = 1, y = 2, z = 3);
a = ("a", "b", 5);
console.log(a);

console.log((-5) ** 2);

console.log("==========================================")

var obj = {x : 1, y : 2};
obj.z = 3;
console.log(obj);
delete obj.z;
console.log(obj);

console.log('z' in obj);
console.log('x' in obj);

var arr = [1,2,3,4,5];

for(var i in arr) {
    console.log(arr[i])
}
for(var i in obj) {
    console.log(obj[i])
}