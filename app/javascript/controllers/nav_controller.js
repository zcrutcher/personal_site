import { Controller } from "@hotwired/stimulus";
// Connects to data-controller="nav"
export default class extends Controller {
  static targets = ["menu", "button"];
  static values = { open: { type: Boolean, default: false } };

  toggle() {
    this.openValue = !this.openValue;
  }

  close() {
    this.openValue = false;
  }

  openValueChanged() {
    this.menuTarget.classList.toggle("is-open", this.openValue);
    this.buttonTarget.setAttribute("aria-expanded", this.openValue);
  }
}
