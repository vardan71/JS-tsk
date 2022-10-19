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