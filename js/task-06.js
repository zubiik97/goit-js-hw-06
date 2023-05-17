const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', borderColorBlue);


function borderColorBlue(event) {
    const dataInputLength = Number(inputEl.dataset.length);
    const valuInputLength = Number(inputEl.value.length);
  
    if (inputValueLength === inputDataLength) {
      inputEl.classList.remove('invalid');
      inputEl.classList.add('valid');

    } else {
      inputEl.classList.add('invalid');
      inputEl.classList.remove('valid');

    }
  }