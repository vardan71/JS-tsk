// task1

const arr = [2, 3, 8, 1, 0, 5, 3, 6, 8, 4, 1,];

function sortNumbers(arr) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                result = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = result;
            }
        }
    }
    return arr;
}

console.log(sortNumbers(arr));

// task 2

const arr2 = [10, 20, 10, 30, 30, 30, 30, 20, 10];

function removeDuplicates(arr) {
    const obj = {}

    for (let value of arr) {
        obj[value] = 1;
    }
    return Object.keys(obj);
}

console.log(removeDuplicates(arr2));

// // task3

const array1 = [1, 2, 3, 4, 6, 60, 60, 60,];
const array2 = [60, 60, 60, 60, 7, 8, 9, 5, 11, 12, 13, 45, 6, 1];

function numbersInBothArrays(arr1, arr2) {
    const result = []
    for (let k = 0; k < arr1.length; k++) {
        if (arr2.includes(arr1[k])) {
            if (!(result.includes(arr1[k]))) {
                result.push(arr1[k]);
            }
        }
    }
    return result
}

console.log(numbersInBothArrays(array1, array2));