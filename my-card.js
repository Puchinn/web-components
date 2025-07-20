class MyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    });
  }

  static get observedAttributes() {
    return ["elevated", "color"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "elevated" || "color") {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const isElevated = this.getAttribute("elevated") !== null;
    const color = this.getAttribute("color");
    console.log(color);
    this.shadowRoot.innerHTML = `
      <style>
        .card{
        max-width: 400px;
        padding: 5px;
        border:1px solid gray;
        border-radius: 7px;
        box-shadow: 5px 0px 5px ${isElevated ? "#8f8f8fff" : "transparent"};
        }
        .header {   
            font-size: 18px;
            padding:0;
            background-color: ${color || "#ffffff"};
        }
        .body{
            font-size: 16px;
            color: #282828ff;
        }
        .footer{
            font-size:17px;
            color:red;
        }
      </style>

  <div class="card">
  <div class="header" >
    <slot name="header"></slot>
    
  </div>
    
    <slot class="body" name="body"></slot>
    <slot class="footer" name="footer">
    </slot>
  </div>

    `;
  }
}

customElements.define("my-card", MyCard);
