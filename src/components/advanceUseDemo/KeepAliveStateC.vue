<template>
  <div>KeepAliveStateC</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("keepAliveStateC mounted");
  },
  destroyed() {
    console.log("keepAliveStateC destroyed");
  },
};
</script>