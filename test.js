// let grade = 65;

// if (grade <= 0 && grade < 50) {
// 	console.log("Failed");
// } else if (grade >= 50 && grade < 65) {
// 	console.log("Accepted");
// } else if (grade >= 65 && grade < 75) {
// 	console.log("Good");
// } else if (grade >= 75 && grade < 85) {
// 	console.log("Very Good");
// } else if (grade >= 85 && grade <= 100) {
// 	console.log("Excellent");
// }






let grade = 65;

if (grade <= 0) {
    console.log("Failed");
} else {
    if (grade < 50) {
        console.log("Failed");
    } else {
        if (grade < 65) {
            console.log("Accepted");
        } else {
            if (grade < 75) {
                console.log("Good");
            } else {
                if (grade < 85) {
                    console.log("Very Good");
                } else {
                    if (grade <= 100) {
                        console.log("Excellent");
                    }
                }
            }
        }
    }
}
