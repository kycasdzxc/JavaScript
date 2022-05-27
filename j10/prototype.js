// no, name, kor, eng, mat, sum, avg
var students = [];

// students.push({no:1, name:"홍길동"});
// students.push({no:2});

console.log(students);

// 생성자 함수
function Student(no, name, kor, eng, mat) {
    this.no = no;
    this.name = name ?? "고길동";
    this.kor = kor ?? 0;
    this.eng = eng ?? 0;
    this.mat = mat ?? 0;

    // this.sum = function() {
    //     return this.kor + this.eng + this.mat;
    // }

    // this.avg = function() {
    //     return this.sum() / 3;
    // }
}

students.push(new Student(1, "1길동", 80, 90, 80));
students.push(new Student(1, "2길동", 80, 90, 80));
students.push(new Student(3));

// prototype :: 생성된 객체가 공유하는 공간

Student.prototype.sum = function() {
    return this.kor + this.eng + this.mat;
}

Student.prototype.avg = function() {
    return this.sum() / 3;
}

console.log(students);

for(var i in students) {
    console.log('총점 : ' + students[i].sum());
    console.log('평균 : ' + students[i].avg());
}