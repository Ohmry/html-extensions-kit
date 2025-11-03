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
  private _onClickHandler: (this: HTMLButtonElement, ev: MouseEvent) => void;

  constructor() {
    super();
    this._label = '';
    this._outlined = false;
    this._prefixIcon = '';
    this._prefixIconElement = null;
    this._suffixIcon = '';
    this._suffixIconElement = null;
    this._buttonElement = document.createElement('button');
    this._buttonElement.type = 'button';
    this._buttonElement.textContent = this._label;
    this._labelElement = document.createElement('span');

    this._onClickHandler = (e) =>
      this.dispatchEvent(
        new CustomEvent('click', {
          detail: e
        })
      );
  }

  static get observedAttributes(): string[] {
    return ['label', 'outlined', 'prefix-icon', 'suffix-icon'];
  }

  connectedCallback(): void {
    this._buttonElement.addEventListener('click', this._onClickHandler);
    this.render();
  }

  disconnectedCallback(): void {
    this._buttonElement.removeEventListener('click', this._onClickHandler);
  }

  attributeChangedCallback?(name: string, _: string | null, newValue: string | null): void {
    switch (name) {
      case 'label':
        this.label = newValue;
        break;
      case 'outlined':
        this._outlined = true;
        break;
      case 'prefix-icon':
        this._prefixIcon = newValue || '';
        break;
      case 'suffix-icon':
        this._suffixIcon = newValue || '';
        break;
    }
  }

  adoptedCallback?(): void {
    return;
  }

  render(): void {
    this._labelElement.textContent = this._label;

    if (this._outlined) {
      this._buttonElement.classList.add('outlined');
    }

    if (this._prefixIcon !== '') {
      if (this._prefixIconElement === null) {
        this._prefixIconElement = document.createElement('i');
      }
      this._prefixIconElement.className = `bi bi-${this._prefixIcon}`;
    } else if (this._prefixIconElement !== null) {
      this._prefixIconElement.remove();
      this._prefixIconElement = null;
    }

    if (this._suffixIcon !== '') {
      if (this._suffixIconElement === null) {
        this._suffixIconElement = document.createElement('i');
      }
      this._suffixIconElement.className = `bi bi-${this._suffixIcon}`;
    } else if (this._suffixIconElement !== null) {
      this._suffixIconElement.remove();
      this._suffixIconElement = null;
    }

    this.innerHTML = '';
    if (this._prefixIconElement !== null) {
      this._buttonElement.appendChild(this._prefixIconElement);
    }
    this._buttonElement.appendChild(this._labelElement);
    if (this._suffixIconElement !== null) {
      this._buttonElement.appendChild(this._suffixIconElement);
    }
    this.appendChild(this._buttonElement);
  }

  public get label(): string {
    return this._label;
  }

  public set label(v: string | null) {
    this._label = v || '';
    this.render();
  }

  public get outlined(): boolean {
    return this._outlined;
  }

  public set outlined(v: boolean) {
    this._outlined = v;
    this.render();
  }

  public get prefixIcon(): string {
    return this._prefixIcon;
  }

  public set prefixIcon(v: string | null) {
    this._prefixIcon = v || '';
    this.render();
  }

  public get suffixIcon(): string {
    return this._suffixIcon;
  }

  public set suffixIcon(v: string | null) {
    this._suffixIcon = v || '';
    this.render();
  }
}
