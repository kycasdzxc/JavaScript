var binary = 0b1000001;
var octal = 0101;
var hex = 0x41;
console.log(binary, octal, hex);
console.log(binary == octal);
console.log(binary == hex);

// 정수, 실수 구분없음
console.log(1 == 1.0); // true
console.log(3 / 2);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY == 1234/0);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

console.log(3/0);
console.log(-3/0);
console.log(0/0);
console.log(1 * "abcd");

console.log(Number.NaN == Number.NaN); // false 비교불가 값

console.log("===================================");
// var string = hello; // hello의 변수의 값을 string에 대입

var temp = `temp literal`;
console.log(temp);

var str = 'abcd efg\nabc';
console.log(str);