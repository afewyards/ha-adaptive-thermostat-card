import { customElement } from "lit/decorators.js";

/**
 * Safe version of @customElement that prevents duplicate registration errors
 */
export function safeCustomElement(tagName: string) {
    return (target: CustomElementConstructor) => {
        if (customElements.get(tagName)) {
            return;
        }
        customElement(tagName)(target);
    };
}
