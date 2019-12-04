<template lang="html">
  <form class="" v-on:submit.prevent="handleGuest" method="post">
    <label for="name">Guest Name:</label>
    <input type="text" id="name" v-model="name">

    <label for="email">Email address:</label>
    <input type="text" id="email" v-model="email">

    <label for="status">Checked In:</label>
    <input type="radio" id="status" v-model="status">

    <input type="submit" id="save" value="Register">

  </form>
</template>

<script>
import {eventBus} from "../main.js"
import GuestService from "../services/GuestService.js"

export default {
  name: "new-guest-form",
  data() {
    return {
    name: "",
    email: "",
    status: false
    }
  },
  methods: {
    handleGuest(){
      const guest = {
        name: this.name,
        email: this.email,
        status: this.status
      }
      GuestService.addGuest(guest)
      .then(res => eventBus.$emit("new-guest", res))
    }
  }



}
</script>

<style lang="css" scoped>
</style>
