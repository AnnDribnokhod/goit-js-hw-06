const getCounterValue = document.querySelector("#value");
const decrementAction = document.querySelector('[data-action="decrement"]');
const incrementAction = document.querySelector('[data-action="increment"]');

console.dir(decrementAction);
let counterValue = 0;

decrementAction.addEventListener("click", handlerClickDecrement);
incrementAction.addEventListener("click", handlerClickIncrement);

function handlerClickDecrement() {
  counterValue = counterValue - 1;
  getCounterValue.textContent = counterValue;
}

function handlerClickIncrement() {
  counterValue = counterValue + 1;
  getCounterValue.textContent = counterValue;
}
