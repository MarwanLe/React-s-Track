class Shape {
    constructor(side1, side2, side3, side4) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.side4 = side4;
    }

    calcPerimeter() {
        return this.side1 + this.side2 + this.side3 + this.side4;
    }

    calcArea() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height, width, height);
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }

    print() {
        console.log('Rectangle:');
        for (let i = 0; i < this.height; i++) {
            let row = '';
            for (let j = 0; j < this.width; j++) {
                row += '* ';
            }
            console.log(row);
        }
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = sideLength;
    }

    print() {
        console.log('Square:');
        for (let i = 0; i < this.height; i++) {
            let row = '';
            for (let j = 0; j < this.width; j++) {
                row += '* ';
            }
            console.log(row);
        }
    }
}
const shape = new Shape(3, 4, 5, 6);
console.log('Shape Perimeter:', shape.calcPerimeter());
console.log('Shape Area:', shape.calcArea());

const rectangle = new Rectangle(4, 6);
console.log('Rectangle Perimeter:', rectangle.calcPerimeter());
console.log('Rectangle Area:', rectangle.calcArea());
rectangle.print();

const square = new Square(5);
console.log('Square Perimeter:', square.calcPerimeter());
console.log('Square Area:', square.calcArea());



Ammar IP = 149.102.229.230