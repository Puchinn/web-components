class CounterButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    const action = this.getAttribute("action") || "increment";

    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 0.5rem 1rem;
          margin: 0 5px;
          font-size: 1.2rem;
          cursor: pointer;
        }
      </style>
      <button>${action === "decrement" ? "-" : "+"}</button>
      `;

    this.shadowRoot.addEventListener("click", () => {
      const value = action === "decrement" ? -1 : 1;
      this.dispatchEvent(
        new CustomEvent("counter-changed", {
          detail: { value },
          bubbles: true,
          composed: true,
        })
      );
    });
  }
}

customElements.define("counter-button", CounterButton);
