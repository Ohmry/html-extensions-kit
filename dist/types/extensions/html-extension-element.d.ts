export declare abstract class HTMLExtensionElement extends HTMLElement {
    /**
     * Called when the element is added to the document's DOM.
     */
    abstract connectedCallback(): void;
    /**
     * Called when the element is removed from the document's DOM.
     */
    abstract disconnectedCallback(): void;
    /**
     * Called when an attribute of the element is added, removed, updated, or replaced.
     *
     * @param name The name of the attribute that changed
     * @param oldValue The previous value of the attribute
     * @param newValue The new value of the attribute
     */
    abstract attributeChangedCallback?(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * Called when the element is adopted into a new document.
     *
     * @param oldDocument The document the element was previously in
     * @param newDocument The document the element is now in
     */
    abstract adoptedCallback?(): void;
    /**
     * Called to update the visual representation of the component.
     * Subclasses should implement this to render their template and update UI.
     */
    abstract render(): void;
}
//# sourceMappingURL=html-extension-element.d.ts.map