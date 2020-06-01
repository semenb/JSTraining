const textBox = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

textBox.addEventListener('input', e => {
  if (e.target.value === '') {
    span.textContent = 'незнакомец';
  } else {
    span.textContent = e.target.value;
  }
});
