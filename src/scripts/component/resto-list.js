import './resto-item.js'

class RestoList extends HTMLElement {
  /**
     * @param {any} restos
     */
  // eslint-disable-next-line accessor-pairs
  set restos (restos) {
    this._restos = restos
    this.render()
  }

  render () {
    this.innerHTML = `
    <style>
      .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
      }
    </style>`
    this._restos.forEach(resto => {
      const restoListElement = document.createElement('resto-item')
      restoListElement.resto = resto
      this.appendChild(restoListElement)
    })
  }

  renderError (err) {
    this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`
    this.innerHTML += `<h2 class="placeholder">${err}</h2>`
  }
}

customElements.define('resto-list', RestoList)
