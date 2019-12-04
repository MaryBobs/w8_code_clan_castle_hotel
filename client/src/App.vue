<template lang="html">
  <div id="app">
    <div id="header">
      <h1>CodeClan Castle Hotel</h1>
    </div>
    <new-guest-form />
    <guest-list />
  </div>
</template>

<script>
import NewGuestForm from "./components/NewGuestForm.vue";
import GuestList from "./components/GuestList.vue";

export default {
  name: "app",
  data(){
    guests: []
  },
  components: {
    "new-guest-form": NewGuestForm,
    "guest-list": GuestList
  }
}
</script>

<style lang="css" scoped>
</style>
