import { HTMLExtensionElement } from './html-extension-element';
import './ext-button.css';

export class ExtButton extends HTMLExtensionElement {
  private _label: string;
  private _outlined: boolean;
  private _prefixIcon: string;
  private _suffixIcon: string;
  private _buttonElement: HTMLButtonElement;
  private _labelElement: HTMLSpanElement;
  private _prefixIconElement: HTMLElement | null;
  private _suffixIconElement: HTMLElement | null;

  constructor() {
    super();
    this._label = '';
    this._outlined = false;
    this._prefixIcon = '';
    this._prefixIconElement = null;
    this._suffixIcon = '';
    this._suffixIconElement = null;
    this._buttonElement = document.createElement('button');
    this._buttonElement.className = 'ext-button-container';
    this._buttonElement.type = 'button';
    this._buttonElement.textContent = '';
    this._labelElement = document.createElement('span');
  }

  static get observedAttributes(): string[] {
    return ['label', 'outlined', 'prefix-icon', 'suffix-icon'];
  }

  onConnectedCallback(): void {
    return;
  }
  onDisconnectedCallback(): void {
    return;
  }
  onAttributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    switch (name) {
      case 'label':
        this.label = newValue;
        break;
      case 'outlined':
        this.outlined = newValue !== null;
        break;
      case 'prefix-icon':
        this.prefixIcon = newValue || '';
        break;
      case 'suffix-icon':
        this.suffixIcon = newValue || '';
        break;
    }
    this.onPropertyChanged(name, oldValue, newValue);
  }
  onAdoptedCallback(): void {
    return;
  }
  onRender(): void {
    if (this._outlined) {
      this._buttonElement.classList.add('outlined');
    }

    this.innerHTML = '';

    if (this._prefixIcon !== '') {
      if (this._prefixIconElement === null) {
        this._prefixIconElement = document.createElement('i');
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

    if (this._suffixIcon !== '') {
      if (this._suffixIconElement === null) {
        this._suffixIconElement = document.createElement('i');
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

  public get label(): string {
    return this._label;
  }

  public set label(v: string | null) {
    this._label = v || '';
  }

  public get outlined(): boolean {
    return this._outlined;
  }

  public set outlined(v: boolean) {
    this._outlined = v;
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
  }
}
