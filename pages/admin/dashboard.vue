<template>
  <v-layout
    class="ma-5"
    row
    wrap
  >
    <v-flex
      md4
      d-flex
      class="text-xs-center"
    >
      <v-card
        class="green white--text"
        height="150"
      >
        <v-layout>
          <v-flex
            mt-4
            ml-4
            class="text-xs-left"
          >
            <div
              class="display-1"
            >84
            </div>
            <div
              class="font-weight-bold body-2"
            >Registered User
            </div>
            <div
              class="font-weight-bold caption"
            >Total registered user
            </div>
          </v-flex>
          <v-flex
            mt-4
          >
            <v-avatar
              size="70"
              color="white"
            >
              <v-icon
                size="35"
                color="green"
              >
                person
              </v-icon>
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex
      md4
      px-2
      d-flex
      class="text-xs-center"
    >
      <v-card
        height="150"
        class="orange white--text"
      >
        <v-layout>
          <v-flex
            mt-4
            ml-4
            class="text-xs-left"
          >
            <div
              class="display-1"
            >84
            </div>
            <div
              class="font-weight-bold body-2"
            >Daily Visitor
            </div>
            <div
              class="font-weight-bold caption"
            >Who spend more than 15 minutes
            </div>
          </v-flex>
          <v-flex
            mt-4
          >
            <v-avatar
              size="70"
              color="white"
            >
              <v-icon
                size="35"
                color="orange"
              >
                remove_red_eye
              </v-icon>
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex
      md4
      d-flex
      class="text-xs-center"
    >
      <v-card
        class="blue white--text"
        height="150"
      >
        <v-layout>
          <v-flex
            mt-4
            ml-4
            class="text-xs-left"
          >
            <div
              class="display-1"
            >84
            </div>
            <div
              class="font-weight-bold body-2"
            >New Message
            </div>
            <div
              class="font-weight-bold caption"
            >From Facebook and Email
            </div>
          </v-flex>
          <v-flex
            mt-4
          >
            <v-avatar
              size="70"
              color="white"
            >
              <v-icon
                size="35"
                color="blue"
              >
                message
              </v-icon>
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex
      mt-3
      md6
      d-flex
    >
      <v-card>
        <v-card-title>
          <v-icon
            class="mr-3"
          >
            timeline
          </v-icon>
          <div>
            <div
              class="body-2 font-weight-medium"
            >
              Sells History
            </div>
            <div
              class="grey--text caption"
            >
              Sells History of This Month
            </div>
          </div>
          <v-spacer/>
          <div>
            <v-icon>
              more_vert
            </v-icon>
          </div>
        </v-card-title>
        <v-divider/>
        <v-data-table
          :items="itemSells"
          :headers="headers"
        >
          <template
            slot="items"
            slot-scope="props"
          >
            <td>
              {{ props.item.products }}
            </td>
            <td>
              {{ props.item.sell }}
            </td>
            <td>
              {{ props.item.price }}
            </td>
            <td>
              {{ props.item.stock }}
            </td>
            <td>
              <v-chip
                :color="colors[props.item.status]"
                outline
              >
                {{ props.item.status }}
              </v-chip>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
    <v-flex
      md6
      d-flex
    />
  </v-layout>
</template>
<script>
  export default {
    data() {
      return {
        itemSells: [
          {products: 'Laptops', sell: 35, price: 40000, stock: '24', status: 'Good'},
          {products: 'Tablets', sell: 40, price: 60000, stock: '4', status: 'Order'},
          {products: 'Pc\'s', sell: 2, price: 3000, stock: '42', status: 'Sell'},
          {products: 'Mobile', sell: 35, price: 40000, stock: '24', status: 'Good'},
          {products: 'Laptops', sell: 35, price: 40000, stock: '24', status: 'Good'}
        ],
        headers: [
          {text: 'Products', value: 'products', sortable: false},
          {text: 'Total sold', value: 'products', sortable: false},
          {text: 'Total Earn', value: 'products', sortable: false},
          {text: 'Instock', value: 'products', sortable: false},
          {text: 'Status', value: 'products', sortable: false},
        ],
        colors: {
          Good: 'green',
          Order: 'red',
          Sell: 'blue'
        },
        option: {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330, 220]
            }
          ]
        }
      }
    }
  }
</script>
