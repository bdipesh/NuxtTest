<template>
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
    </v-flex>
  </v-layout>

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
        ]
      }
    }
  }
</script>
