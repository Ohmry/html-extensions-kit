export declare class PropertyChangeEvent extends CustomEvent<{
    name: string;
    oldValue: unknown;
    newValue: unknown;
}> {
    name: string;
    oldValue: unknown;
    newValue: unknown;
    constructor(name: string, oldValue: unknown, newValue: unknown, options?: EventInit);
}
