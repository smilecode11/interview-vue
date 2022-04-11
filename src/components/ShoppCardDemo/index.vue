<template>
  <div>
    <h2>购物车组件设计</h2>
    <hr />
    <ProductionList :list="productionList" />
    <hr />
    <ShopCardList :productionList="productionList" :cardList="cardList" />
  </div>
</template>

<script>
import event from "./event";

import ProductionList from "./ProductionList.vue";
import ShopCardList from "./ShopCardList.vue";

export default {
  data() {
    return {
      productionList: [
        {
          id: 1,
          title: "商品 A",
          price: 10,
        },
        {
          id: 2,
          title: "商品 B",
          price: 15,
        },
        {
          id: 3,
          title: "商品 C",
          price: 20,
        },
      ],
      cardList: [
        {
          id: 1,
          quantity: 1,
        },
      ],
    };
  },
  methods: {
    /**加入购物车 */
    addToCard(id) {
      let cardList = this.cardList;
      const prod = this.cardList.find((item) => item.id === id);
      if (prod) {
        prod.quantity++;
        cardList.map((item) => {
          if (item.id === id) {
            item = prod;
          }
          return item;
        });
      } else {
        cardList.push({
          id,
          quantity: 1,
        });
      }
      this.cardList = cardList;
    },

    /** 从购物车中删除一个*/
    delFromCard(id) {
      const prod = this.cardList.find((item) => item.id === id);
      if (prod === null) return;
      prod.quantity--;
      if (prod.quantity <= 0) {
        this.cardList = this.cardList.filter((item) => item.id !== id);
      }
    },
  },
  mounted() {
    event.$on("addToCard", this.addToCard);
    event.$on("delFromCard", this.delFromCard);
  },
  beforeDestroy() {
    event.$off("addToCard", this.addToCard);
    event.$off("delFromCard", this.delFromCard);
  },
  components: {
    ProductionList,
    ShopCardList,
  },
};
</script>
