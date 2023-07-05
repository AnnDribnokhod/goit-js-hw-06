const getInputData = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

getInputData.addEventListener("input", handlerInputValue);

function handlerInputValue(evt) {
  if (evt.currentTarget.value) {
    outputValue.textContent = evt.currentTarget.value;
  } else {
    outputValue.textContent = "Anonymous";
  }
}
