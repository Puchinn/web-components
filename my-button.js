class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["label"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "label") {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute("label") || "Boton";
    this.shadowRoot.innerHTML = `
  <button>
  <slot name="icon"></slot>
  ${label}
  </button>
    `;
  }
}

customElements.define("my-button", MyButton);
