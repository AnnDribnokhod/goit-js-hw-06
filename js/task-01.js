const categoriesList = document.querySelector("#categories");

const categoriesIntemLength = categoriesList.children.length;
console.log(`Number of categories: ${categoriesIntemLength}`);

[...categoriesList.children].forEach((item) =>
  console.log(
    `Category: ${item.firstElementChild.innerText}\n Elements: ${item.lastElementChild.children.length}`
  )
);
