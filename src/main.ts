const display = document.querySelector(".display") as HTMLDivElement;
const numberButtons = document.querySelectorAll("[data-num]");
const operationButtons = document.querySelectorAll("[data-op]");
const secondNumberButtons = document.querySelectorAll("[data-action]");
const actionButtons = document.querySelectorAll("[data-action]");

let currentValue = "0";
let currentOperator: string | null = null;
let yNumber: string;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-num");

    if (!value) return;

    handleNumberClick(value);
  });
});

function handleNumberClick(value: string) {
  if (currentValue === "0") {
    currentValue = value;
  } else {
    currentValue += value;
  }

  display.textContent = currentValue;
}

// para cada botão de operação (+ - x ÷)
operationButtons.forEach((button) => {
  // liga um "ouvinte" de clique no botão
  button.addEventListener("click", () => {
    // pega o operador que está no HTML (data-op)
    const operator = button.getAttribute("data-op");

    // se não existir, não faz nada
    if (!operator) return;

    // guarda o operador
    currentOperator = operator;

    // mostra no display
    display.textContent = display.textContent + operator;
  });
});

secondNumberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const secondNumber = button.getAttribute("data-num");

    if (!secondNumber) return;

    yNumber = secondNumber;
  });
});
