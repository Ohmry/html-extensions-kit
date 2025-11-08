class PropertyChangeEvent extends CustomEvent {
  name;
  oldValue;
  newValue;
  constructor(name, oldValue, newValue, options) {
    super("property-change", {
      ...options,
      bubbles: options?.bubbles ?? true,
      cancelable: options?.cancelable ?? true,
      composed: options?.composed ?? true,
      detail: {
        name,
        oldValue,
        newValue
      }
    });
    this.name = name;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
}
class HTMLEventUtils {
  static clone(e) {
    const type = e.type;
    if (typeof DragEvent !== "undefined" && e instanceof DragEvent) {
      const newEvent = new DragEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        detail: e.detail,
        dataTransfer: e.dataTransfer,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        button: e.button,
        buttons: e.buttons,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        relatedTarget: e.relatedTarget
      });
      return newEvent;
    } else if (typeof ClipboardEvent !== "undefined" && e instanceof ClipboardEvent) {
      const newEvent = new ClipboardEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        clipboardData: e.clipboardData
      });
      return newEvent;
    } else if (typeof CompositionEvent !== "undefined" && e instanceof CompositionEvent) {
      const newEvent = new CompositionEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        data: e.data
      });
      return newEvent;
    } else if (typeof InputEvent !== "undefined" && e instanceof InputEvent) {
      const newEvent = new InputEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        data: e.data,
        inputType: e.inputType,
        dataTransfer: e.dataTransfer,
        isComposing: e.isComposing
      });
      return newEvent;
    } else if (typeof KeyboardEvent !== "undefined" && e instanceof KeyboardEvent) {
      const newEvent = new KeyboardEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        key: e.key,
        code: e.code,
        location: e.location,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        repeat: e.repeat,
        isComposing: e.isComposing
      });
      return newEvent;
    } else if (typeof PointerEvent !== "undefined" && e instanceof PointerEvent) {
      const newEvent = new PointerEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        pointerId: e.pointerId,
        width: e.width,
        height: e.height,
        pressure: e.pressure,
        tangentialPressure: e.tangentialPressure,
        tiltX: e.tiltX,
        tiltY: e.tiltY,
        twist: e.twist,
        pointerType: e.pointerType,
        isPrimary: e.isPrimary,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        button: e.button,
        buttons: e.buttons,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        relatedTarget: e.relatedTarget
      });
      return newEvent;
    } else if (typeof TouchEvent !== "undefined" && e instanceof TouchEvent) {
      try {
        const newEvent = new TouchEvent(type, {
          bubbles: e.bubbles,
          cancelable: e.cancelable,
          composed: e.composed,
          touches: Array.from(e.touches),
          targetTouches: Array.from(e.targetTouches),
          changedTouches: Array.from(e.changedTouches),
          ctrlKey: e.ctrlKey,
          shiftKey: e.shiftKey,
          altKey: e.altKey,
          metaKey: e.metaKey
        });
        return newEvent;
      } catch {
        const uiEvent = e;
        const newEvent = new UIEvent(type, {
          bubbles: e.bubbles,
          cancelable: e.cancelable,
          composed: e.composed,
          detail: uiEvent.detail,
          view: uiEvent.view
        });
        return newEvent;
      }
    } else if (typeof WheelEvent !== "undefined" && e instanceof WheelEvent) {
      const newEvent = new WheelEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        deltaZ: e.deltaZ,
        deltaMode: e.deltaMode,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        button: e.button,
        buttons: e.buttons,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        relatedTarget: e.relatedTarget
      });
      return newEvent;
    } else if (typeof MouseEvent !== "undefined" && e instanceof MouseEvent) {
      const newEvent = new MouseEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        detail: e.detail,
        view: e.view,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        button: e.button,
        buttons: e.buttons,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        relatedTarget: e.relatedTarget
      });
      return newEvent;
    } else if (typeof FocusEvent !== "undefined" && e instanceof FocusEvent) {
      const newEvent = new FocusEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        relatedTarget: e.relatedTarget
      });
      return newEvent;
    } else if (typeof AnimationEvent !== "undefined" && e instanceof AnimationEvent) {
      const newEvent = new AnimationEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        animationName: e.animationName,
        elapsedTime: e.elapsedTime,
        pseudoElement: e.pseudoElement
      });
      return newEvent;
    } else if (typeof TransitionEvent !== "undefined" && e instanceof TransitionEvent) {
      const newEvent = new TransitionEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        propertyName: e.propertyName,
        elapsedTime: e.elapsedTime,
        pseudoElement: e.pseudoElement
      });
      return newEvent;
    } else if (typeof UIEvent !== "undefined" && e instanceof UIEvent) {
      const newEvent = new UIEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        detail: e.detail,
        view: e.view
      });
      return newEvent;
    } else if (typeof ErrorEvent !== "undefined" && e instanceof ErrorEvent) {
      const newEvent = new ErrorEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        error: e.error
      });
      return newEvent;
    } else if (typeof MessageEvent !== "undefined" && e instanceof MessageEvent) {
      const newEvent = new MessageEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        data: e.data,
        origin: e.origin,
        lastEventId: e.lastEventId,
        source: e.source,
        ports: Array.from(e.ports)
      });
      return newEvent;
    } else if (typeof ProgressEvent !== "undefined" && e instanceof ProgressEvent) {
      const newEvent = new ProgressEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        lengthComputable: e.lengthComputable,
        loaded: e.loaded,
        total: e.total
      });
      return newEvent;
    } else if (typeof StorageEvent !== "undefined" && e instanceof StorageEvent) {
      const newEvent = new StorageEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        key: e.key,
        oldValue: e.oldValue,
        newValue: e.newValue,
        url: e.url,
        storageArea: e.storageArea
      });
      return newEvent;
    } else if (typeof HashChangeEvent !== "undefined" && e instanceof HashChangeEvent) {
      const newEvent = new HashChangeEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        oldURL: e.oldURL,
        newURL: e.newURL
      });
      return newEvent;
    } else if (typeof PopStateEvent !== "undefined" && e instanceof PopStateEvent) {
      const newEvent = new PopStateEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        state: e.state
      });
      return newEvent;
    } else if (typeof PageTransitionEvent !== "undefined" && e instanceof PageTransitionEvent) {
      const newEvent = new PageTransitionEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        persisted: e.persisted
      });
      return newEvent;
    } else {
      const newEvent = new Event(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed
      });
      return newEvent;
    }
  }
}
class HTMLExtensionElement extends HTMLElement {
  _delegatedElements = [];
  _delegatedElementEvents = /* @__PURE__ */ new WeakMap();
  /**
   * Called when the element is added to the document's DOM.
   */
  connectedCallback() {
    this.onConnectedCallback();
    this._attachEventDelegator();
    this.render();
  }
  /**
   * Called when the element is removed from the document's DOM.
   */
  disconnectedCallback() {
    this.onDisconnectedCallback();
    this._detachDeventDelegator();
  }
  /**
   * Called when an attribute of the element is added, removed, updated, or replaced.
   *
   * @param name The name of the attribute that changed
   * @param oldValue The previous value of the attribute
   * @param newValue The new value of the attribute
   */
  attributeChangedCallback(name, oldValue, newValue) {
    this.onAttributeChangedCallback(name, oldValue, newValue);
    this.render();
  }
  /**
   * Called when the element is adopted into a new document.
   */
  adoptedCallback() {
    this.onAdoptedCallback();
  }
  /**
   * Adds an element to the event delegation system.
   * Automatically detects event handlers (properties starting with 'on') and sets up delegation.
   *
   * @param element The HTML element to add for event delegation
   */
  addDelegatedElement(element) {
    if (!this._delegatedElements.includes(element)) {
      this._delegatedElements.push(element);
      const delegatedEvents = [];
      for (const key in element) {
        if (key.startsWith("on")) delegatedEvents.push(key.slice(2));
      }
      this._delegatedElementEvents.set(element, delegatedEvents);
    }
  }
  addDelegatedElements(elements) {
    elements.forEach((element) => this.addDelegatedElement(element));
  }
  /**
   * Removes an element from the event delegation system.
   *
   * @param element The HTML element to remove from event delegation
   */
  removeDelegatedElement(element) {
    const index = this._delegatedElements.indexOf(element);
    if (index >= 0) {
      this._delegatedElements.splice(index, 1);
      this._delegatedElementEvents.delete(element);
    }
  }
  /**
   * Handles delegated events by cloning and re-dispatching them on this element.
   * Stops event propagation to prevent duplicate handling.
   *
   * @param e The event to delegate
   */
  _handleEventDelegator = (e) => {
    e.stopPropagation();
    const cloneEvent = HTMLEventUtils.clone(e);
    this.dispatchEvent(cloneEvent);
  };
  /**
   * Attaches event listeners to all delegated elements for event delegation.
   */
  _attachEventDelegator() {
    this._delegatedElements.forEach((element) => {
      this._delegatedElementEvents.get(element)?.forEach((eventName) => {
        element.addEventListener(eventName, this._handleEventDelegator);
      });
    });
  }
  /**
   * Detaches event listeners from all delegated elements.
   */
  _detachDeventDelegator() {
    this._delegatedElements.forEach((element) => {
      this._delegatedElementEvents.get(element)?.forEach((eventName) => {
        element.removeEventListener(eventName, this._handleEventDelegator);
      });
    });
  }
  /**
   * Handles property changes and dispatches a change event if the value actually changed.
   * Also triggers a re-render of the component.
   *
   * @param oldValue The previous property value
   * @param newValue The new property value
   */
  onPropertyChanged(name, oldValue, newValue) {
    if (oldValue != newValue) {
      const propertyChangeEvent = new PropertyChangeEvent(name, oldValue, newValue);
      this.dispatchEvent(propertyChangeEvent);
    }
    this.render();
  }
  /**
   * Triggers a re-render of the component by calling the onRender method.
   */
  render() {
    this.onRender();
  }
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
  constructor() {
    super();
    this._label = "";
    this._outlined = false;
    this._prefixIcon = "";
    this._prefixIconElement = null;
    this._suffixIcon = "";
    this._suffixIconElement = null;
    this._buttonElement = document.createElement("button");
    this._buttonElement.className = "ext-button-container";
    this._buttonElement.type = "button";
    this._buttonElement.textContent = "";
    this._labelElement = document.createElement("span");
  }
  static get observedAttributes() {
    return ["label", "outlined", "prefix-icon", "suffix-icon"];
  }
  onConnectedCallback() {
    return;
  }
  onDisconnectedCallback() {
    return;
  }
  onAttributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "label":
        this.label = newValue;
        break;
      case "outlined":
        this.outlined = newValue !== null;
        break;
      case "prefix-icon":
        this.prefixIcon = newValue || "";
        break;
      case "suffix-icon":
        this.suffixIcon = newValue || "";
        break;
    }
    this.onPropertyChanged(name, oldValue, newValue);
  }
  onAdoptedCallback() {
    return;
  }
  onRender() {
    if (this._outlined) {
      this._buttonElement.classList.add("outlined");
    }
    this.innerHTML = "";
    if (this._prefixIcon !== "") {
      if (this._prefixIconElement === null) {
        this._prefixIconElement = document.createElement("i");
      }
      this._prefixIconElement.className = `bi bi-${this._prefixIcon}`;
      this._buttonElement.appendChild(this._prefixIconElement);
    } else {
      if (this._prefixIconElement !== null) {
        this._prefixIconElement.remove();
        this._prefixIconElement = null;
      }
    }
    this._labelElement.textContent = this._label;
    this._buttonElement.appendChild(this._labelElement);
    if (this._suffixIcon !== "") {
      if (this._suffixIconElement === null) {
        this._suffixIconElement = document.createElement("i");
      }
      this._suffixIconElement.className = `bi bi-${this._suffixIcon}`;
      this._buttonElement.appendChild(this._suffixIconElement);
    } else {
      if (this._suffixIconElement !== null) {
        this._suffixIconElement.remove();
        this._suffixIconElement = null;
      }
    }
    this.appendChild(this._buttonElement);
  }
  get label() {
    return this._label;
  }
  set label(v) {
    this._label = v || "";
  }
  get outlined() {
    return this._outlined;
  }
  set outlined(v) {
    this._outlined = v;
  }
  get prefixIcon() {
    return this._prefixIcon;
  }
  set prefixIcon(v) {
    this._prefixIcon = v || "";
  }
  get suffixIcon() {
    return this._suffixIcon;
  }
  set suffixIcon(v) {
    this._suffixIcon = v || "";
  }
}
class ExtSelectbox extends HTMLExtensionElement {
  _value;
  _label;
  _dataList;
  _containerElement;
  _downIconElement;
  _valueElement;
  _itemContainerElement;
  _itemElements;
  _isItemContainerOpen;
  _onBlurHandler;
  _onContainerMouseOverHandler;
  _onContainerMouseOutHandler;
  _onContainerClickHandler;
  _onItemClickHandler;
  constructor() {
    super();
    this._dataList = Array.from(this.querySelectorAll("option")).map((option) => ({
      label: option.textContent || "",
      value: option.value
    }));
    this._value = this._dataList[0]?.value || "";
    this._label = this._dataList[0]?.label || "";
    this._containerElement = document.createElement("div");
    this._containerElement.className = "ext-selectbox-container";
    this._downIconElement = document.createElement("i");
    this._downIconElement.className = "bi bi-chevron-down";
    this._valueElement = document.createElement("span");
    this._itemContainerElement = document.createElement("div");
    this._itemContainerElement.className = "ext-selectbox-item-container";
    this._itemElements = this._dataList.map((data) => {
      const element = document.createElement("div");
      element.dataset.value = data.value;
      element.textContent = data.label;
      return element;
    });
    this._isItemContainerOpen = false;
    this._onBlurHandler = (e) => {
      if (!this.contains(e.target) && !this._containerElement.contains(e.target) && !this._itemContainerElement.contains(e.target)) {
        this._isItemContainerOpen = false;
        this.render();
      }
    };
    this._onContainerMouseOverHandler = () => this._containerElement.classList.add("focused");
    this._onContainerMouseOutHandler = () => this._containerElement.classList.remove("focused");
    this._onContainerClickHandler = () => {
      this._isItemContainerOpen = !this._isItemContainerOpen;
      this.render();
    };
    this._onItemClickHandler = (e) => {
      e.stopPropagation();
      const item = e.target;
      this._isItemContainerOpen = false;
      this.setAttribute("value", item.dataset.value || "");
      this.render();
    };
    this.addDelegatedElement(this._containerElement);
  }
  static get observedAttributes() {
    return ["value"];
  }
  onConnectedCallback() {
    this._itemElements.forEach((element) => {
      element.addEventListener("click", this._onItemClickHandler);
    });
    document.addEventListener("click", this._onBlurHandler);
    this.addEventListener("mouseover", this._onContainerMouseOverHandler);
    this.addEventListener("mouseout", this._onContainerMouseOutHandler);
    this.addEventListener("click", this._onContainerClickHandler);
    return;
  }
  onDisconnectedCallback() {
    this._itemElements.forEach((element) => {
      element.removeEventListener("click", this._onItemClickHandler);
    });
    document.removeEventListener("click", this._onBlurHandler);
    this.removeEventListener("mouseover", this._onContainerMouseOverHandler);
    this.removeEventListener("mouseout", this._onContainerMouseOutHandler);
    this.addEventListener("click", this._onContainerClickHandler);
    return;
  }
  onAttributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "value":
        if (oldValue != newValue) {
          const item = this._dataList.find((item2) => item2.value === newValue);
          this._label = item?.label || "";
          this._value = item?.value || "";
        }
        break;
    }
    this.onPropertyChanged(name, oldValue, newValue);
  }
  onAdoptedCallback() {
    return;
  }
  onRender() {
    this._valueElement.textContent = this._label;
    this._containerElement.appendChild(this._valueElement);
    this._containerElement.appendChild(this._downIconElement);
    this.innerHTML = "";
    this.appendChild(this._containerElement);
    if (this._isItemContainerOpen) {
      this._itemElements.forEach((element) => this._itemContainerElement.appendChild(element));
      this.appendChild(this._itemContainerElement);
    } else {
      this._itemContainerElement.remove();
    }
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v || "";
    this.setAttribute("value", this._value);
  }
  get dataList() {
    return this._dataList;
  }
}
class ExtTextField extends HTMLExtensionElement {
  _type;
  _prefixIcon;
  _suffixIcon;
  _containerElement;
  _inputElement;
  _prefixIconElement;
  _suffixIconElement;
  _onFocusHandler;
  _onBlurHandler;
  constructor() {
    super();
    this._type = "text";
    this._prefixIcon = "";
    this._suffixIcon = "";
    this._containerElement = document.createElement("div");
    this._inputElement = document.createElement("input");
    this._inputElement.type = this._type;
    this._prefixIconElement = null;
    this._suffixIconElement = null;
    this._onFocusHandler = () => this.classList.add("focused");
    this._onBlurHandler = () => this.classList.remove("focused");
    this.addDelegatedElement(this._inputElement);
  }
  static get observedAttributes() {
    return ["type", "value", "placeholder", "prefix-icon", "suffix-icon", "name"];
  }
  onConnectedCallback() {
    this.addEventListener("focus", this._onFocusHandler);
    this.addEventListener("blur", this._onBlurHandler);
    return;
  }
  onDisconnectedCallback() {
    this.removeEventListener("focus", this._onFocusHandler);
    this.removeEventListener("blur", this._onBlurHandler);
    return;
  }
  onAttributeChangedCallback(name, oldValue, newValue) {
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
      case "name":
        this.name = newValue;
        break;
    }
    this.onPropertyChanged(name, oldValue, newValue);
  }
  onAdoptedCallback() {
    return;
  }
  onRender() {
    if (this._prefixIcon !== "") {
      if (this._prefixIconElement == null) {
        this._prefixIconElement = document.createElement("i");
      }
      this._prefixIconElement.className = `bi bi-${this._prefixIcon}`;
      this._containerElement.appendChild(this._prefixIconElement);
    } else {
      if (this._prefixIconElement != null) {
        this._prefixIconElement.remove();
        this._prefixIconElement = null;
      }
    }
    this._containerElement.appendChild(this._inputElement);
    if (this._suffixIcon !== "") {
      if (this._suffixIconElement == null) {
        this._suffixIconElement = document.createElement("i");
      }
      this._suffixIconElement.className = `bi bi-${this._suffixIcon}`;
      this._containerElement.appendChild(this._suffixIconElement);
    } else {
      if (this._suffixIconElement != null) {
        this._suffixIconElement.remove();
        this._suffixIconElement = null;
      }
    }
    this.innerHTML = "";
    this.appendChild(this._containerElement);
  }
  get value() {
    return this._inputElement.value;
  }
  set value(v) {
    this._inputElement.value = v || "";
  }
  get name() {
    return this._inputElement.name;
  }
  set name(v) {
    this._inputElement.name = v || "";
  }
  get placeholder() {
    return this._inputElement.placeholder;
  }
  set placeholder(v) {
    this._inputElement.placeholder = v || "";
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
  }
}
customElements.define("ext-text-field", ExtTextField);
customElements.define("ext-button", ExtButton);
customElements.define("ext-selectbox", ExtSelectbox);
//# sourceMappingURL=html-extensions-kit.js.map
