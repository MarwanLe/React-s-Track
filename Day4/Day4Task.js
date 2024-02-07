// Method One (Main)

// Rows = عدد الصفوف في المثلث
// RowNum = الصف اللي شغال عليه اثناء القيام بلفة في اللوب الكبيرة
// Empty = نص فاضي بيتملي بعدد النجوم والمسافات المطلوبة علي حسب اللوب الكبيرة
// columnNum = العمود اللي شغال عليه اثناء القيام بلفة في اللوب الصغيرة

function Triangle2(Rows) {
    for (let RowNum = 1; RowNum <= Rows; RowNum += 1) { // اللوب بتتكسر لما عدد الصفوف المطلوبة يوصل للصفوف المطبوعة
        let Empty = ""; // It's empty until the code fill it step by step by the loop

        for (let columnNum = 1; columnNum <= Rows; columnNum += 1) {
            if (columnNum <= Rows - RowNum) { 
                Empty += " ";
            } else {
                Empty += "*";
            }
        }

        console.log(Empty);
    }
}

Triangle2(5);





// Method Two
// function Triangle1(Rows) {
//     // Numbers of Rows Counting
//     for (let bruh = 1; bruh <= Rows; bruh += 1) {
//         let spaceCount = Math.max(Rows - bruh, 0);
//         let starCount = Math.min(bruh, Rows);

//         // Adding spaces to the Triangle
//         let space = "";
//         for (let j = 0; j < spaceCount; j += 1) {
//             space += " ";
//         }

//         // Adding stars to the Triangle
//         let stars = "";
//         for (let k = 0; k < starCount; k += 1) {
//             stars += "*";
//         }

//         console.log(space + stars);
//     }
// }

// Triangle1(10);

