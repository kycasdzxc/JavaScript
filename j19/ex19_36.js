const Person = (function() {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayHello = function() {
        console.log(`Hi! My name is ${this.name}`);
    }
    return Person;
}());

console.log(Person);
const me = new Person('Lee');

me.sayHello();

// 프로퍼티 추가
me.sayHello = function() {
    console.log(`Hey! My name is ${this.name}`);
}

me.sayHello();

// 프로퍼티 제거
delete me.sayHello;
me.sayHello();
delete me.sayHello;
me.sayHello();

var obj = new Object();
const obj2 = {};