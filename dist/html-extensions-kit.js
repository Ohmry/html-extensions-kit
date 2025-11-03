class HTMLExtensionElement extends HTMLElement {
  /**
   * Specifies the attributes to observe for changes.
   * Should be implemented as a static getter in your subclass.
   *
   * Example:
   * static get observedAttributes() { return ['example-attr']; }
   */
  // static get observedAttributes(): string[] { return []; }
}
class ExtTextField extends HTMLExtensionElement {
  _value;
  _type;
  _placeholder;
  _prefixIcon;
  _suffixIcon;
  _containerElement;
  _inputElement;
  _prefixIconElement;
  _suffixIconElement;
  _onFocusHandler;
  _onBlurHandler;
  // private _onInputHandler:
  constructor() {
    super();
    this._value = "";
    this._type = "text";
    this._placeholder = "";
    this._prefixIcon = "";
    this._suffixIcon = "";
    this._containerElement = document.createElement("div");
    this._inputElement = document.createElement("input");
    this._inputElement.type = this._type;
    this._prefixIconElement = null;
    this._suffixIconElement = null;
    this._onFocusHandler = () => this.classList.add("focused");
    this._onBlurHandler = () => this.classList.remove("focused");
  }
  render() {
    if (this._prefixIconElement !== null) {
      this._containerElement.appendChild(this._prefixIconElement);
    }
    this._containerElement.appendChild(this._inputElement);
    if (this._suffixIconElement !== null) {
      this._containerElement.appendChild(this._suffixIconElement);
    }
    this.innerHTML = "";
    this.appendChild(this._containerElement);
  }
  connectedCallback() {
    this._inputElement.addEventListener("focus", this._onFocusHandler);
    this._inputElement.addEventListener("blur", this._onBlurHandler);
    this.render();
    return;
  }
  disconnectedCallback() {
    this._inputElement.removeEventListener("focus", this._onFocusHandler);
    this._inputElement.removeEventListener("blur", this._onBlurHandler);
    return;
  }
  attributeChangedCallback(name, _, newValue) {
    switch (name) {
      case "type":
        this.type = newValue || "text";
        break;
      case "value":
        this.value = newValue;
        break;
      case "placeholder":
        this.placeholder = newValue;
        break;
      case "prefix-icon":
        this.prefixIcon = newValue;
        break;
      case "suffix-icon":
        this.suffixIcon = newValue;
        break;
    }
  }
  adoptedCallback() {
    return;
  }
  static get observedAttributes() {
    return ["type", "value", "placeholder", "prefix-icon", "suffix-icon"];
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v || "";
    this._inputElement.value = this._value;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(v) {
    this._placeholder = v || "";
    this._inputElement.placeholder = this._placeholder;
  }
  get type() {
    return this._type;
  }
  set type(v) {
    this._type = v;
    this._inputElement.type = this._type;
  }
  get prefixIcon() {
    return this._prefixIcon;
  }
  set prefixIcon(v) {
    this._prefixIcon = v || "";
    if (this._prefixIcon) {
      if (this._prefixIconElement == null) {
        this._prefixIconElement = document.createElement("i");
      }
      this._prefixIconElement.className = `bi bi-${this._prefixIcon}`;
    } else if (this._prefixIconElement !== null) {
      this._prefixIconElement.remove();
      this._prefixIconElement = null;
    }
    this.render();
  }
  get suffixIcon() {
    return this._suffixIcon;
  }
  set suffixIcon(v) {
    this._suffixIcon = v || "";
    if (this._suffixIcon) {
      if (this._suffixIconElement == null) {
        this._suffixIconElement = document.createElement("i");
      }
      this._suffixIconElement.className = `bi bi-${this._suffixIcon}`;
    } else if (this._suffixIconElement !== null) {
      this._suffixIconElement.remove();
      this._suffixIconElement = null;
    }
    this.render();
  }
}
customElements.define("ext-text-field", ExtTextField);
//# sourceMappingURL=html-extensions-kit.js.map
