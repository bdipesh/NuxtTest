<template>
  <v-card
    class="ma-5"
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        md12
      >
        <v-breadcrumbs
          :items="items"
        >
          <v-icon slot="divider">forward</v-icon>
        </v-breadcrumbs>
        <v-divider/>
      </v-flex>
      <v-flex>
        <div
          class="display-1 ml-3 mt-2 font-italic grey--text"
        >
          MacBook Pro 3000#4
        </div>
        <v-layout>
          <v-flex
            md6
            ma-3
          >
            <v-card
            >
              <v-card-media>
                <v-img
                  src="/products/description.jpg"
                  alt="something"
                  contain
                />
              </v-card-media>
              <v-card-actions/>
            </v-card>
          </v-flex>
          <v-flex
            md6
          >
            <v-tabs
              v-model="active"
              color="grey"
              dark
              class="ma-3 text-capitalize"
              slider-color="grey"
            >
              <v-tab
                v-for="(item, index) in options"
                :key="index"
                ripple
              >
                <span
                  class="text-capitalize"
                >
                  {{ item.title }}
                </span>
              </v-tab>
              <v-tab-item
                v-for="(item, index) in options"
                :key="index"
              >
                <v-card flat>
                  <v-card-text>{{ item.text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
            <v-layout>
              <v-flex>
                <div
                  class="ma-3 font-weight-bold body-2"
                >
                  Price:
                  <span
                    class="red--text title font-weight-bold"
                  >
                    $300
                  </span>
                </div>
              </v-flex>
              <v-flex>
                <v-btn
                  round
                  outline
                  color="indigo accent-2"
                  class="white--text text-capitalize"
                >
                  <v-icon
                    class="mr-2"
                  >
                    shopping_cart
                  </v-icon>
                  Buy Now
                </v-btn>
                <v-btn
                  outline
                  color="cyan"
                  class="white--text text-capitalize"
                >
                  Continue
                  <v-icon
                    color="grey"
                    size="24"
                    ml-2
                  >
                    keyboard_arrow_right
                  </v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Home',
            disabled: false,
          },
          {
            text: 'Laptops',
            disabled: false,
          },
          {
            text: 'Models 1',
            disabled: true,
          }
        ],
        options: [
          {title: 'Description', text: 'This is description'},
          {title: 'Cares', text: 'This is Care'},
          {title: 'Returns', text: 'This is returns'},
        ]
      }
    }
  }
</script>
