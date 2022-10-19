let num = [1, 2, 3, 2, 3, 4, 4, 5, 5, 1];

for (let i = 0; i < num.length; i++) {
    for (let j = 1; j < num.length; j++) {
        if (num[i] == num[i + j]) {
            num.splice(i + j, 1);
        }
    }
}

console.log(num);