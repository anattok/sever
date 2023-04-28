//category
const categoryList = document.querySelector(".category__items");

//main
const actionsWrapper = document.querySelector(".card-wrapper__actions");
const noveltiesWrapper = document.querySelector(".card-wrapper__novelties");
const earlyWrapper = document.querySelector(".card-wrapper__early");

const render = (category, wrapper) => {
  let htmlCatalog = "";
  let ul = "";

  const mainOrCategory = () => {
    //по 4 карточки на главную, по 3 карточки в категорию
    if (category === NOVELTIES || category === ACTION || category === EARLY) {
      ul = "cards__list-main";
    } else {
      ul = "cards__list";
    }
  };
  mainOrCategory();

  if (wrapper !== null) {
    category.forEach(({ name, picture, price }) => {
      htmlCatalog += `
    
              <li class="cards__item">
                <article class="product-card">
                  <div class="product-card__top">
                  <div class="product-card__img-wrap">
                  <img
                      class="product-card__img"
                      src="${picture}"
                      alt="product name"
                    />
                    </div>
                    
                    <button class="product-card__favorite"></button>
                    <span class="product-card__sale">-50%</span>
                  </div>

                  <div class="product-card__main">
                    <div class="product-card__price">
                      <div
                        class="product-card__price-col product-card__price-left"
                      >
                        <span class="product-card__price-with-digit"
                          >${price}</span
                        >
                        <span class="product-card__price-subtitle"
                          >С картой</span
                        >
                      </div>
                      <div
                        class="product-card__price-col product-card__price-right"
                      >
                        <span class="product-card__price-without-digit"
                          >${price}</span
                        >
                        <span class="product-card__price-subtitle"
                          >Обычная</span
                        >
                      </div>
                    </div>
                    <div class="product-card__title">
                      ${name}
                    </div>
                    <div class="product-card__raiting">
                      <span
                        class="product-card__rating-star product-card__rating-star--active"
                      ></span>
                      <span
                        class="product-card__rating-star product-card__rating-star--active"
                      ></span>
                      <span
                        class="product-card__rating-star product-card__rating-star--active"
                      ></span>
                      <span class="product-card__rating-star"></span>
                      <span class="product-card__rating-star"></span>
                    </div>
                    <button class="product-card__button">В корзину</button>
                  </div>
                </article>
              </li>
              
    `;
    });

    const html = `
    <ul class="${ul}">
        ${htmlCatalog}
    </ul>
    `;

    wrapper.innerHTML = html;
  }
};

render(BREAD, categoryList);
render(EARLY, earlyWrapper);
render(NOVELTIES, noveltiesWrapper);
render(ACTION, actionsWrapper);

