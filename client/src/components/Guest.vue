<template lang="html">
  <div id="guest">
    <li>
      <h3>{{guest.name}}</h3>
      <p>{{guest.email}}</p>
      <p>{{ guest.status ? "Checked In" : "Still To Check In"}}</p>
      <button type="button" v-on:click="handleDelete">Remove</button>
    </li>
  </div>
</template>

<script>
import {eventBus} from "../main.js"
import GuestService from "../services/GuestService.js"

export default {
  name: "guest",
  props: ["guest"],
  methods: {
    handleDelete() {
      GuestService.removeGuest(this.guest._id)
      .then(() => eventBus.$emit("delete-guest", this.guest._id))
    }
  }
}

</script>

<style lang="css" scoped>
</style>
