// Task One
let arr = [5, -2, 3, 4, 10];

let total1 = 0;

for (let bruh = 0; bruh < arr.length; bruh += 1) {
  total1 += arr[bruh];
}

console.log(total1);

// Task Two
let op = {
  array1: [5, 9, 10, -1, -15],
  array2: [4, 5, 2, -20],
  array3: [5, 9, -10, -15, 29],
};

let total2 = 0;

for (let key in op) {
  let currentArray = op[key];
        
  for (let num of currentArray) {
    total += num;
  }
}

console.log(total2);