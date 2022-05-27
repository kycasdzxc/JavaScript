// 학생 정보를 저장할 객체를 만드세요.
// 학번, 이름, 국어점수, 영어점수, 총점

var obj ={
    no : 1, name : '홍길동', kor : 90, eng : 80,
    sum : function () {
        return this.kor + this.eng;
    }
}

console.log(obj)
console.log(obj.no)
console.log(obj.name)
console.log(obj.kor)
console.log(obj.eng)
console.log(obj.sum())

var obj2 ={
    no : 2, name : '홍길동', kor : 90, eng : 80,
    sum : function () {
        return this.kor + this.eng;
    }
}

var students = [obj, obj2];
console.log(students[1].sum());

// 배열
var arr = [1, "2", true, function() { return 0 }, {x : 10, y : 20}, [1, 2, 3]];
console.log(arr[3]());
console.log(arr[5][2]);