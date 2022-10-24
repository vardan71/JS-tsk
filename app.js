// task1

let num = [2, 3, 8, 1, 0];
let c;

function result(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                c = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = c;
            }
        }
    }
    return arr;
}

console.log(result(num));

// task 2

const nums = [10, 20, 10, 30, 30, 30, 30, 20, 10];

function res() {
    let obj = {}

    for (let value of nums) {
        obj[value] = 1;
    }
    return Object.keys(obj);
}

console.log(res(nums));

// // task3

const num1 = [1, 2, 3, 4, 6, 60, 60, 60,];
const num2 = [60, 60, 60, 60, 7, 8, 9, 5, 11, 12, 13, 45, 6, 1];

function res2(array1, array2) {
    let result = []
    for (let k = 0; k < array1.length; k++) {
        if (array2.includes(array1[k])) {
            if (!(result.includes(array1[k]))) {
                result.push(array1[k]);
            }
        }
    }
    return result
}

console.log(res2(num1, num2));