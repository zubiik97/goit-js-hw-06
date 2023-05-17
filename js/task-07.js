const fontSizeInput = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const changeFontSize = ({ currentTarget }) =>
  (textEl.style.fontSize = `${currentTarget.value}px`);

  fontSizeInput.addEventListener('input', changeFontSize);