// Task One using for loop
function Fibonacci(amount) {
    let n1 = 0;
    let n2 = 1;
    NextNum = undefined;

    for (let Bruh = 1; bruh <= amount; bruh += 1) {
        console.log(n1);
        NextNum = n1 + n2;
        n1 = n2;
        n2 = NextNum;
}

}

Fibonacci(10);

// Task Two using Recursive function 
function Recursive(num) {
    if (num <= 1) {
      return num;
    } else {
      return Recursive(num - 1) + Recursive(num - 2);
    }
  }
  
console.log(Recursive(10));