<template>
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
      @click="login">
      save
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
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
        password: ''
      },
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
      async login () {
        let data = {username: this.email, password: this.password}
        await this.$auth.loginWith('local', {data})
          .then(() => {
            this.$router.push('/login')
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
          })
      })
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
