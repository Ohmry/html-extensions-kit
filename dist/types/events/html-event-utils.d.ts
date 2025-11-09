export interface HTMLEventOptions {
    eventPrefixName?: string | undefined;
    source?: HTMLElement | undefined;
}
export declare class HTMLEventUtils {
    static clone<T extends Event>(e: T): T;
}
