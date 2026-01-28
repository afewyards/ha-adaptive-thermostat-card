import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { fireEvent, HomeAssistant } from "../../../ha";
import { safeCustomElement } from "../../safe-custom-element";
import "../../../shared/editor/alignment-picker";

export type MushAlignementSelector = {
  mush_alignment: {};
};

@safeCustomElement("ha-selector-mush_alignment")
export class HaMushAlignmentSelector extends LitElement {
  @property() public hass!: HomeAssistant;

  @property() public selector!: MushAlignementSelector;

  @property() public value?: string;

  @property() public label?: string;

  protected render() {
    return html`
      <adaptive-alignment-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value}
        @value-changed=${this._valueChanged}
      ></adaptive-alignment-picker>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    fireEvent(this, "value-changed", { value: ev.detail.value || undefined });
  }
}
