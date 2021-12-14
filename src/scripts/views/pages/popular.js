import DataSource from '../../data/data-source'
import { restoItemTemplate } from '../templates/template-creator'

const Popular = {
  async render () {
    return `
        <div class="content">
            <h2 class="content__heading">Popular Resto</h2>
            <div id="restos" class="restos">
    
            </div>
        </div>
        `
  },

  async afterRender () {
    const restos = await DataSource.popularResto()
    const searchElement = document.querySelector('search-bar')
    searchElement.style.display = 'block'
    const restosContainer = document.querySelector('#restos')
    restos.forEach(resto => {
      restosContainer.innerHTML += restoItemTemplate(resto)
    })
  }
}

export default Popular
