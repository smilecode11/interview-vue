<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.title }} <button @click="handleDel(item, $emit)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import event from "./event";

export default {
  // props:['list'],
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleDel(item) {
      this.$emit("delete", item);
    },
    onAddEventHandler(message) {
      console.log("组件通讯 - 自定义事件", message);
    },
  },
  beforeCreate() {
    console.log("list beforeCreate");
  },
  created() {
    console.log("list created");
  },
  mounted() {
    console.log("list mounted");
    //  自定义事件监听
    event.$on("onAddEvent", this.onAddEventHandler);
  },
  beforeMount(){
    console.log('list beforeMount')
  },
  beforeUpdate() {
    console.log("list beforeUpdate");
  },
  updated() {
    console.log("list updated");
  },
  beforeDestroy() {
    console.log("list beforeDestroy");
    //  页面卸载时及时销毁自定义时间，否则容易造成内存泄漏
    event.$off("onAddEvent", this.onAddEventHandler);
  },
  destroyed(){
    console.log('list destoryed')
  }
};
</script>