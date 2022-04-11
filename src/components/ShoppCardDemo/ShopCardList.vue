<template>
  <div>
    <ul class="card-list">
      <li v-for="item in list" :key="item.id">
        {{ item.title }} - {{ item.quantity }} &nbsp;
        <button @click="handleIncrease(item.id)">商品 +1</button>&nbsp;
        <button @click="handleDecrease(item.id)">商品 -1</button>
      </li>
    </ul>
    TOTAL PRICE: {{ totalPrice }}
  </div>
</template>

<script>
import event from "./event";

export default {
  props: {
    productionList: {
      type: Array,
      default: () => [],
    },
    cardList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    list() {
      return this.cardList.map((item) => {
        let prodItem = this.productionList.find((prod) => prod.id === item.id);
        return {
          ...prodItem,
          quantity: item.quantity,
        };
      });
    },
    totalPrice() {
      return this.cardList.reduce((totalA, curr) => {
        let currProd = this.productionList.find((prod) => prod.id === curr.id);
        totalA = totalA + currProd.price * curr.quantity;
        return totalA;
      }, 0);
    },
  },
  methods: {
    handleIncrease(id) {
      event.$emit("addToCard", id);
    },
    handleDecrease(id) {
      event.$emit("delFromCard", id);
    },
  },
};
</script>

<style scoped>
li {
  margin-bottom: 12px;
}
</style>
