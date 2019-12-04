<template lang="html">
  <div id="guest-list-container">
    <h2>Guest List</h2>
    <div id="guest-list">
      <ul>
        <guest v-for="(guest, index) in guests" :guest='guest' :key='index' />
          </ul>
    </div>
  </div>
</template>

<script>
import Guest from "./Guest.vue"

export default {
  name: "guest-list",
  props: ["guests"],
  components: {
    "guest": Guest
  }
}
</script>

<style lang="css" scoped>
</style>
