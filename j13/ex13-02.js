var var1 = 1;

if(1) {
    var var2 = 2;
    if(1) {
        var var3 = 3;
    }
}

function foo() {
    var var4 = 4;
    function bar() {
        var var5 = 5;
    }
}

foo();

console.log(var1);
console.log(var2);
console.log(var3);
// console.log(var4);
// console.log(var5);

console.log("==============");
console.log(x);
var x = 'global';

function foo() {
    console.log(x);
    var x = 'local';
    console.log(x);
}

foo();

console.log(x);