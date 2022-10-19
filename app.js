// task1

let num = [2, 3, 8, 1, 6];
let c;

for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
        if (num[j] > num[j + 1]) {
            c = num[j];
            num[j] = num[j + 1];
            num[j + 1] = c;
        }
    }
}

console.log(num);

// task 2

let nums = [1, 2, 3, 2, 3, 4, 4, 5, 5, 1];

for (let i = 0; i < nums.length; i++) {

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] == nums[i + j]) {
            nums.splice(i + j, 1);
        }
    }
}

// task3

const num1 = [1, 2, 3, 4, 6, 60];
const num2 = [60, 7, 8, 9, 5, 11, 12, 13, 45, 6, 1];
let result = [];

function res (){
for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
        if (num1[i] == num2[j]) {
            result.push(num2[j]);
        }
    }
}

}


console.log(result);