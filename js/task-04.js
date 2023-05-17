let counterValue = 0;

const incrementNumberBtn = document.querySelector('[data-action="increment"]');
const decrementNumberBtn = document.querySelector('[data-action="decrement"]');
const currentNumber = document.querySelector("#value");

incrementNumberBtn.addEventListener('click', incrementPlus);
decrementNumberBtn.addEventListener('click', decrementMinus);



function incrementPlus(event) {
    counterValue +=1;
  currentNumber.textContent = counterValue;

}

function decrementMinus  (event) {
    counterValue -=1;
  currentNumber.textContent = counterValue;

}



