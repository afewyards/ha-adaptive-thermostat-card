import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { safeCustomElement } from "../utils/safe-custom-element";

@safeCustomElement("adaptive-button-group")
export class MushroomButtonGroup extends LitElement {
  @property() public fill: boolean = false;

  @property() public rtl: boolean = false;

  protected render(): TemplateResult {
    return html`
      <div
        class=${classMap({
          container: true,
          fill: this.fill,
        })}
      >
        <slot></slot>
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        width: 100%;
      }
      .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
      .container ::slotted(*:not(:last-child)) {
        margin-right: var(--spacing);
      }
      :host([rtl]) .container ::slotted(*:not(:last-child)) {
        margin-right: initial;
        margin-left: var(--spacing);
      }
      .container > ::slotted(adaptive-button) {
        width: 0;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: calc(var(--control-height) * var(--control-button-ratio));
      }
      .container > ::slotted(adaptive-input-number) {
        width: 0;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: calc(
          var(--control-height) * var(--control-button-ratio) * 3
        );
      }
      .container.fill > ::slotted(adaptive-button),
      .container.fill > ::slotted(adaptive-input-number) {
        flex-grow: 1;
      }
    `;
  }
}
