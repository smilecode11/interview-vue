<template>
  <div>
    <h3>shop cart</h3>
    <ul class="card-list">
      <li v-for="item in list" :key="item.id">
        {{ item.title }} - {{ item.quantity }} &nbsp;
        <button @click="handleIncrease(item)">商品 +1</button>&nbsp;
        <button @click="handleDecrease(item)">商品 -1</button>
      </li>
    </ul>
    TOTAL PRICE: {{ totalPrice }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      list: "cart/cardProducts",
      totalPrice: "cart/cartTotalPrice",
    }),
  },
  methods: {
    handleIncrease(product) {
      this.addProdToCart(product);
    },
    handleDecrease(product) {
      this.deleteProdFromCart(product);
    },
    ...mapActions({
      addProdToCart: "cart/addProdToCart",
      deleteProdFromCart: "cart/deleteProdFromCart",
    }),
  },
};
</script>

<style scoped>
li {
  margin-bottom: 12px;
}
</style>
