/**
 * Base class for HTML extension elements that provides lifecycle callbacks,
 * event delegation, and rendering capabilities.
 * Subclasses should implement the abstract methods to define their behavior.
 */
export declare abstract class HTMLExtensionElement extends HTMLElement {
    private _delegatedElements;
    private _delegatedElementEvents;
    /**
     * Called when the element is added to the document's DOM.
     */
    connectedCallback(): void;
    /**
     * Called when the element is connected to the DOM.
     * Subclasses should implement this to perform initialization logic.
     */
    abstract onConnectedCallback(): void;
    /**
     * Called when the element is removed from the document's DOM.
     */
    disconnectedCallback(): void;
    /**
     * Called when the element is disconnected from the DOM.
     * Subclasses should implement this to perform cleanup logic.
     */
    abstract onDisconnectedCallback(): void;
    /**
     * Called when an attribute of the element is added, removed, updated, or replaced.
     *
     * @param name The name of the attribute that changed
     * @param oldValue The previous value of the attribute
     * @param newValue The new value of the attribute
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * Called when an observed attribute changes.
     * Subclasses should implement this to handle attribute changes.
     *
     * @param name The name of the attribute that changed
     * @param oldValue The previous value of the attribute
     * @param newValue The new value of the attribute
     */
    abstract onAttributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * Called when the element is adopted into a new document.
     */
    adoptedCallback(): void;
    /**
     * Called when the element is adopted into a new document.
     * Subclasses should implement this to handle document adoption.
     */
    abstract onAdoptedCallback(): void;
    /**
     * Adds an element to the event delegation system.
     * Automatically detects event handlers (properties starting with 'on') and sets up delegation.
     *
     * @param element The HTML element to add for event delegation
     */
    protected addDelegatedElement(element: HTMLElement): void;
    protected addDelegatedElements(elements: HTMLElement[]): void;
    /**
     * Removes an element from the event delegation system.
     *
     * @param element The HTML element to remove from event delegation
     */
    protected removeDelegatedElement(element: HTMLElement): void;
    /**
     * Handles delegated events by cloning and re-dispatching them on this element.
     * Stops event propagation to prevent duplicate handling.
     *
     * @param e The event to delegate
     */
    private _handleEventDelegator;
    /**
     * Attaches event listeners to all delegated elements for event delegation.
     */
    private _attachEventDelegator;
    /**
     * Detaches event listeners from all delegated elements.
     */
    private _detachDeventDelegator;
    /**
     * Handles property changes and dispatches a change event if the value actually changed.
     * Also triggers a re-render of the component.
     *
     * @param oldValue The previous property value
     * @param newValue The new property value
     */
    protected onPropertyChanged(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * Triggers a re-render of the component by calling the onRender method.
     */
    protected render(): void;
    /**
     * Called to update the visual representation of the component.
     * Subclasses should implement this to render their template and update UI.
     */
    abstract onRender(): void;
}
//# sourceMappingURL=html-extension-element.d.ts.map