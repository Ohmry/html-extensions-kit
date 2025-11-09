import { HTMLExtensionElement } from './html-extension-element';
import './ext-text.field.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export class ExtTextField extends HTMLExtensionElement {
  private _type: string;
  private _prefixIcon: string;
  private _suffixIcon: string;
  private _containerElement: HTMLDivElement;
  private _inputElement: HTMLInputElement;
  private _prefixIconElement: HTMLElement | null;
  private _suffixIconElement: HTMLElement | null;

  private _onFocusHandler: (e: FocusEvent) => void;
  private _onBlurHandler: (e: FocusEvent) => void;

  constructor() {
    super();
    this._type = 'text';
    this._prefixIcon = '';
    this._suffixIcon = '';
    this._containerElement = document.createElement('div');
    this._inputElement = document.createElement('input');
    this._inputElement.type = this._type;
    this._prefixIconElement = null;
    this._suffixIconElement = null;

    this._onFocusHandler = () => this.classList.add('focused');
    this._onBlurHandler = () => this.classList.remove('focused');

    this.addDelegatedElement(this._inputElement);
  }

  static get observedAttributes(): string[] {
    return ['type', 'value', 'placeholder', 'prefix-icon', 'suffix-icon', 'name'];
  }

  onConnectedCallback(): void {
    this.addEventListener('focus', this._onFocusHandler);
    this.addEventListener('blur', this._onBlurHandler);
    return;
  }

  onDisconnectedCallback(): void {
    this.removeEventListener('focus', this._onFocusHandler);
    this.removeEventListener('blur', this._onBlurHandler);
    return;
  }

  onAttributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
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
      case 'name':
        this.name = newValue;
        break;
    }
    this.onPropertyChanged(name, oldValue, newValue);
  }

  onAdoptedCallback(): void {
    return;
  }

  onRender(): void {
    if (this._prefixIcon !== '') {
      if (this._prefixIconElement == null) {
        this._prefixIconElement = document.createElement('i');
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

    if (this._suffixIcon !== '') {
      if (this._suffixIconElement == null) {
        this._suffixIconElement = document.createElement('i');
      }
      this._suffixIconElement.className = `bi bi-${this._suffixIcon}`;
      this._containerElement.appendChild(this._suffixIconElement);
    } else {
      if (this._suffixIconElement != null) {
        this._suffixIconElement.remove();
        this._suffixIconElement = null;
      }
    }

    this.innerHTML = '';
    this.appendChild(this._containerElement);
  }

  public get value(): string {
    return this._inputElement.value;
  }

  public set value(v: string | null) {
    this._inputElement.value = v || '';
  }

  public get name(): string {
    return this._inputElement.name;
  }

  public set name(v: string | null) {
    this._inputElement.name = v || '';
  }

  public get placeholder(): string {
    return this._inputElement.placeholder;
  }

  public set placeholder(v: string | null) {
    this._inputElement.placeholder = v || '';
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
  }
}
