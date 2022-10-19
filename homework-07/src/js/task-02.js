const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

const createListItemsEl = function (items) {
  return ingredients.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    return itemEl;
  });
};

const elementsEl = createListItemsEl(ingredients);

listEl.append(...elementsEl);
