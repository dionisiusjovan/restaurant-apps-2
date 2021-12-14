import DataSource from '../../data/data-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import { restoDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await DataSource.detailResto(url.id)
    const restoContainer = document.querySelector('#resto')
    restoContainer.innerHTML = restoDetailTemplate(resto)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        rating: resto.rating,
        city: resto.city
      }
    })

    document.querySelector('#sendReview').addEventListener('click', _ => {
      const formData = new FormData(document.querySelector('#addReview'))
      const object = {}
      for (const pair of formData.entries()) {
        object[pair[0]] = pair[1]
      }
      DataSource.addNewReview(object).then(resp => {
        if (resp === 'success') location.reload(true)
      }).catch(err => alert(err))
    })
  }
}

export default Detail
