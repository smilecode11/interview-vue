<template>
  <div>
    <Input @add="onAddEvent" />
    <List @delete="onDeleteEvent" :list="list" />
  </div>
</template>

<script>
import Input from "./Input.vue";
import List from "./List.vue";

import { nanoid } from "nanoid";
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    onAddEvent(val) {
      this.list.push({
        title: val,
        id: nanoid(),
      });
    },
    onDeleteEvent(delItem) {
      let delIndex = this.list.findIndex((item) => item.id === delItem.id);
      if (delIndex !== -1) this.list.splice(delIndex, 1);
    },
  },
  beforeCreate() {
    console.log("index beforeCreate");
  },
  created() {
    console.log("index created");
  },
  beforeMount(){
    console.log('index beforeMount')
  },
  mounted(){
    console.log("index mounted");
  },
  beforeUpdate() {
    console.log("index beforeUpdate");
  },
  updated() {
    console.log("index updated");
  },
  beforeDestroy() {
    console.log("index beforeDestroy");
  },
  components: {
    Input,
    List,
  },
};
</script>