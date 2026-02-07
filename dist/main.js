const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll("[data-num]");
const operationButtons = document.querySelectorAll("[data-op]");
const equalsButton = document.querySelector('[data-action="equals"]');
const clearButton = document.querySelector('[data-action="clear-all"]');
const backspaceButton = document.querySelector('[data-action = "backspace"]');
let currentValue = "0";
let xNumber = "";
let yNumber = "";
let currentOperator = null;
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-num");
        if (!value)
            return;
        handleNumberClick(value);
    });
});
function handleNumberClick(value) {
    // ainda NÃO escolheu operador → primeiro número
    if (!currentOperator) {
        xNumber += value;
        display.textContent = xNumber;
    }
    // operador já existe → segundo número
    else {
        yNumber += value;
        display.textContent = xNumber + currentOperator + yNumber;
    }
}
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let operator = button.getAttribute("data-op");
        if (!operator)
            return;
        if (operator == "*") {
            operator = "x";
        }
        else if (operator == "/") {
            operator = "÷";
        }
        // só permite operador se já tiver primeiro número
        if (!xNumber)
            return;
        currentOperator = operator;
        display.textContent = xNumber + operator;
    });
});
function calculate() {
    if (!xNumber || !currentOperator || !yNumber)
        return;
    let x = Number(xNumber);
    let y = Number(yNumber);
    let resultado = 0;
    switch (currentOperator) {
        case "+":
            resultado = x + y;
            xNumber = resultado.toString();
            yNumber = "";
            currentOperator = null;
            display.textContent = xNumber;
            return;
        case "-":
            resultado = x - y;
            xNumber = resultado.toString();
            yNumber = "";
            currentOperator = null;
            display.textContent = xNumber;
            return;
        case "x":
            resultado = x * y;
            xNumber = resultado.toString();
            yNumber = "";
            currentOperator = null;
            display.textContent = xNumber;
            return;
        case "÷":
            resultado = x / y;
            xNumber = resultado.toString();
            yNumber = "";
            currentOperator = null;
            display.textContent = xNumber;
            return;
    }
}
function clearAll() {
    xNumber = "";
    currentOperator = null;
    yNumber = "";
    display.textContent = currentValue.toString();
}
function backspace() {
    if (yNumber) {
        yNumber = yNumber.slice(0, -1);
        display.textContent = xNumber + currentOperator + yNumber;
        return;
    }
    else if (currentOperator) {
        currentOperator = null;
        display.textContent = xNumber;
        return;
    }
    else if (xNumber) {
        xNumber = xNumber.slice(0, -1);
        if (xNumber === "") {
            xNumber = "";
        }
        display.textContent = xNumber;
    }
}
equalsButton === null || equalsButton === void 0 ? void 0 : equalsButton.addEventListener("click", (evento) => {
    calculate();
});
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener("click", () => {
    clearAll();
});
backspaceButton === null || backspaceButton === void 0 ? void 0 : backspaceButton.addEventListener("click", () => {
    backspace();
});
export {};
// proxima melhoria:
// ao obter um resultado e apertar algum numero, esse numero aumenta o valor do resultado...
// exemplo: resultado = 12. ao apertar o  numero 1, o display fica com 121.
//# sourceMappingURL=main.js.map