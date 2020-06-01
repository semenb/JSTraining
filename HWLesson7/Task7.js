const range = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

range.addEventListener('input', e => {
  span.style.fontSize = `${e.target.value}px`;
});
