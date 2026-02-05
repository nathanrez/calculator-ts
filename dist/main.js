const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll("[data-num]");
const operationButtons = document.querySelectorAll("[data-op]");
const dataActionButtons = document.querySelector("[data-action]");
let currentValue = "0";
let xNumber = "";
let yNumber = "";
let currentOperator = null;
const equalsButton = document.querySelector('[data-action="equals"]');
const clearButton = document.querySelector('[data-action="clear-all"]');
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
        if (currentOperator == "*") {
            currentOperator = "x";
            display.textContent = xNumber + currentOperator + yNumber;
        }
        else if (currentOperator == "/") {
            currentOperator = "÷";
            display.textContent = xNumber + currentOperator + yNumber;
        }
        display.textContent = xNumber + currentOperator + yNumber;
    }
}
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let operator = button.getAttribute("data-op");
        if (!operator)
            return;
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
        case "*":
            resultado = x * y;
            xNumber = resultado.toString();
            yNumber = "";
            currentOperator = null;
            display.textContent = xNumber;
            return;
        case "/":
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
equalsButton === null || equalsButton === void 0 ? void 0 : equalsButton.addEventListener("click", (evento) => {
    calculate();
});
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener("click", () => {
    clearAll();
});
export {};
//# sourceMappingURL=main.js.map