const buttonDec = document.querySelector('button[data-action="decrement"');
const buttonInc = document.querySelector('button[data-action="increment"');
const counter = document.querySelector('#value');

let counterValue = parseInt(counter.textContent);

function increment() {
  counterValue++;
  counter.textContent = counterValue;
}

function decrement() {
  counterValue--;
  counter.textContent = counterValue;
}

buttonDec.addEventListener('click', decrement);
buttonInc.addEventListener('click', increment);
