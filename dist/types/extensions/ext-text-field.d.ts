import { HTMLExtensionElement } from './html-extension-element';
export declare class ExtTextField extends HTMLExtensionElement {
    private _type;
    private _prefixIcon;
    private _suffixIcon;
    private _containerElement;
    private _inputElement;
    private _prefixIconElement;
    private _suffixIconElement;
    private _onFocusHandler;
    private _onBlurHandler;
    constructor();
    static get observedAttributes(): string[];
    onConnectedCallback(): void;
    onDisconnectedCallback(): void;
    onAttributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    onAdoptedCallback(): void;
    onRender(): void;
    get value(): string;
    set value(v: string | null);
    get name(): string;
    set name(v: string | null);
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