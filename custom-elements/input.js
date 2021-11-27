customElements.define('app-input',
    class appInput extends HTMLElement {
        static get observedAttributes() { return ['name', 'task']; }
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(document.querySelector('#app-input').content.cloneNode(true))
        }
        connectedCallback() {
            this.shadowRoot.querySelector('button').onclick = e => {
                this.dispatchEvent(new CustomEvent('app-task:task', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        action: 'add',
                        data: {
                            name: this.shadowRoot.querySelector('#input-name').value,
                            task: this.shadowRoot.querySelector('#input-task').value
                        }
                    }
                }))
            }
        }
        diconnectedCallback() { }
        attributeChangedCallback(name, oldValue, newValue) {
            
        }
    })