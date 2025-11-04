import { HTMLExtensionElement } from './html-extension-element';
import './ext-selectbox.css';

export class ExtSelectbox extends HTMLExtensionElement {
  private _value: string;
  private _label: string;
  private _dataList: { label: string; value: string }[];
  private _containerElement: HTMLDivElement;
  private _downIconElement: HTMLElement;
  private _valueElement: HTMLSpanElement;
  private _itemContainerElement: HTMLDivElement;
  private _itemElements: HTMLDivElement[];
  private _isItemContainerOpen: boolean;
  private _onBlurHandler: (this: Document, e: FocusEvent) => void;
  private _onContainerMouseOverHandler: (this: HTMLDivElement, e: FocusEvent) => void;
  private _onContainerMouseOutHandler: (this: HTMLDivElement, e: FocusEvent) => void;
  private _onContainerClickHandler: (this: HTMLDivElement, e: MouseEvent) => void;
  private _onItemClickHandler: (this: HTMLDivElement, e: MouseEvent) => void;

  constructor() {
    super();
    this._dataList = Array.from(this.querySelectorAll('option')).map((option) => ({
      label: option.textContent || '',
      value: option.value
    }));
    this._value = this._dataList[0]?.value || '';
    this._label = this._dataList[0]?.label || '';
    this._containerElement = document.createElement('div');
    this._containerElement.className = 'ext-selectbox-container';
    this._downIconElement = document.createElement('i');
    this._downIconElement.className = 'bi bi-chevron-down';
    this._valueElement = document.createElement('span');
    this._itemContainerElement = document.createElement('div');
    this._itemContainerElement.className = 'ext-selectbox-item-container';
    this._itemElements = this._dataList.map((data) => {
      const element = document.createElement('div') as HTMLDivElement;
      element.dataset.value = data.value;
      element.textContent = data.label;
      return element;
    });
    this._isItemContainerOpen = false;

    this._onBlurHandler = (e: FocusEvent) => {
      if (
        !this._containerElement.contains(e.target as Node) &&
        !this._itemContainerElement.contains(e.target as Node)
      ) {
        this._isItemContainerOpen = false;
        this.render();
      }
    };
    this._onContainerMouseOverHandler = () => this._containerElement.classList.add('focused');
    this._onContainerMouseOutHandler = () => this._containerElement.classList.remove('focused');
    this._onContainerClickHandler = () => {
      this._isItemContainerOpen = !this._isItemContainerOpen;
      this.render();
    };
    this._onItemClickHandler = (e: MouseEvent): void => {
      const item = e.target as HTMLDivElement;
      this._isItemContainerOpen = false;
      this.value = item.dataset.value || '';
      this._label = item.textContent || '';
      this.render();
    };
  }

  connectedCallback(): void {
    this.render();
    document.addEventListener('mousedown', this._onBlurHandler);
    this._containerElement.addEventListener('mouseover', this._onContainerMouseOverHandler);
    this._containerElement.addEventListener('mouseout', this._onContainerMouseOutHandler);
    this._containerElement.addEventListener('click', this._onContainerClickHandler);
    this._itemElements.forEach((element) =>
      element.addEventListener('click', this._onItemClickHandler)
    );
  }
  disconnectedCallback(): void {
    document.removeEventListener('mousedown', this._onBlurHandler);
    this._containerElement.removeEventListener('mouseover', this._onContainerMouseOverHandler);
    this._containerElement.removeEventListener('mouseout', this._onContainerMouseOutHandler);
    this._containerElement.removeEventListener('click', this._onContainerClickHandler);
    this._itemElements.forEach((element) =>
      element.removeEventListener('click', this._onItemClickHandler)
    );
  }
  attributeChangedCallback?(name: string, oldValue: string | null, newValue: string | null): void {
    switch (name) {
      case 'value':
        if (oldValue != newValue) {
          const item = this._dataList.find((item) => item.value === newValue);
          this._label = item?.label || '';
          this.value = item?.value || '';
        }
        break;
    }
  }
  adoptedCallback?(): void {
    throw new Error('Method not implemented.');
  }
  render(): void {
    this._valueElement.textContent = this._label;
    this.setAttribute('value', this._value);

    this._containerElement.appendChild(this._valueElement);
    this._containerElement.appendChild(this._downIconElement);

    this.innerHTML = '';
    this.appendChild(this._containerElement);
    if (this._isItemContainerOpen) {
      this._itemElements.forEach((element) => this._itemContainerElement.appendChild(element));
      this.appendChild(this._itemContainerElement);
    } else {
      this._itemContainerElement.remove();
    }
  }

  static get observedAttributes(): string[] {
    return ['value'];
  }

  public get value(): string {
    return this._value;
  }

  public set value(v: string) {
    this._value = v;
    this.render();
  }

  public get dataList(): { label: string; value: string }[] {
    return this._dataList;
  }
}
