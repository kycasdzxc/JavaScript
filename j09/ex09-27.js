var num1 = 0;
var num2 = new Number(0);

console.log(typeof num1, num1);
console.log(typeof num2, num2);

console.log(!!num1);
console.log(!!num2);

console.log(num1 == num2);

var str = '';
var length = str?.length;
console.log(length);

var foo = null ?? 'default string';
console.log(foo);