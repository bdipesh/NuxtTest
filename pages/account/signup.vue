<template>
  <v-card
    class="ma-5 pa-5"
  >
    <form>
      <v-text-field
        v-validate="'required|max:10'"
        v-model="formValues.name"
        :counter="10"
        :error-messages="errors.collect('name')"
        label="Name"
        data-vv-name="name"
        required
      />
      <v-text-field
        v-validate="'required|email'"
        v-model="formValues.email"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
      />
      <v-text-field
        v-validate="'required'"
        v-model="formValues.password"
        :items="items"
        :error-messages="errors.collect('password')"
        type="password"
        label="Password"
        data-vv-name="password"
        required
      />
      <v-btn
        class="text-capitalize indigo white--text"
        @click="submit">
        save
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
    <v-snackbar
      v-model="snackbar"
      color="green"
      bottom
      right
    >
      Successfully register your details. Thank You!
      <v-btn
        color="grey"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-card>
  
</template>
<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      formValues: {
        name: '',
        email: '',
        password: ''
      },
      snackbar: false,
      name: '',
      email: '',
      select: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          }
        }
      }
    }),

    mounted() {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      async submit() {
        if( await this.$validator.validateAll()){
           this.$axios.$post('https://nuxt-blog-5e8fc.firebaseio.com/users.json', this.formValues)
          .then((response)=> {
            this.snackbar= true
          })
          .catch((error)=>{
            console.log(error)
          })
        }
        
      },
      clear() {
        this.name = ''
        this.email = ''
        this.password = null
        this.$validator.reset()
      }
    }
  }
</script>
