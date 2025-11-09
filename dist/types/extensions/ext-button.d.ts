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
    constructor();
    static get observedAttributes(): string[];
    onConnectedCallback(): void;
    onDisconnectedCallback(): void;
    onAttributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    onAdoptedCallback(): void;
    onRender(): void;
    get label(): string;
    set label(v: string | null);
    get outlined(): boolean;
    set outlined(v: boolean);
    get prefixIcon(): string;
    set prefixIcon(v: string | null);
    get suffixIcon(): string;
    set suffixIcon(v: string | null);
}
