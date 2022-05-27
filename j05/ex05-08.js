var x = 1 - true;
x = !"abcd"
console.log(x);

var x; // 표현식 x
x = 1 + 2; // 표현식 o

var foo = x = 1 + 2;

console.log(foo);
console.log("========================================");
console.log(1, typeof 1);
console.log('1', typeof '1');
console.log(true, typeof ture);
console.log(undefined, typeof undefined);
console.log(null, typeof null);
console.log([], typeof []);
console.log({}, typeof {});
console.log(function() {}, typeof function() {});