const list = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elements = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
});

list.append(...elements);
