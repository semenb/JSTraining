const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

// console.log(categories[0].children);

categories.forEach(element => {
  console.log(`Категроия: ${element.querySelector('h2').textContent}`);
  const list = element.querySelector('ul');
  console.log(`Количество элементов: ${list.children.length}`);
});
