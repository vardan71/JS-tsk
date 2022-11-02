const arr = ["Armen", "Anna", "Anana", "Narek"];

function sortWords(arr) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                result = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = result;
            }
        }
    }
    return arr.forEach(element => {
        document.write(element + "<br>")
    });
}

sortWords(arr);