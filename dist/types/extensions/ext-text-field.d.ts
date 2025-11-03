import { HTMLExtensionElement } from './html-extension-element';
export declare class ExtTextField extends HTMLExtensionElement {
    private _value;
    private _type;
    private _placeholder;
    private _prefixIcon;
    private _suffixIcon;
    private _containerElement;
    private _inputElement;
    private _prefixIconElement;
    private _suffixIconElement;
    private _onFocusHandler;
    private _onBlurHandler;
    constructor();
    render(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback?(name: string, _: string | null, newValue: string | null): void;
    adoptedCallback?(): void;
    static get observedAttributes(): string[];
    get value(): string;
    set value(v: string | null);
    get placeholder(): string;
    set placeholder(v: string | null);
    get type(): string;
    set type(v: string);
    get prefixIcon(): string;
    set prefixIcon(v: string | null);
    get suffixIcon(): string;
    set suffixIcon(v: string | null);
}
//# sourceMappingURL=ext-text-field.d.ts.map