import { fireEvent, HomeAssistant } from "../../../ha";
import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { safeCustomElement } from "../../safe-custom-element";
import "../../../shared/editor/icon-type-picker";

export type MushIconTypeSelector = {
  mush_icon_type: {};
};

@safeCustomElement("ha-selector-mush_icon_type")
export class HaMushIconTypeSelector extends LitElement {
  @property() public hass!: HomeAssistant;

  @property() public selector!: MushIconTypeSelector;

  @property() public value?: string;

  @property() public label?: string;

  protected render() {
    return html`
      <adaptive-icon-type-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value}
        @value-changed=${this._valueChanged}
      ></adaptive-icon-type-picker>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    fireEvent(this, "value-changed", { value: ev.detail.value || undefined });
  }
}
