<template lang="html">
  <div id="app">
    <div id="header">
      <h1>CodeClan Castle Hotel</h1>
    </div>
    <new-guest-form />
    <guest-list :guests="guests"/>
  </div>
</template>

<script>
import NewGuestForm from "./components/NewGuestForm.vue";
import GuestList from "./components/GuestList.vue";
import GuestService from "./services/GuestService.js";
import {eventBus} from "./main.js";

export default {
  name: "app",
  data(){
    return {
    guests: []
    }
  },
  components: {
    "new-guest-form": NewGuestForm,
    "guest-list": GuestList,
    "guest-service": GuestService
  },
  mounted(){
    this.getBookings();

    eventBus.$on("new-guest", (guest) => {
      this.guests.push(guest)
    })

    eventBus.$on("delete-guest", (id) => {
      const index = this.guests.indexOf(guest => guest._id === id)
      this.guests.splice(index, 1)
    })
  },
  methods: {
    getBookings(){
      GuestService.getGuests()
      .then(guests => this.guests = guests)
      }
    }
  }

</script>

<style lang="css" scoped>
</style>
