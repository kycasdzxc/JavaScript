var arr1 = [1, 2, 3];
var arr2 = new Array(1, 2, 3);

console.log(arr1);
console.log(arr2);

var arr3 = new Array("가");
console.log(arr3);

var arr4 = new Array(10);
console.log(arr4);

var date = new Date();
console.log(date);
console.log(date+"");
console.log(date.toString());
console.log(date.toLocaleString());
console.log(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`);
console.log(date.getTime());

function foo() {
    console.log(this);
}

foo();

const obj = {foo:foo}
obj.foo();

const inst = new foo();

String(10); // 형변환