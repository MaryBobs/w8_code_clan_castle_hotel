<template lang="html">
  <div id="app">
    <div id="header">
      <h1>CodeClan Castle Hotel</h1>
    </div>
    <new-guest-form />
  </div>
</template>

<script>
import NewGuestForm from "./components/NewGuestForm.vue";

export default {
  name: "app",
  components: {
    "new-guest-form": NewGuestForm
  }
}
</script>

<style lang="css" scoped>
</style>
