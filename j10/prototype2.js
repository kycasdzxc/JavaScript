// hello world
var str ='hello world';
// 문자열에서 제일 처음 글자 + 제일 마지막 글자를 반환

// function myFunction(str) {
//     var a = str[0];
//     var b = str[str.length-1]

//     return a + b;
// }
String.prototype.myFunction = function() {
    return this[0] + this[this.length-1];
}

// var result = myFunction(str);

var result = str.myFunction();
console.log(result);
console.log("abcd".myFunction());

// 학생 : 학번, 이름, 국어, 영어, 수학, 총점, 평균