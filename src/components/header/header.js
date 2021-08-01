export default class AppHeader extends HTMLElement {
  constructor() {
    super()

    this._style = document.createElement('style')
    this._template = document.createElement('template')

    this._style.innerHTML = `
            header {
                background: #777;
            } 
        `

    this._template.innerHTML = `
            <header>
                <h1>My Header</h1>
            </header>
        `

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(this._style)
    this.shadowRoot.appendChild(this._template.content.cloneNode(true))

    this.shadowRoot.querySelector('h1').addEventListener('click', (e) => {
      this.dispatchEvent(new CustomEvent('titleClicked', { detail: { ev: e } }))
    })
  }
}
