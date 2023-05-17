const listItem = categories.children;
const lengthOfCategories = listItem.length;
const listItemsQuantity = `Number of categories: ${lengthOfCategories}`;
console.log(listItemsQuantity);

const allListCategories = document.querySelector("#categories");
const listClassItem = allListCategories.querySelectorAll(".item");

listClassItem.forEach(function (listClassItem) {
const toListClassItem = listClassItem.querySelector("h2");
const textOfItem = toListClassItem.textContent;
const ulListOfCategories = toListClassItem.nextElementSibling;
const elOfListOfCategories = ulListOfCategories.children;

console.log(`Category: ${textOfItem}`);
console.log(`Elements: ${elOfListOfCategories.length}`);

    });
