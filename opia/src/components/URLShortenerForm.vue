<template>
  <div v-if="!loading" class="FormContainer">
    <h1>{{ title }}</h1>
    <form @submit.prevent="formSubmitHandler">
      <div class="InputContainer">
        <input class="InputContainer--Input" placeholder="Enter Url..." v-model="form.fullUrl" />
        <button class="InputContainer--Button" type="submit">Shorten</button>     

        <div class="InputContainer--Error" v-if="showErrorMessage">
          This URL is not valid
        </div>
      </div>
    </form>

    <div class="shortenedUrlContainer">
      <span>Your shortened URL is: </span>
      <a :href="shortenedUrl">{{ shortenedUrl }}</a>
    </div>
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
      shortenedUrl: '',
      loading: false,
      showErrorMessage: false
    }
  },
  methods: {
      formSubmitHandler() {
        if (!this.urlValid()) {
          this.showErrorMessage = true;
          return;
        }

        this.showErrorMessage = false;
        this.getShortenedUrl();
      },
      urlValid() {
        // regex for url
        const expression = "[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)";
        const regex = new RegExp(expression);

        return this.form.fullUrl.match(regex) ? true : false;     
      },
      async getShortenedUrl() {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${this.form.fullUrl}`);
        const data = await res.json();
        this.shortenedUrl = data.result.short_link;
      }      
    }  
}
</script>

<style lang="scss" scoped>

   .FormContainer {
     padding: 2rem 0;
   }

   .InputContainer {
     &--Input {
       border: none;
       border-radius: 0.25rem;
       margin-right: 0.5rem;       
       padding: 0.5rem 1rem;
     }

     &--Button {
        border: none;
        border-radius: 0.25rem;
        color: #ffffff;
        background: #555a56;
        transition: background 0.25s;
        cursor: pointer;
        padding: 0.5rem 1rem;

        &:hover {
          background: darken(#555a56, 10%);
          transition: background 0.25s;
        }
     }

     &--Error {
       text-align: center;
       background: #cc0000;
       color: #ffffff;
       border-radius: 0.25rem;
       margin-top: 0.5rem;
       padding: 0.5rem 1rem;
     }
   }

  .shortenedUrlContainer {
    margin: 1rem;
  }
</style>
