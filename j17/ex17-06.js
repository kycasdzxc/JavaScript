function Circle(radius) {
    this.PI = Math.PI;
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    }
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

circle1.radius = 10;

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());
console.log(circle1.PI);

function Rect(x, y) {
    this.x = x;
    this.y = y;

    this.printArea = function() {
        console.log(this.x * this.y);
        return this;
    }
    this.setX = function(x) {
        this.x = x;
        return this;
    }
    this.setY = function(y) {
        this.y = y;
        return this;
    }
}

new Rect(3, 4).printArea().setX(5).printArea().setY(5).printArea();