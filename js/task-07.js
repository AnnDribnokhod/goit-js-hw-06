const getInputRange = document.querySelector("#font-size-control");
const getTextRange = document.querySelector("#text");

getInputRange.addEventListener("input", handleInputRange);

function handleInputRange(evt) {
  getTextRange.style.fontSize = evt.currentTarget.value + "px";
  console.dir(evt.currentTarget.value + "px");
}
