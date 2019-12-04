<template lang="html">
  <div id="guest-list-container">
    <h2>Guest List</h2>
    <div id="guest-list">
      <ul v-for="(guest, index) in guests" :guest="guest" :key="index">

      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "guest-list",
  props: ["guests"]
}
</script>

<style lang="css" scoped>
</style>
