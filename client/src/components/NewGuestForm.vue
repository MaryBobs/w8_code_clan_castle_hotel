<template lang="html">
  <form class="" v-on:submit="" method="post">
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
export default {
}
</script>

<style lang="css" scoped>
</style>
