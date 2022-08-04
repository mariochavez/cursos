import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["content", "list"]

  connect() {
    const allTitles = this.contentTarget.querySelectorAll("h2[id], h3[id]")

    allTitles.forEach(element => {
      const id = element.getAttribute("id")
      const text = element.innerText

      const link = document.createElement("a")
      link.setAttribute("class", "font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300")
      link.setAttribute("href", `#${id}`)
      link.innerText = text

      const h3 = document.createElement("h3")
      h3.appendChild(link)

      const list = document.createElement("li")
      list.appendChild(h3)

      this.listTarget.appendChild(list)
    });
  }
}
