import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu"]

  connect() {
    this.html = document.querySelector("html")
  }

  toggle() {
    const open = !this.menuTarget.classList.contains("hidden")
    if (open) {
      this.html.style.overflow = "auto"
      this.menuTarget.classList.add("hidden")
    } else {
      this.html.style.overflow = "hidden"
      this.menuTarget.classList.remove("hidden")
    }
  }
}
