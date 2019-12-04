<template lang="html">
  <form v-on:submit.prevent="handleGuest" method="post">
    <label for="name">Guest Name:</label>
    <input type="text" id="name" v-model="name" required>

    <label for="email">Email address:</label>
    <input type="text" id="email" v-model="email" required>

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
  form {
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 1em;
    border: 2px solid;
    border-radius: 5%;
    justify-content: flex-start;
  }
</style>
