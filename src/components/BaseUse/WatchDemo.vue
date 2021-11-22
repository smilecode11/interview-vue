<template>
  <div>
    <input type="text" v-model="name" placeholder="watch string" />
    <input type="text" v-model="info.city" placeholder="watch object" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      info: {
        city: "",
      },
    };
  },
  watch: {
    name(newV, oldV) {
      console.log("watch name:", newV, oldV); //  监听基础类型能得到 oldV
    },
    info: {
      handler(val, oldV) {
        console.log("watch info:", val, oldV); //  监听引用数据拿不到 oldV, 因为指针相同.
      },
      deep: true,
    },
  },
};
</script>