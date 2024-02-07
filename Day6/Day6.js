class FourSideShape {
    constructor(side1, side2, side3, side4) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.side4 = side4;
    }

    Square() {
        
        for (let SpacesNums = 0; SpacesNums < this.side1; SpacesNums += 1) {
            let row = '';
            for (let StarsNums = 0; StarsNums < this.side2; StarsNums += 1) {
                row += '*';
            }
            console.log(row);
        }
    }

    Square_permiter() {
        return this.side1 + this.side2 + this.side3 + this.side4;
    }


}

class Triangle extends FourSideShape {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
    }

    area() {
        let s = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }

    printTriangle() {
        for (let i = 1; i <= this.side1; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += '*';
            }
            console.log(row);
        }
    }
}

let square = new FourSideShape(5, 5, 5, 5);
console.log('Square_Perimeter:', square.Square_permiter());
square.Square();



let triangle = new Triangle(10, 10, 10);
console.log('Triangle_Area:', triangle.area());
triangle.printTriangle();
