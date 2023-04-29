

//category
const categoryList = document.querySelector(".category__items");

//main
const actionsWrapper = document.querySelector(".card-wrapper__actions");
const noveltiesWrapper = document.querySelector(".card-wrapper__novelties");
const earlyWrapper = document.querySelector(".card-wrapper__early");

renderMain(earlyWrapper, MAIN.EARLY);
renderMain(noveltiesWrapper, MAIN.NOVELTIES);
renderMain(actionsWrapper, MAIN.ACTION);

renderCategory(categoryList);
