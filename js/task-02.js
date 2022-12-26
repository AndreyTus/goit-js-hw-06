const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById("ingredients");
console.log(ulEl);
const liElArr = [];

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  liElArr.push(liEl);
});

ulEl.append(...liElArr);