import { HTMLExtensionElement } from './html-extension-element';
export declare class ExtButton extends HTMLExtensionElement {
    private _label;
    private _outlined;
    private _prefixIcon;
    private _suffixIcon;
    private _buttonElement;
    private _labelElement;
    private _prefixIconElement;
    private _suffixIconElement;
    private _onClickHandler;
    constructor();
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback?(name: string, _: string | null, newValue: string | null): void;
    adoptedCallback?(): void;
    render(): void;
    get label(): string;
    set label(v: string | null);
    get outlined(): boolean;
    set outlined(v: boolean);
    get prefixIcon(): string;
    set prefixIcon(v: string | null);
    get suffixIcon(): string;
    set suffixIcon(v: string | null);
}
//# sourceMappingURL=ext-button.d.ts.map