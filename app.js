let mainDiv = document.querySelector("#mainDiv")
let toSort = [];

function generateRandomColor() {
    const maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    const randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}
function generateRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min));
}

function addDIv() {
    const randomObj = {
        id: generateRandomNumbers('0', '100'),
        color: generateRandomColor()
    }
    let div = document.createElement("div");
    console.log(randomObj);
    toSort.push(randomObj.id);
    div.setAttribute('id', toSort.length);
    div.classList.add('crateDiv');
    div.style.background = randomObj.color;
    div.append(randomObj.id);
    mainDiv.append(div);
};

function sortDiv() {
    toSort.sort((a, b) => a - b);
    for (let i = 0; i < toSort.length; i++) {
        let div = document.getElementById((i + 1));
        div.textContent = toSort[i];
    };
};