<template>
  <div class="FormContainer">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" placeholder="Enter Url..." />
      <button>Shorten</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'URLShortenerForm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>
