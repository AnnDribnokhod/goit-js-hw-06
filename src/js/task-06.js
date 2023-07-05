const validationInputData = document.querySelector("#validation-input");

validationInputData.addEventListener("blur", handlerInputLength);

function handlerInputLength(evt) {
  const inputLength = evt.currentTarget.value.length;
  const validInputValue = Number(validationInputData.dataset.length);
  if (inputLength === validInputValue) {
    validationInputData.classList.add("valid");
  } else {
    validationInputData.classList.add("invalid");
  }
}
