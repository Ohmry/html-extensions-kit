import { PropertyChangeEvent } from '../events/property-change-event';
import { HTMLEventUtils } from '../lib/html-event-utils';

/**
 * Base class for HTML extension elements that provides lifecycle callbacks,
 * event delegation, and rendering capabilities.
 * Subclasses should implement the abstract methods to define their behavior.
 */
export abstract class HTMLExtensionElement extends HTMLElement {
  private _delegatedElements: HTMLElement[] = [];
  private _delegatedElementEvents: WeakMap<HTMLElement, string[]> = new WeakMap();

  /**
   * Called when the element is added to the document's DOM.
   */
  connectedCallback(): void {
    this.onConnectedCallback();
    this._attachEventDelegator();
    this.render();
  }

  /**
   * Called when the element is connected to the DOM.
   * Subclasses should implement this to perform initialization logic.
   */
  abstract onConnectedCallback(): void;

  /**
   * Called when the element is removed from the document's DOM.
   */
  disconnectedCallback(): void {
    this.onDisconnectedCallback();
    this._detachDeventDelegator();
  }

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
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    this.onAttributeChangedCallback(name, oldValue, newValue);
    this.render();
  }

  /**
   * Called when an observed attribute changes.
   * Subclasses should implement this to handle attribute changes.
   *
   * @param name The name of the attribute that changed
   * @param oldValue The previous value of the attribute
   * @param newValue The new value of the attribute
   */
  abstract onAttributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ): void;

  /**
   * Called when the element is adopted into a new document.
   */
  adoptedCallback(): void {
    this.onAdoptedCallback();
  }

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
  protected addDelegatedElement(element: HTMLElement): void {
    if (!this._delegatedElements.includes(element)) {
      this._delegatedElements.push(element);

      const delegatedEvents: string[] = [];
      for (const key in element) {
        if (key.startsWith('on')) delegatedEvents.push(key.slice(2));
      }
      this._delegatedElementEvents.set(element, delegatedEvents);
    }
  }

  protected addDelegatedElements(elements: HTMLElement[]): void {
    elements.forEach((element) => this.addDelegatedElement(element));
  }

  /**
   * Removes an element from the event delegation system.
   *
   * @param element The HTML element to remove from event delegation
   */
  protected removeDelegatedElement(element: HTMLElement): void {
    const index = this._delegatedElements.indexOf(element);
    if (index >= 0) {
      this._delegatedElements.splice(index, 1);
      this._delegatedElementEvents.delete(element);
    }
  }

  /**
   * Handles delegated events by cloning and re-dispatching them on this element.
   * Stops event propagation to prevent duplicate handling.
   *
   * @param e The event to delegate
   */
  private _handleEventDelegator = (e: Event) => {
    e.stopPropagation();
    const cloneEvent = HTMLEventUtils.clone(e);
    this.dispatchEvent(cloneEvent);
  };

  /**
   * Attaches event listeners to all delegated elements for event delegation.
   */
  private _attachEventDelegator(): void {
    this._delegatedElements.forEach((element) => {
      this._delegatedElementEvents.get(element)?.forEach((eventName) => {
        element.addEventListener(eventName, this._handleEventDelegator);
      });
    });
  }

  /**
   * Detaches event listeners from all delegated elements.
   */
  private _detachDeventDelegator(): void {
    this._delegatedElements.forEach((element) => {
      this._delegatedElementEvents.get(element)?.forEach((eventName) => {
        element.removeEventListener(eventName, this._handleEventDelegator);
      });
    });
  }

  /**
   * Handles property changes and dispatches a change event if the value actually changed.
   * Also triggers a re-render of the component.
   *
   * @param oldValue The previous property value
   * @param newValue The new property value
   */
  protected onPropertyChanged(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ): void {
    if (oldValue != newValue) {
      const propertyChangeEvent = new PropertyChangeEvent(name, oldValue, newValue);
      this.dispatchEvent(propertyChangeEvent);
    }
    this.render();
  }

  /**
   * Triggers a re-render of the component by calling the onRender method.
   */
  protected render(): void {
    this.onRender();
  }

  /**
   * Called to update the visual representation of the component.
   * Subclasses should implement this to render their template and update UI.
   */
  abstract onRender(): void;

  /**
   * Specifies the attributes to observe for changes.
   * Should be implemented as a static getter in your subclass.
   *
   * Example:
   * static get observedAttributes() { return ['example-attr']; }
   */
  // static get observedAttributes(): string[] { return []; }
}
