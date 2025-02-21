const display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function appendDot() {
    if (!display.value.includes(".")) {
        display.value += ".";
    }
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";

    }
    
}

function calculatePercentage() {
    try {
        display.value = eval(display.value) / 100;
        
    } catch {
        display.value = "Error";
        
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Error";
        
    }
}

