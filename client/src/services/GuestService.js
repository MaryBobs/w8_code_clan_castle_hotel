const baseURL = "http://localhost:3000/api/guests"

export default {
  getGuests() {
      return fetch() => (baseURL)
      .then(result => result.json())
  }


}
