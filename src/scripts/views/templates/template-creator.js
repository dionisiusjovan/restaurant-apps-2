import CONFIG from '../../globals/config'

const restoDetailTemplate = (resto) => {
  let categories = ''
  let foods = ''
  let drinks = ''
  let reviews = ''
  resto.categories.forEach(category => {
    categories += ` ${category.name};`
  })
  resto.menus.foods.forEach(food => {
    foods += `<li>${food.name}</li>`
  })
  resto.menus.drinks.forEach(drink => {
    drinks += `<li>${drink.name}</li>`
  })
  resto.customerReviews.forEach(review => {
    reviews += reviewTemplate(review)
  })
  const htmlStr = `
    <h2 class="resto__title">${resto.name}</h2>
    <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
    <div class="resto__info">
    <h3>Information</h3>
        <h4>Address</h4>
        <p>${resto.address}, ${resto.city}</p>
        <h4>Rating</h4>
        <p>${resto.rating}</p>
        <h4>Categories</h4>
        <p>${categories}</p>
    </div>
    <div class="resto__overview">
        <h3>Description</h3>
        <p>${resto.description}</p>
    </div>
    <div class="resto__info">
      <h4>Foods</h4>
      <div class="resto__info_menu">
        <ul>
          ${foods}
        </ul>
      </div>
    </div>
    <div class="resto__info">
      <h4>Drinks</h4>
      <div class="resto__info_menu">
        <ul>
          ${drinks}
        </ul>
      </div>
    </div>
    </div>
    <h3 class="resto-review__header">Review</h3>
    <div class="resto-review__container">
      ${reviews}
      <div class="resto-review">
        <div class="resto-review__form">
          <form id="addReview">
            <input type="text" id="restoid" name="id" value="${resto.id}" hidden></input>
            <p>
              <label class="input-label" for="username">Masukkan nama Anda</label>
              <input type="text" id="username" name="name" required></input>
            </p>
            <p>
              <label class="textarea-label" for="review">Ceritakan pengalaman Anda </label>
              <textarea name="review" name="review" required></textarea>
            </p>
            <p>
              <button type="button" id="sendReview">Kirim</button>
            </p>
          </form>
        </div>
    </div>
    </div>
    `
  return htmlStr
}

const restoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${resto.name}"
            src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
        <div class="resto-item__header__city">
            <p><span class="resto-item__header__city_str">${resto.city}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
    </div>
  </div>
  `

const reviewTemplate = (review) => `
  <div class="resto-review">
      <div class="resto-review__item">
        <h5>${review.date}</h5>
        <h4>${review.name}</h4>
        <p>${review.review}</p>
      </div>
  </div>`

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
    <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
  </button>
`

export {
  restoItemTemplate,
  restoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
