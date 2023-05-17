function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const nameOfTextColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

const changeColor = () => {
  nameOfTextColor.textContent = document.body.style.backgroundColor = getRandomHexColor();
};
btnChangeColor.addEventListener('click', changeColor);