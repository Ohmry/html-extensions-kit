export interface HTMLEventOptions {
  eventPrefixName?: string | undefined;
  source?: HTMLElement | undefined;
}

export class HTMLEventUtils {
  public static clone<T extends Event>(e: T): T {
    const type = e.type;
    if (typeof DragEvent !== 'undefined' && e instanceof DragEvent) {
      const newEvent = new DragEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        detail: e.detail,
        dataTransfer: e.dataTransfer,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        button: e.button,
        buttons: e.buttons,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        relatedTarget: e.relatedTarget
      });
      return newEvent as unknown as T;
    } else if (typeof ClipboardEvent !== 'undefined' && e instanceof ClipboardEvent) {
      const newEvent = new ClipboardEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        clipboardData: e.clipboardData
      });
      return newEvent as unknown as T;
    } else if (typeof CompositionEvent !== 'undefined' && e instanceof CompositionEvent) {
      const newEvent = new CompositionEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        data: e.data
      });
      return newEvent as unknown as T;
    } else if (typeof InputEvent !== 'undefined' && e instanceof InputEvent) {
      const newEvent = new InputEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        data: e.data,
        inputType: e.inputType,
        dataTransfer: e.dataTransfer,
        isComposing: e.isComposing
      });
      return newEvent as unknown as T;
    } else if (typeof KeyboardEvent !== 'undefined' && e instanceof KeyboardEvent) {
      const newEvent = new KeyboardEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        key: e.key,
        code: e.code,
        location: e.location,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        repeat: e.repeat,
        isComposing: e.isComposing
      });
      return newEvent as unknown as T;
    } else if (typeof PointerEvent !== 'undefined' && e instanceof PointerEvent) {
      const newEvent = new PointerEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        pointerId: e.pointerId,
        width: e.width,
        height: e.height,
        pressure: e.pressure,
        tangentialPressure: e.tangentialPressure,
        tiltX: e.tiltX,
        tiltY: e.tiltY,
        twist: e.twist,
        pointerType: e.pointerType,
        isPrimary: e.isPrimary,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        button: e.button,
        buttons: e.buttons,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        relatedTarget: e.relatedTarget
      });
      return newEvent as unknown as T;
    } else if (typeof TouchEvent !== 'undefined' && e instanceof TouchEvent) {
      try {
        const newEvent = new TouchEvent(type, {
          bubbles: e.bubbles,
          cancelable: e.cancelable,
          composed: e.composed,
          touches: Array.from(e.touches),
          targetTouches: Array.from(e.targetTouches),
          changedTouches: Array.from(e.changedTouches),
          ctrlKey: e.ctrlKey,
          shiftKey: e.shiftKey,
          altKey: e.altKey,
          metaKey: e.metaKey
        });
        return newEvent as unknown as T;
      } catch {
        // Fallback to UIEvent if TouchEvent creation fails
        const uiEvent = e as UIEvent;
        const newEvent = new UIEvent(type, {
          bubbles: e.bubbles,
          cancelable: e.cancelable,
          composed: e.composed,
          detail: uiEvent.detail,
          view: uiEvent.view
        });
        return newEvent as unknown as T;
      }
    } else if (typeof WheelEvent !== 'undefined' && e instanceof WheelEvent) {
      const newEvent = new WheelEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        deltaZ: e.deltaZ,
        deltaMode: e.deltaMode,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        button: e.button,
        buttons: e.buttons,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        relatedTarget: e.relatedTarget
      });
      return newEvent as unknown as T;
    } else if (typeof MouseEvent !== 'undefined' && e instanceof MouseEvent) {
      const newEvent = new MouseEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        detail: e.detail,
        view: e.view,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        button: e.button,
        buttons: e.buttons,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        relatedTarget: e.relatedTarget
      });
      return newEvent as unknown as T;
    } else if (typeof FocusEvent !== 'undefined' && e instanceof FocusEvent) {
      const newEvent = new FocusEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        relatedTarget: e.relatedTarget
      });
      return newEvent as unknown as T;
    } else if (typeof AnimationEvent !== 'undefined' && e instanceof AnimationEvent) {
      const newEvent = new AnimationEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        animationName: e.animationName,
        elapsedTime: e.elapsedTime,
        pseudoElement: e.pseudoElement
      });
      return newEvent as unknown as T;
    } else if (typeof TransitionEvent !== 'undefined' && e instanceof TransitionEvent) {
      const newEvent = new TransitionEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        propertyName: e.propertyName,
        elapsedTime: e.elapsedTime,
        pseudoElement: e.pseudoElement
      });
      return newEvent as unknown as T;
    } else if (typeof UIEvent !== 'undefined' && e instanceof UIEvent) {
      const newEvent = new UIEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        detail: e.detail,
        view: e.view
      });
      return newEvent as unknown as T;
    } else if (typeof ErrorEvent !== 'undefined' && e instanceof ErrorEvent) {
      const newEvent = new ErrorEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        error: e.error
      });
      return newEvent as unknown as T;
    } else if (typeof MessageEvent !== 'undefined' && e instanceof MessageEvent) {
      const newEvent = new MessageEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        data: e.data,
        origin: e.origin,
        lastEventId: e.lastEventId,
        source: e.source,
        ports: Array.from(e.ports)
      });
      return newEvent as unknown as T;
    } else if (typeof ProgressEvent !== 'undefined' && e instanceof ProgressEvent) {
      const newEvent = new ProgressEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        lengthComputable: e.lengthComputable,
        loaded: e.loaded,
        total: e.total
      });
      return newEvent as unknown as T;
    } else if (typeof StorageEvent !== 'undefined' && e instanceof StorageEvent) {
      const newEvent = new StorageEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        key: e.key,
        oldValue: e.oldValue,
        newValue: e.newValue,
        url: e.url,
        storageArea: e.storageArea
      });
      return newEvent as unknown as T;
    } else if (typeof HashChangeEvent !== 'undefined' && e instanceof HashChangeEvent) {
      const newEvent = new HashChangeEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        oldURL: e.oldURL,
        newURL: e.newURL
      });
      return newEvent as unknown as T;
    } else if (typeof PopStateEvent !== 'undefined' && e instanceof PopStateEvent) {
      const newEvent = new PopStateEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        state: e.state
      });
      return newEvent as unknown as T;
    } else if (typeof PageTransitionEvent !== 'undefined' && e instanceof PageTransitionEvent) {
      const newEvent = new PageTransitionEvent(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        persisted: e.persisted
      });
      return newEvent as unknown as T;
    } else {
      // Default Event type
      const newEvent = new Event(type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed
      });
      return newEvent as unknown as T;
    }
  }
}
