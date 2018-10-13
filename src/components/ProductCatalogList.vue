<template>
  <v-list one-line>
      <!-- {{ productType }} -->
    <template v-for="(product, index) in productsForDisplay" track-by="id">
      <v-list-tile
        :key="product.id"
        avatar
        ripple
        @click="addToCart(product)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{product.id}} {{product.name}} {{formatter.format(product.price)}}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider
        v-if="index + 1 < $store.filteredProducts.length"
        :key="index"
      ></v-divider>
    </template>
  </v-list>
</template>
<script>
// based on value set the proper filter
import { observer } from "mobx-vue";

export default observer({
  props: ["productType"],
  computed: {
    productsForDisplay: function() {
      if (this.productType === 1) {
        this.$store.showProduct("SHOES");
      } else {
        this.$store.showProduct("SOCKS");
      }

      return this.$store.filteredProducts;
    }
  },
  methods: {
    addToCart: function(_item) {
      this.$store.addItemToCart(_item);
    }
  },
  data() {
    return {
      formatter: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      })
    };
  }
});
</script>
