// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function() {
//         return Math.PI * this.radius ** 2;
//     }
// }
function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
}

Circle.prototype.PI = Math.PI;
Circle.PI = Math.PI;

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea == circle2.getArea)
console.log(circle1.getArea === circle2.getArea)

console.log(circle1.getArea())
console.log(circle2.getArea())

console.log(circle1.PI);
console.log(Circle.PI);

// Date 타입의 인스턴스에 toMyString 이라는 메서드를 제작
// yyyy-MM-dd HH:mm:ss 형태의 시간정보를 반환

Number.prototype.lz = function() {
    return this < 10 ? "0" + this : "" + this;
}

var num = 5;
console.log(num.lz());

Date.prototype.toMyString = function() {
    return `${this.getFullYear()}/${(this.getMonth()+1).lz()}/${this.getDate().lz()}`
            + ` ${this.getHours().lz()}:${this.getMinutes().lz()}:${this.getSeconds().lz()}`
}

const now = new Date();
console.log(now.toMyString());