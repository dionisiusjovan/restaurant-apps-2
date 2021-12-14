import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'
import '../scripts/component/resto-list.js'
import '../scripts/component/search-bar.js'
import App from './views/app'
import DataSource from './data/data-source'
import swRegister from './utils/sw-register'

const hamburgerBtn = document.querySelector('#hamburgerButton')
const mainContent = document.querySelector('#mainContent')
const navDrawer = document.querySelector('#navigationDrawer')
const searchElement = document.querySelector('search-bar')
const searchResultContainer = document.querySelector('#searchResultContainer')

const app = new App({
  button: hamburgerBtn,
  drawer: navDrawer,
  content: mainContent
})

window.addEventListener('hashchange', () => {
  searchElement.style.display = 'none'
  searchResultContainer.style.display = 'none'
  document.querySelector('search-bar').value = ''
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})

document.addEventListener('DOMContentLoaded', _ => {
  const restoListElement = document.querySelector('resto-list')

  searchElement.addEventListener('change', _ => {
    if (!searchElement.value) searchResultContainer.style.display = 'none'
    else searchResultContainer.style.display = 'block'
  })

  const onButtonSearchClicked = _ => {
    const renderResult = results => {
      if (searchResultContainer.style.display === 'none') searchResultContainer.style.display = 'block'
      restoListElement.restos = results
      document.getElementById('result_counter').innerText = `${results.length} resto ditemukan...`
    }
    const fallbackResult = errormsg => { restoListElement.renderError(errormsg) }
    DataSource.searchResto(searchElement.value).then(renderResult).catch(fallbackResult)
  }
  searchElement.clickEvent = onButtonSearchClicked
})
