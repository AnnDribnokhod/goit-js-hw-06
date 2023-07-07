function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const getWidget = document.querySelector(".widget");
const getBackgroundValue = document.querySelector(".color");

getWidget.lastElementChild.addEventListener("click", handleBackground);

function handleBackground() {
  getWidget.parentElement.style.backgroundColor = getRandomHexColor();
  getBackgroundValue.textContent =
    getWidget.parentElement.style.backgroundColor;
}
