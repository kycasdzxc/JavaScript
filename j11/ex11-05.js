var str = 'string';

console.log(str[1]); // t

str[1] = 'a'; // t > a

console.log(str); // 불변

str = 'abcd';

var o = {a : 1};
var o2 = o;
o.a = 2;
console.log(o2.a);

var arr = [1, 2, 3];
var ar2 = arr;
arr[1] = 10;
console.log(arr2);

// List<Student> students = new ArrayList<>();

// ArrayList 타입의 인스턴스를 생성 후
// 해당 주소를 Student 인스턴스가 들어갈 수 있는 List 타입의 students 객체에 할당