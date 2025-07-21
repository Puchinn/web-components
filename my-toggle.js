class MyToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    });
    this.on = false;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const color = this.on ? "#4caf50" : "#cccccc";
    const label = this.on ? "ON" : "OFF";

    this.shadowRoot.innerHTML = `
    <style>
        button {
          background: ${color};
          border: none;
          border-radius: 30px;
          padding: 10px 20px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }
      </style>
      <button>${label}</button>
    `;

    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.on = !this.on;
      this.render();
    });

    this.dispatchEvent(
      new CustomEvent("toggle-changed", {
        detail: { value: this.on },
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define("my-toggle", MyToggle);
