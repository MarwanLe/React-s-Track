    // // 3 = fiz
    // // 5 = buzz
    // // both = Fizz and Buzz

    // VARs 
    // let Main = 10;
    // let Num = 0;
    

    // Method One
    // for (Main; Main != 0;) {
    //     let Num = Main -= 1;
    //     if (!(Num % 3)) {
    //         console.log("Fizz")  
    //     }
    //     if (!(Num % 5)) {
    //         console.log("buzz")
    //     }
    //     if (!(Num % 3) || (Num % 5)) {
    //         console.log("Fizz and Buzz")
    //     }
    // }

    // //Method Two
    // while (Main != 0) {
    //     let Num = Main -= 1;
    //     if (!(Num % 3)) {
    //         console.log("Fizz")
    //     }
    //     if (!(Num % 5)) {
    //         console.log("buzz")
    //     }
    //     if (!(Num % 3) || (Num % 5)) {
    //         console.log("Fizz and Buzz")
    //     }
    // }


    // let Num = 10;

    // for (Num; Num >= 0; Num -= 1 ) {
    //     if (Num % 5 === 0 || Num % 3 === 0) {
    //         continue;
    //     }
    //     console.log(Num);
    // }



// Task 
    function Area(Main) {
        for (Main; Main != 0;) {
            let Num = Main -= 1;
            if (!(Num % 3)) {
                console.log("Fizz")  
            }
            if (!(Num % 5)) {
                console.log("buzz")
            }
            if (!(Num % 3) || (Num % 5)) {
                console.log("Fizz and Buzz")
            }
        }
    }

Area(10);
console.log("************************************************")
Area(20);
console.log("************************************************")
Area(30);
console.log("************************************************")
Area(40);
console.log("************************************************")
Area(50);








        //             *
        //            **
        //           ***
        //          ****
        //         *****
        //        ******
        //       *******
        //      ********
        //     *********
        //    **********
        //   ***********
        //  ************ 