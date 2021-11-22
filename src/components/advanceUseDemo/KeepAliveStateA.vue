<template>
  <div>KeepAliveStateA</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("keepAliveStateA mounted");
  },
  destroyed() {
    console.log("keepAliveStateA destroyed");
  },
};
</script>