import { HTMLExtensionElement } from './html-extension-element';
export declare class ExtSelectbox extends HTMLExtensionElement {
    private _value;
    private _label;
    private _dataList;
    private _containerElement;
    private _downIconElement;
    private _valueElement;
    private _itemContainerElement;
    private _itemElements;
    private _isItemContainerOpen;
    private _onBlurHandler;
    private _onContainerMouseOverHandler;
    private _onContainerMouseOutHandler;
    private _onContainerClickHandler;
    private _onItemClickHandler;
    constructor();
    static get observedAttributes(): string[];
    onConnectedCallback(): void;
    onDisconnectedCallback(): void;
    onAttributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    onAdoptedCallback(): void;
    onRender(): void;
    get value(): string;
    set value(v: string | null);
    get dataList(): {
        label: string;
        value: string;
    }[];
}
