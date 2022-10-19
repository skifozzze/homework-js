const categoriesEl = document.querySelectorAll('.item');
console.log(`у списку ${categoriesEl.length} категорій`);

categoriesEl.forEach(category => {
  const categoryTitleEl = category.querySelector('h2');
  const elementEl = category.querySelectorAll('li');

  console.log(`категорія: ${categoryTitleEl.textContent}`);
  console.log(`кількість елементів: ${elementEl.length}`);
});
