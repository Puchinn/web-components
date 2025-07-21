class CounterDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    });
    this.count = 0;
    this.min = 0;
    this.max = 0;
  }

  connectedCallback() {
    this.min = this.hasAttribute("min")
      ? parseInt(this.getAttribute("min"))
      : null;
    this.max = this.hasAttribute("max")
      ? parseInt(this.getAttribute("max"))
      : null;

    this.render();
  }

  increment(delta) {
    const newCount = this.count + delta;
    if (this.max !== null && newCount > this.max) return;
    if (this.min !== null && newCount < this.min) return;
    this.count += delta;
    this.render();
  }

  reset() {
    this.count = 0;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .display {
          font-size: 2rem;
          padding: 10px;
          margin-top: 1rem;
          border: 2px dashed gray;
          text-align: center;
        }
      </style>
      <div class="display">Contador: ${this.count}</div>
    `;
  }
}

customElements.define("counter-display", CounterDisplay);
