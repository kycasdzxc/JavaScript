let foo = 1;
{
    console.log(foo);
    // let foo = 2;   
}

// let foo = 1;
// {
//     console.log(foo);
//     var foo = 2;   
// }

// class Student {

// }

// new Student();

// var Student = (no, name) => { 애로우펑션은 생성자 함수로 사용 불가
//     this.no = no;
//     this.name = name;
// }

var Student = function (no, name) {
    this.no = no;
    this.name = name;
}

var s = new Student(10, '홍길동');
console.log(s);