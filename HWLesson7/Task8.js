const render = document.querySelector('button[data-action="render"');
const destroy = document.querySelector('button[data-action="destroy"');
const divBox = document.querySelector('#boxes');
const amount = document.querySelector('input[type="number"]');

render.addEventListener('click', () => {
  const elements = [];
  const count = divBox.children.length;
  for (let i = 0; i < amount.value; i += 1) {
    const div = document.createElement('div');
    div.style.width = (30 + 10 * i + 10 * count).toString().concat('px');
    div.style.height = (30 + 10 * i + 10 * count).toString().concat('px');
    div.style.backgroundColor =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ', ' +
      Math.floor(Math.random() * 256) +
      ', ' +
      Math.floor(Math.random() * 256) +
      ')';
    //div.textContent = '&nbsp;';
    elements.push(div);
  }
  divBox.append(...elements);
});

destroy.addEventListener('click', () => {
  while (divBox.firstChild) {
    divBox.removeChild(divBox.firstChild);
  }
});
