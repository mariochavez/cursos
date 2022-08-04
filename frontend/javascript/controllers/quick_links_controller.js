import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["content", "list"]
  static classes = ["normal", "active"]

  connect() {
    const options = {
      threshold: 1.0
    }
    this.intersectionObserver = new IntersectionObserver(this.observe.bind(this), options)

    const titles = this.contentTarget.querySelectorAll("h2[id], h3[id]")
    titles.forEach(element => {
      this.intersectionObserver.observe(element)
    })
  }

  disconnect() {
    this.intersectionObserver.disconnect()
  }

  observe(entries) {
    if (entries[0].intersectionRatio != 1) return;

    entries.forEach(element => this.updateEntries(element))
  }

  updateEntries(element) {
    const activeLink = this.listTarget.querySelectorAll("a.text-rose-500")
    const currentId = element.target.getAttribute("id")
    const currentLink = this.listTarget.querySelector(`a[href="#${currentId}"]`)

    activeLink.forEach(element => element.setAttribute("class", this.normalClass))
    currentLink.setAttribute("class", this.activeClass)
  }
}
