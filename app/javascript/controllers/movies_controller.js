import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="movies"
export default class extends Controller {
  static targets = ["input", "form", "list"]

  connect() {
  }

  search() {
    let query = this.inputTarget.value
    // FETCH p/ a rota de /movies
    let url = `${this.formTarget.action}?query=${query}`
    fetch(url, {headers: {"Accept": "text/plain"}})
      .then(response => response.text())
      .then((data) => {
        this.listTarget.outerHTML = data
      })
  }
}
