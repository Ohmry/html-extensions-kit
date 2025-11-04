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
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback?(name: string, oldValue: string | null, newValue: string | null): void;
    adoptedCallback?(): void;
    render(): void;
    static get observedAttributes(): string[];
    get value(): string;
    set value(v: string);
    get dataList(): {
        label: string;
        value: string;
    }[];
}
//# sourceMappingURL=ext-selectbox.d.ts.map