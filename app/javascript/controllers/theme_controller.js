import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button"];
  static values = { darkMode: { type: Boolean, default: true } };

  toggle() {
    const current = document.documentElement.getAttribute("data-theme");
    const theme = current == "dark" ? "light" : "dark";
    console.log("Theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    this.buttonTarget.setAttribute("aria-pressed", theme === "dark");
  }

  connect() {
    const theme = document.documentElement.getAttribute("data-theme");
    this.buttonTarget.setAttribute("aria-pressed", theme === "dark");
  }
}
