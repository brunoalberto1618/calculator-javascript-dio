const display = document.getElementById('display');

function showDisplay(value) {
    if (value == '.') {
        display.value += '.';
    } else
    display.value += value;

    divisionByZero(display.value);
}

function divisionByZero(operation) {
    if (operation.includes("/0")) {
        display.style.fontSize = "13pt";
        display.value = "Can't divide by zero";
    } else {
        display.style.fontSize = "22pt";
    }
}

function clearAll() {
    display.value = '';
}

function result() {
    let x = eval(display.value);
    display.value = x;

    if (display.value == 'undefined') {
        display.value = '';
    }
}