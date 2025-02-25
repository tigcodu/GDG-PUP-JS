// your code starts here

const subtract = document.querySelector('#button-subtract');
const add = document.querySelector('#button-add');
let number = 0;

function subtractNumber() {
    if (number > 0) {
        number--;
    }
    numberDisplay();
}

function addNumber() {
    number++;
    numberDisplay();
}

function numberDisplay() {
    document.querySelector('#counter-text').innerText = number;
}

subtract.addEventListener('click', subtractNumber);
add.addEventListener('click', addNumber);

numberDisplay();