import { HTMLExtensionElement } from './html-extension-element';
import './ext-text.field.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export class ExtTextField extends HTMLExtensionElement {
  private _value: string;
  private _type: string;
  private _placeholder: string;
  private _prefixIcon: string;
  private _suffixIcon: string;
  private _containerElement: HTMLDivElement;
  private _inputElement: HTMLInputElement;
  private _prefixIconElement: HTMLElement | null;
  private _suffixIconElement: HTMLElement | null;
  private _onFocusHandler: (this: HTMLInputElement, ev: FocusEvent) => void;
  private _onBlurHandler: (this: HTMLInputElement, ev: FocusEvent) => void;
  // private _onInputHandler:

  constructor() {
    super();
    this._value = '';
    this._type = 'text';
    this._placeholder = '';
    this._prefixIcon = '';
    this._suffixIcon = '';
    this._containerElement = document.createElement('div');
    this._inputElement = document.createElement('input');
    this._inputElement.type = this._type;
    this._prefixIconElement = null;
    this._suffixIconElement = null;
    this._onFocusHandler = () => this.classList.add('focused');
    this._onBlurHandler = () => this.classList.remove('focused');
  }
  render(): void {
    if (this._prefixIconElement !== null) {
      this._containerElement.appendChild(this._prefixIconElement);
    }
    this._containerElement.appendChild(this._inputElement);
    if (this._suffixIconElement !== null) {
      this._containerElement.appendChild(this._suffixIconElement);
    }

    this.innerHTML = '';
    this.appendChild(this._containerElement);
  }
  connectedCallback(): void {
    this._inputElement.addEventListener('focus', this._onFocusHandler);
    this._inputElement.addEventListener('blur', this._onBlurHandler);
    this.render();
    return;
  }
  disconnectedCallback(): void {
    this._inputElement.removeEventListener('focus', this._onFocusHandler);
    this._inputElement.removeEventListener('blur', this._onBlurHandler);
    return;
  }
  attributeChangedCallback?(name: string, _: string | null, newValue: string | null): void {
    switch (name) {
      case 'type':
        this.type = newValue || 'text';
        break;
      case 'value':
        this.value = newValue;
        break;
      case 'placeholder':
        this.placeholder = newValue;
        break;
      case 'prefix-icon':
        this.prefixIcon = newValue;
        break;
      case 'suffix-icon':
        this.suffixIcon = newValue;
        break;
    }
  }
  adoptedCallback?(): void {
    return;
  }

  static get observedAttributes(): string[] {
    return ['type', 'value', 'placeholder', 'prefix-icon', 'suffix-icon'];
  }

  public get value(): string {
    return this._value;
  }

  public set value(v: string | null) {
    this._value = v || '';
    this._inputElement.value = this._value;
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public set placeholder(v: string | null) {
    this._placeholder = v || '';
    this._inputElement.placeholder = this._placeholder;
  }

  public get type(): string {
    return this._type;
  }

  public set type(v: string) {
    this._type = v;
    this._inputElement.type = this._type;
  }

  public get prefixIcon(): string {
    return this._prefixIcon;
  }

  public set prefixIcon(v: string | null) {
    this._prefixIcon = v || '';
    if (this._prefixIcon) {
      if (this._prefixIconElement == null) {
        this._prefixIconElement = document.createElement('i');
      }
      this._prefixIconElement.className = `bi bi-${this._prefixIcon}`;
    } else if (this._prefixIconElement !== null) {
      this._prefixIconElement.remove();
      this._prefixIconElement = null;
    }
    this.render();
  }

  public get suffixIcon(): string {
    return this._suffixIcon;
  }

  public set suffixIcon(v: string | null) {
    this._suffixIcon = v || '';
    if (this._suffixIcon) {
      if (this._suffixIconElement == null) {
        this._suffixIconElement = document.createElement('i');
      }
      this._suffixIconElement.className = `bi bi-${this._suffixIcon}`;
    } else if (this._suffixIconElement !== null) {
      this._suffixIconElement.remove();
      this._suffixIconElement = null;
    }
    this.render();
  }
}
