const textBox = document.querySelector('#validation-input');

textBox.addEventListener('blur', e => {
  if (e.target.value.length === 6) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  } else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
  }
});
