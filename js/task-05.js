const spanFind  = document.querySelector("#name-output");
const inputText = document.querySelector("#name-input");


inputText.addEventListener('input', readingInput);

function readingInput (event) {
    console.log(event.currentTarget.value);
    spanFind.textContent = event.currentTarget.value;
}