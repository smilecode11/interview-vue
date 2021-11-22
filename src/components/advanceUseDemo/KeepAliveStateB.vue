<template>
  <div>KeepAliveStateB</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("keepAliveStateB mounted");
  },
  destroyed() {
    console.log("keepAliveStateB destroyed");
  },
};
</script>