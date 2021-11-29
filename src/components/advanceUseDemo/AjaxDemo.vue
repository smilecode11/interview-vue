<template>
  <div>
    <h1>ajax 应该放在哪里执行</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    initData() {
      // ajax 请求获取数据
      setTimeout(() => {
        console.log("initData");
      }, 0);
    },
  },
  created() {
    this.initData();
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script> 