function Storage(arr) {
  this.items = arr;
}

Storage.prototype.getItems = function() {
  return this.items;
};

Storage.prototype.addItem = function(item) {
  this.items.push(item);
};

Storage.prototype.removeItem = function(item) {
  const index = this.items.indexOf(item);
  if (index > -1) {
    this.items.splice(index, 1);
  }
};

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
