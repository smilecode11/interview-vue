<template>
  <div id="app">
    <h1>Shopping Cart With Vuex</h1>
    <hr />
    <Product />
    <hr />
    <ShopCart />
  </div>
</template>

<script>
import Product from "./Product.vue";
import ShopCart from "./ShopCart.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Product,
    ShopCart,
  },
};
</script>
