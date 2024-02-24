import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movies"
export default class extends Controller {
  static targets = ["infos", "editForm", "card"]

  connect() {
  }

  update(event) {
    event.preventDefault()
    const url = this.editFormTarget.action
    fetch(url, {
      method: "PATCH",
      headers: { "Accept": "text/plain" },
      body: new FormData(this.editFormTarget)
    })
      .then(response => response.text())
      .then((data) => {
        this.cardTarget.outerHTML = data
      })
  }

  displayForm() {
    this.infosTarget.classList.add("d-none")
    this.editFormTarget.classList.remove("d-none")
  }
}
