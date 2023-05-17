const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const findIngredients = document.querySelector("#ingredients");


const markUp = ingredients.map(function (ingredient) {
const toCreateLi = document.createElement("li");
toCreateLi.textContent = ingredient;
toCreateLi.classList.add("item");
console.log (toCreateLi);
return toCreateLi;
});

findIngredients.append(...markUp);

