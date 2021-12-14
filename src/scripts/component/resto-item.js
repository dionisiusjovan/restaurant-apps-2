import { restoItemTemplate } from '../views/templates/template-creator'

class Resto extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set resto (resto) {
    this._resto = resto
    this.render()
  }

  render () {
    this.innerHTML = restoItemTemplate(this._resto)
  }
}
customElements.define('resto-item', Resto)
