import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { fireEvent, HomeAssistant } from "../../../ha";
import { safeCustomElement } from "../../safe-custom-element";
import "../../../shared/editor/info-picker";
import { Info } from "../../info";

export type MushInfoSelector = {
  mush_info: {
    infos?: Info[];
  };
};

@safeCustomElement("ha-selector-mush_info")
export class HaMushInfoSelector extends LitElement {
  @property() public hass!: HomeAssistant;

  @property() public selector!: MushInfoSelector;

  @property() public value?: string;

  @property() public label?: string;

  protected render() {
    return html`
      <adaptive-info-picker
        .hass=${this.hass}
        .infos=${this.selector.mush_info.infos}
        .label=${this.label}
        .value=${this.value}
        @value-changed=${this._valueChanged}
      ></adaptive-info-picker>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    fireEvent(this, "value-changed", { value: ev.detail.value || undefined });
  }
}
