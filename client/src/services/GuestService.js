const baseURL = "http://localhost:3000/api/guests"

export default {
  getGuests(){
      return fetch(baseURL)
      .then(res => res.json())
  },
  addGuest(guest){
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(guest),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
  },
  removeGuest(id){
    return fetch(baseURL + id, {
      method: "DELETE"
    })
    .then(res => res.json())
  }

}
