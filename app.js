let btnDiv = document.querySelector("#btns");
let body = document.body;
let btn1 = btnDiv.children[0];
let btn2 = btnDiv.children[1];
let div = document.createElement("div");
let toSort = [];
body.style.display = "flex"
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min));
}

btn1.addEventListener("click", function addDIv() {

    let random = randomNumbers(0, 100);
    let div = document.createElement("div");
    toSort.push(random);
    div.setAttribute('id', toSort.length);

    div.style.border = "2px solid black";
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.margin = "5px";
    div.style.textAlign = "center";

    div.append(random);
    body.append(div);
});

btn2.addEventListener("click", function sortDiv() {
    toSort.sort((a, b) => a - b);
    for (let i = 0; i < toSort.length; i++) {
        let div = document.getElementById((i + 1));
        div.textContent = toSort[i];
    };
});
