<template lang="html">
  <div id="list-item">
    <li>
      <h3>{{guest.name}}</h3>
    </li>
  </div>
</template>

<script>
export default {
  name: "guest",
  props: ["guest"]
}
</script>

<style lang="css" scoped>
</style>
