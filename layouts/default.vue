<template>
  <v-app
    class="ma-0 pa-0"
  >

    <v-toolbar
      color="cyan"
      height="40"
    >
      <v-flex>
        <v-icon>
          message
        </v-icon>
        <v-icon>
          shopping_cart
        </v-icon>
      </v-flex>
    </v-toolbar>
    <v-toolbar
      :clipped-left="clipped"
      color="#ffffff"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title
        color="indigo accent-2"
        class="font-weight-bold"
        v-text="title"/>
      <v-spacer/>
      <v-layout
        row
        wrap
      >
        <v-flex
          color="#2c7a90"
          class="mt-2"
        >
          <v-btn
            outline
            color="blue darken-3"
            class="white text-capitalize"
          >
            PC's
          </v-btn>
        </v-flex>
        <v-flex
          color="#2c7a90"
          class="mt-2"
        >
          <v-btn
            outline
            color="blue darken-3"
            class="white text-capitalize"
          >
            Laptops
          </v-btn>
        </v-flex>
        <v-flex
          class="mt-2"
        >
          <v-btn
            outline
            color="blue darken-3"
            class="white text-capitalize"
          >
            Tablets
          </v-btn>
        </v-flex>
        <v-flex
          color="#2c7a90"
          class="mt-2"
        >
          <v-btn
            outline
            color="blue darken-3"
            class="white text-capitalize"
          >
            Mobile
          </v-btn>
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="search"
            solo
            color="blue darken-3"
            class="mt-1"
            append-icon="search"
          />
        </v-flex>
      </v-layout>
    </v-toolbar>
    <nuxt/>
    <v-footer
      dark
      md8
      height="auto"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="blue darken-3">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer/>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions
          class="grey lighten-4 black--text justify-center">
          <v-btn
            outline
            color="blue darken-3"
            class="white text-capitalize"
          >
            &copy;2018 — <strong>Test</strong>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        search: '',
        items: [
          {icon: 'airplay', title: 'Products', to: '/products'},
          {icon: 'local_library', title: 'services', to: '/'}
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Test',
        icons: [
          'icon-facebook',
          'icon-instagram',
          'icon-whatsapp',
          'fab fa-linkedin',
          'fab fa-instagram'
        ]
      }
    }
  }
</script>
