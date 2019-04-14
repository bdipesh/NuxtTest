<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      md12
    >
      <v-img
        src="https://alpha-ecommerce.vuetifyjs.com/img/banner.ed54c86f.png"
        contain
      >
        <v-flex
          class="ma-5 pt-5 text-xs-right align-baseline black--text"
        >
          <p
            class="display-1"
          >Buy For You.</p>
          <p
            class="display-1 orange--text"
          >
            Fast Fun
          </p>
          <p
            class="display-1 orange--text"
          >
            Portable
          </p>
        </v-flex>
      </v-img>
    </v-flex>
    <v-flex
      class="ma-3"
      md12
    >
      <v-card
        flat
        class="ma-2 grey lighten-4"
      >
        <v-layout
          row
          wrap
          justify-center
        >
          <v-flex
            v-for="(item,index) in products.splice(0, 3)"
            :key="index"
            md3
            class="mx-4 text-xs-center"
            d-flex
          >
            <v-hover>
              <v-card
                slot-scope="{ hover }"
              >
                <v-img
                  :src="item.img"
                  contain
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal  white--text"
                      style="height: 100%;"
                    >
                      <v-flex
                        class="text-xs-right"
                        top
                      >
                        <v-btn
                          dark
                          flat
                          class="mr-0 orange opacity"
                        >
                          <v-icon>
                            shopping_cart
                          </v-icon>
                          Shop All in One
                        </v-btn>
                      </v-flex>
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-title
                  class="blue lighten-1 font-weight-bold white--text"
                >
                  <v-flex
                    class="text-xs-center"
                  >
                    <span class="body-2">{{ item.title }}</span>
                  </v-flex>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex
      ma-3
    >
      <v-flex
        mx-4
        md12
      >
        <v-btn
          color="orange accent-2"
          class="white--text text-capitalize"
        >Today Deals
        </v-btn>
      </v-flex>
      <v-layout
        row
        wrap
        class="ml-4 pl-1 mt-2"
        justify-center
      >
        <v-flex
          v-for="(item,index) in laptops"
          :key="index"
          md3
          class="pl-1"
          d-flex
        >
          <v-card
            flat
          >
            <v-img
              :src="item.img"
              alt="something"
            />
            <v-card-title>
              {{ item.title }}
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        products: [
          {title: 'Desktop', img: '/products/desktop1.jpg'},
          {title: 'Mac Book', img: '/products/desktop1.jpg'},
          {title: 'Tablets', img: '/products/tablets1.jpg'},
          {title: 'Tablets', img: '/products/tablets1.jpg'},
        ],
        laptops: [
          {title: 'Desktop', img: '/products/desktop1.jpg'},
          {title: 'Desktop', img: '/products/desktop1.jpg'},
          {title: 'Mac Book', img: '/products/tablets1.jpg'},
          {title: 'Tablets', img: '/products/tablets1.jpg'}
        ]
      }
    },
    created () {
       this.fetchData()
    },
    methods: {
      async fetchData () {
        await this.$axios.$get('/products/')
          .then((res) => {
            alert('a')
            this.products = res
          })
          .catch((error) => {
            alert('b')
            console.log(error)
          })
      }
    }
  }

</script>
<style
  scoped
>
  .img {
    height: 500px;
    width: 600px;
  }

  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>
