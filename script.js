const display = document.querySelector("input[name='display']");

function updateDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value === ""
      ? alert("Nothing to calculate")
      : (display.value = eval(display.value));
  } catch (error) {
    alert(error);
  }
}

const buttons = document.querySelectorAll(".calculator input[type='button']");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    switch (value) {
      case "=":
        calculate();
        break;
      case "AC":
        clearDisplay();
        break;
      case "CE":
        backspace();
        break;
      default:
        updateDisplay(value);
        break;
    }
  });
});
