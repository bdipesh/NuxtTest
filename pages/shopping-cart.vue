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
      <v-flex
        md8
      >
        <v-data-table
          :items="choices"
          :headers="headers"
          hide-actions
        >
          <template
            slot="items"
            slot-scope="props"
          >
            <td
              class="py-4"
            >

              <v-list-tile>
                <v-list-tile>
                  <v-img
                    :src="props.item.img"
                    contain
                    height="100"
                    width="100"
                  />
                </v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ props.item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </td>
            <td>
              {{ props.item.price }}
            </td>
            <td>
              <v-flex
                md3
              >
                <v-text-field
                  v-model="quantity"
                  :value="props.item.Quantity"
                  type="number"
                />
              </v-flex>
            </td>
            <td>
              {{ (props.item.Quantity * props.item.price) }}
            </td>
          </template>
          <template slot="footer">
            <td :colspan="headers.length">
              <v-flex
                class="text-xs-right mr-4"
              >
                <strong>Shipping : </strong> <span> 3000 </span>
                <div>
                  <strong>Sales Tax : </strong> <span> 300 </span>
                </div>
                <div>
                  <strong
                  >Discount : </strong> <span class="red--text"> 200 </span>
                </div>
                <div>
                  <strong
                    class=""
                  >Estimated Total : </strong> <span> 25000 </span>
                </div>
              </v-flex>
            </td>
          </template>
        </v-data-table>
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
            text: 'Shopping Cart',
            disabled: false,
          },
          {
            text: 'Vistor',
            disabled: true,
          }
        ],
        quantity: '',
        headers: [
          {
            text: 'Product Name ',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {text: 'Price', sortable: false, value: 'price'},
          {text: 'Quantity', sortable: false, value: 'quantity'},
          {text: 'Total', sortable: false, value: 'quantity'}
        ],
        choices: [
          {title: 'PC\'s', img: '/products/tablets1.jpg', price: 3000, Quantity: 2},
          {title: 'Desktop', img: '/products/desktop1.jpg', price: 3000, Quantity: 2},
          {title: 'Laptop', img: '/products/laptop1.jpg', price: 3000, Quantity: 2},
          {title: 'Tablets', img: '/products/tablets2.jpg', price: 3000, Quantity: 2},
        ]
      }
    },
    watch: {
    }
  }
</script>
