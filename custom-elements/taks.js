customElements.define('app-task',
    class appTask extends HTMLElement {
        static get observedAttributes() { return ['name', 'task'] }
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(document.querySelector('#app-task').content.cloneNode(true))
        }
        connectedCallback() {
            this.dispatchEvent(new CustomEvent('app-task:task', {
                bubbles: true,
                composed: true,
                detail: {
                    action: 'added'
                }
            }))
            this.shadowRoot.querySelector('button').onclick = e => {
                this.dispatchEvent(new CustomEvent('app-task:task', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        action: 'remove'
                    }
                }))
                this.remove()
            }
            
        }
        diconnectedCallback() { }
        attributeChangedCallback(name, oldValue, newValue) {
            if (appTask.observedAttributes.find(attr => attr == name)) {
                this.shadowRoot.querySelector(`[type=${name}] span`).textContent = newValue
            }
        }
    })