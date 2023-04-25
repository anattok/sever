//выпадающее меню
const menuButton = document.querySelector(".menu__btn-catalog");
const droppedMenu = document.querySelector(".catalog-top");
//меню выезжает по ховеру
menuButton.addEventListener("mouseover", (e) => {
  console.log(e.target);
  if (
    e.target === menuButton &&
    !droppedMenu.classList.contains("catalog-top--active")
  ) {
    droppedMenu.classList.add("catalog-top--active");
  }
});
//меню заезжает при уходе курсора с droppedMenu
droppedMenu.addEventListener("mouseout", (e) => {
  console.log(e.target);
  if (e.target === droppedMenu ) {
    droppedMenu.classList.remove("catalog-top--active");
  }
});
