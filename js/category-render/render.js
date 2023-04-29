const renderCategory = (wrapper) => {

  let category = localStorage.getItem("category");

  const titleWrapper = document.querySelector(".category__title");
  const title = localStorage.getItem("nameCategory");

  let htmlCatalog = "";
  let ul = "cards__list";

  titleWrapper.innerHTML = title;

  if (wrapper !== null) {
    CATALOG[category].forEach(({ name, picture, price }) => {
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

const renderMain = (wrapper, category) => {

  let htmlCatalog = "";
  let ul = "cards__list-main";
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
  
}