let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.MyFilteration = function (callback) {
    let oddNumbers = [];
    for (let i = 0; i < this.length; i++) {
        let value = this[i];
        if (callback(value)) {
            oddNumbers.push(value);            
        }
    }
    return oddNumbers;
};

let result = arr.MyFilteration(function(value) {
    return value > 2;
});

console.log(result);
console.log(result);
