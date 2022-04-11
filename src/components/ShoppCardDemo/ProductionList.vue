<template>
  <ul class="production-list">
    <li v-for="item in list" :key="item.id">
      {{ "pId:" + item.id }} - {{ item.title }} - {{ item.price }}
      <button @click="handleAddToCard(item.id)">加入购物车</button>
    </li>
  </ul>
</template>

<script>
import event from "./event";
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleAddToCard(id) {
      event.$emit("addToCard", id);
    },
  },
};
</script>

<style scoped>
li {
  margin-bottom: 12px;
}
</style>
