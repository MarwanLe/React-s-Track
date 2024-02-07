



// Method Two
function Guess(total) {
    let Num1, Num2, Num3, Num4;

    while (true) {
        Num1 = Math.floor(Math.random() * 101);
        Num2 = Math.floor(Math.random() * 101);
        Num3 = Math.floor(Math.random() * 101);
        Num4 = Math.floor(Math.random() * 101);

        let sum = Num1 + Num2 + Num3 + Num4;

        if (total === sum) {
            console.log("Numbers:", Num1, Num2, Num3, Num4);
            console.log("Total:", total);
            break;
        }
    }
}


Guess(100);
