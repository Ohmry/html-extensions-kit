export class PropertyChangeEvent extends CustomEvent<{
  name: string;
  oldValue: unknown;
  newValue: unknown;
}> {
  name: string;
  oldValue: unknown;
  newValue: unknown;

  constructor(name: string, oldValue: unknown, newValue: unknown, options?: EventInit) {
    super('property-change', {
      ...options,
      bubbles: options?.bubbles ?? true,
      cancelable: options?.cancelable ?? true,
      composed: options?.composed ?? true,
      detail: {
        name,
        oldValue,
        newValue
      }
    });

    this.name = name;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
}
