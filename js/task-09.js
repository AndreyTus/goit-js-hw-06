function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color')
const body = document.querySelector('body')
const colorEl = document.querySelector('.color')

changeColorBtn.addEventListener('click', event => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorEl.textContent = color;
})