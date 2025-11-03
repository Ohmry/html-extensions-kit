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
class ExtButton extends HTMLExtensionElement {
  _label;
  _outlined;
  _prefixIcon;
  _suffixIcon;
  _buttonElement;
  _labelElement;
  _prefixIconElement;
  _suffixIconElement;
  _onClickHandler;
  constructor() {
    super();
    this._label = "";
    this._outlined = false;
    this._prefixIcon = "";
    this._prefixIconElement = null;
    this._suffixIcon = "";
    this._suffixIconElement = null;
    this._buttonElement = document.createElement("button");
    this._buttonElement.type = "button";
    this._buttonElement.textContent = this._label;
    this._labelElement = document.createElement("span");
    this._onClickHandler = (e) => this.dispatchEvent(
      new CustomEvent("click", {
        detail: e
      })
    );
  }
  static get observedAttributes() {
    return ["label", "outlined", "prefix-icon", "suffix-icon"];
  }
  connectedCallback() {
    this._buttonElement.addEventListener("click", this._onClickHandler);
    this.render();
  }
  disconnectedCallback() {
    this._buttonElement.removeEventListener("click", this._onClickHandler);
  }
  attributeChangedCallback(name, _, newValue) {
    switch (name) {
      case "label":
        this.label = newValue;
        break;
      case "outlined":
        this._outlined = true;
        break;
      case "prefix-icon":
        this._prefixIcon = newValue || "";
        break;
      case "suffix-icon":
        this._suffixIcon = newValue || "";
        break;
    }
  }
  adoptedCallback() {
    return;
  }
  render() {
    this._labelElement.textContent = this._label;
    if (this._outlined) {
      this._buttonElement.classList.add("outlined");
    }
    if (this._prefixIcon !== "") {
      if (this._prefixIconElement === null) {
        this._prefixIconElement = document.createElement("i");
      }
      this._prefixIconElement.className = `bi bi-${this._prefixIcon}`;
    } else if (this._prefixIconElement !== null) {
      this._prefixIconElement.remove();
      this._prefixIconElement = null;
    }
    if (this._suffixIcon !== "") {
      if (this._suffixIconElement === null) {
        this._suffixIconElement = document.createElement("i");
      }
      this._suffixIconElement.className = `bi bi-${this._suffixIcon}`;
    } else if (this._suffixIconElement !== null) {
      this._suffixIconElement.remove();
      this._suffixIconElement = null;
    }
    this.innerHTML = "";
    if (this._prefixIconElement !== null) {
      this._buttonElement.appendChild(this._prefixIconElement);
    }
    this._buttonElement.appendChild(this._labelElement);
    if (this._suffixIconElement !== null) {
      this._buttonElement.appendChild(this._suffixIconElement);
    }
    this.appendChild(this._buttonElement);
  }
  get label() {
    return this._label;
  }
  set label(v) {
    this._label = v || "";
    this.render();
  }
  get outlined() {
    return this._outlined;
  }
  set outlined(v) {
    this._outlined = v;
    this.render();
  }
  get prefixIcon() {
    return this._prefixIcon;
  }
  set prefixIcon(v) {
    this._prefixIcon = v || "";
    this.render();
  }
  get suffixIcon() {
    return this._suffixIcon;
  }
  set suffixIcon(v) {
    this._suffixIcon = v || "";
    this.render();
  }
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
customElements.define("ext-button", ExtButton);
//# sourceMappingURL=html-extensions-kit.js.map
