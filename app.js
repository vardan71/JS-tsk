const num1 = [1, 2, 3, 4, 6, 60];
const num2 = [60, 7, 8, 9, 5, 11, 12, 13, 45, 6, 1];
let result = [];

for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
        if (num1[i] == num2[j]) {
            result.push(num2[j]);
        }
    }
}

console.log(result);