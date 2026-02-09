const display = document.querySelector(".display") as HTMLDivElement;
const numberButtons = document.querySelectorAll("[data-num]");
const operationButtons = document.querySelectorAll("[data-op]");
const equalsButton = document.querySelector('[data-action="equals"]');
const clearButton = document.querySelector('[data-action="clear-all"]');
const backspaceButton = document.querySelector('[data-action = "backspace"]');
const decimalsButton = document.querySelector('[data-action = "decimal"]');
const historyButton = document.querySelector('[data-action = "history"]');

let currentValue = "0";
let xNumber = "";
let yNumber = "";
let currentOperator: string | null = null;
let calculoFeito = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-num");

    if (!value) return;

    handleNumberClick(value);
  });
});

function handleNumberClick(value: string) {
  if (!currentOperator && calculoFeito) {
    clearAll();
    calculoFeito = false;

    xNumber += value;
    display.textContent = xNumber;
  }
  // ainda NÃO escolheu operador → primeiro número
  else if (!currentOperator) {
    xNumber += value;
    display.textContent = xNumber;
  }
  // ainda NÃO escolheu operador → primeiro número
  else if (!currentOperator) {
    xNumber += value;
    display.textContent = xNumber;
  } else {
    yNumber += value;

    display.textContent = xNumber + currentOperator + yNumber;
  }
}

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let operator = button.getAttribute("data-op");
    if (!operator) return;

    if (operator == "*") {
      operator = "x";
    } else if (operator == "/") {
      operator = "÷";
    }

    // só permite operador se já tiver primeiro número
    if (!xNumber) return;

    currentOperator = operator;

    display.textContent = xNumber + operator;
  });
});

function calculate() {
  if (!xNumber || !currentOperator || !yNumber) return;

  let x = Number(xNumber.replace(",", "."));
  let y = Number(yNumber.replace(",", "."));
  let resultado = 0;

  switch (currentOperator) {
    case "+":
      resultado = x + y;

      xNumber = resultado.toString();
      yNumber = "";
      currentOperator = null;
      display.textContent = xNumber;
      calculoFeito = true;

      return;
    case "-":
      resultado = x - y;

      xNumber = resultado.toString();
      yNumber = "";
      currentOperator = null;
      display.textContent = xNumber;
      calculoFeito = true;

      return;
    case "x":
      resultado = x * y;

      xNumber = resultado.toString();
      yNumber = "";
      currentOperator = null;
      display.textContent = xNumber;
      calculoFeito = true;

      return;
    case "÷":
      resultado = x / y;

      xNumber = resultado.toString();
      yNumber = "";
      currentOperator = null;
      display.textContent = xNumber;
      calculoFeito = true;

      return;
  }
}

function clearAll() {
  xNumber = "";
  currentOperator = null;
  yNumber = "";
  calculoFeito = false;

  display.textContent = currentValue.toString();
}

function backspace() {
  if (yNumber) {
    yNumber = yNumber.slice(0, -1);

    display.textContent = xNumber + currentOperator + yNumber;

    return;
  } else if (currentOperator) {
    currentOperator = null;

    display.textContent = xNumber;

    return;
  } else if (xNumber) {
    xNumber = xNumber.slice(0, -1);

    if (xNumber === "") {
      xNumber = "";
    }
    display.textContent = xNumber;
  }
}

function decimalCalc() {
  if (!currentOperator) {
    if (xNumber.includes(",")) return;

    xNumber = xNumber === "" ? "0," : xNumber + ",";
    display.textContent = xNumber;
  } else {
    if (yNumber.includes(",")) return;

    yNumber = yNumber === "" ? "0," : yNumber + ",";
    display.textContent = xNumber + currentOperator + yNumber;
  }
}

function historyCalc() {}

historyButton?.addEventListener("click", (evento) => {
  historyCalc();
});

decimalsButton?.addEventListener("click", (evento) => {
  decimalCalc();
});

equalsButton?.addEventListener("click", (evento) => {
  calculate();
  console.log(calculoFeito);
});

clearButton?.addEventListener("click", () => {
  clearAll();
});

backspaceButton?.addEventListener("click", () => {
  backspace();
});
