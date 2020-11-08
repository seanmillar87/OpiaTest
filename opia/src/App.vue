<template>
  <div id="app">
    <URLShortenerForm title="URL Shortener"/>
  </div>
</template>

<script>
import URLShortenerForm from './components/URLShortenerForm.vue'

export default {
  name: 'App',
  components: {
    URLShortenerForm
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    min-width: 320px;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    text-align: center;
    color: #f9f9f9;
    padding: 2rem 1rem;
    background: #011936;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: #f9f9f9;
  }
</style>
