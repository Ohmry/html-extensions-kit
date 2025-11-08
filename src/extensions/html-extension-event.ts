export class DelegatedEvent<T = unknown> extends CustomEvent<T | undefined> {
  origin: Event;

  constructor(origin: Event, detail?: T) {
    super(origin.type, {
      detail: detail,
      bubbles: true,
      cancelable: true,
      composed: true
    });

    this.origin = origin;

    if (origin.defaultPrevented) {
      this.preventDefault();
    }
  }
}
