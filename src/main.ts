const display = document.querySelector(".display") as HTMLDivElement;
const numberButtons = document.querySelectorAll("[data-num]");
const operationButtons = document.querySelectorAll("[data-op]");

let currentValue = "0";
let xNumber = "";
let yNumber = "";
let currentOperator: string | null = null;

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
    display.textContent = xNumber + currentOperator + yNumber;
  }
}

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const operator = button.getAttribute("data-op");
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

      let resultadoConvert = resultado.toString();
      let yConvert = y.toString();

      x = resultado;
      currentOperator = null;
      yConvert = "";

      display.textContent = resultadoConvert;
    case "-":
      break;
    case "x":
      break;
    case "÷":
      break;
  }
}
