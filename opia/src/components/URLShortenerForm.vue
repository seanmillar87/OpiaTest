<template>
  <div v-if="!loading" class="FormContainer">
    <h1>{{ title }}</h1>
    <form  @submit.prevent="formSubmitHandler">
      <input placeholder="Enter Url..." v-model="form.fullUrl" />
      <button type="submit">Shorten</button>
    </form>

    <div class="">{{ form.fullUrl }}</div>
  </div>
</template>

<script>
export default {
  name: 'URLShortenerForm',
  props: {
    title: String
  },
  data: function () {
    return {
      form: {
        fullUrl: ''
      },
      loading: false
    }
  },
  methods: {
      formSubmitHandler() {
        if (!this.urlValid()) {
          return;
        }

        this.getShortenedUrl();
      },
      urlValid() {
        // regex for url
        const expression = "[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)";
        const regex = new RegExp(expression);

        return this.form.fullUrl.match(regex) ? true : false;     
      },
      getShortenedUrl() {

      }
    }  
}
</script>

<style scoped>

a {
  color: #42b983;
}
</style>
