<template>
  <div>
    <h3>products</h3>
    <ul class="production-list">
      <li v-for="item in list" :key="item.id">
        {{ "pId:" + item.id }} - {{ item.title }} - {{ item.price }}
        <button @click="handleAddToCart(item)">加入购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      list: (state) => state.products.all,
    }),
  },
  methods: {
    handleAddToCart(item) {
      this.addProductToCart(item)
    },
    ...mapActions({
      addProductToCart: "cart/addProdToCard",
      getAllProducts: 'products/getAllProducts'
    }),
  },
  mounted(){
    this.getAllProducts()
  }
};
</script>

<style scoped>
li {
  margin-bottom: 12px;
}
</style>
