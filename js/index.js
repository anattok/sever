//выпадающее меню
const menuButton = document.querySelector(".menu__btn-catalog");
const menuButtonTablet = document.querySelector(".menu-tablet__catalog-btn");
const droppedMenu = document.querySelector(".catalog-top");
//меню выезжает по ховеру
const dropMenu = (btn) => {
  btn.addEventListener("click", (e) => {
    if (
      e.currentTarget === btn &&
      !droppedMenu.classList.contains("catalog-top--active")
    ) {
      droppedMenu.classList.add("catalog-top--active");
    } else {
      droppedMenu.classList.remove("catalog-top--active");
    }
  });
};
dropMenu(menuButtonTablet);
dropMenu(menuButton);
