const display = document.querySelector(".display") as HTMLDivElement;
const numberButtons = document.querySelectorAll("[data-num]");
const operationButtons = document.querySelectorAll("[data-op]");
const dataActionButtons = document.querySelector("[data-action]");

let currentValue = "0";
let xNumber = "";
let yNumber = "";
let currentOperator: string | null = null;
const equalsButton = document.querySelector('[data-action="equals"]');
const clearButton = document.querySelector('[data-action="clear-all"]');

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-num");

    if (!value) return;

    handleNumberClick(value);
  });
});

function handleNumberClick(value: string) {
  // ainda NÃO escolheu operador → primeiro número
  if (!currentOperator) {
    xNumber += value;
    display.textContent = xNumber;
  }
  // operador já existe → segundo número
  else {
    yNumber += value;

    // if (currentOperator == "*") {
    //   currentOperator = "x";
    // } else if (currentOperator == "/") {
    //   currentOperator = "÷";
    // }

    display.textContent = xNumber + currentOperator + yNumber;
  }
}

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let operator = button.getAttribute("data-op");
    if (!operator) return;

    // só permite operador se já tiver primeiro número
    if (!xNumber) return;

    currentOperator = operator;

    display.textContent = xNumber + operator;
  });
});

function calculate() {
  if (!xNumber || !currentOperator || !yNumber) return;

  let x: number = Number(xNumber);
  let y: number = Number(yNumber);
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

equalsButton?.addEventListener("click", (evento) => {
  calculate();
});

clearButton?.addEventListener("click", () => {
  clearAll();
});
