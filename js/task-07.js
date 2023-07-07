const getInputRange = document.querySelector("#font-size-control");
const getTextRange = document.querySelector("#text");

getTextRange.style.fontSize = getInputRange.value + "px";

getInputRange.addEventListener("input", handleInputRange);

function handleInputRange(evt) {
  getTextRange.style.fontSize = evt.currentTarget.value + "px";
}
