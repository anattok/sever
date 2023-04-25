//выпадающее меню
const menuButton = document.querySelector(".menu__btn-catalog");
const droppedMenu = document.querySelector(".catalog-top");
//меню выезжает по ховеру
menuButton.addEventListener("click", (e) => {
  if (
    e.currentTarget === menuButton &&
    !droppedMenu.classList.contains("catalog-top--active")
  ) {
    droppedMenu.classList.add("catalog-top--active");
  }
});

// меню заезжает при уходе курсора с droppedMenu
// droppedMenu.addEventListener("mouseout", (e) => {
//   e.stopPropagation();
//   if (
//     e.currentTarget === droppedMenu &&
//     droppedMenu.classList.contains("catalog-top--active")
//   ) {
//     droppedMenu.classList.remove("catalog-top--active");
//   }
//   console.log(e.currentTarget)
// });

if (droppedMenu.classList.contains("catalog-top--active")) {
  window.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    droppedMenu.classList.remove("catalog-top--active");
  });
}
