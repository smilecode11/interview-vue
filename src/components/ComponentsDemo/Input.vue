<template>
  <div>
    <input type="text" v-model="inputVal" placeholder="输入待办" /><button
      @click="handleAdd"
    >
      添加
    </button>
  </div>
</template>
<script>
import event from "./event";
export default {
  data() {
    return {
      inputVal: "",
    };
  },
  methods: {
    handleAdd() {
      // 调用父组件事件
      this.$emit("add", this.inputVal);

      // 调用自定义事件
      event.$emit("onAddEvent", this.inputVal);

      this.inputVal = "";
    },
  },
};
</script>