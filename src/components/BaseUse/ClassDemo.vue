<template>
  <div>
    <p :class="{ deeppink: isDeeppink, yellow: isYellow }">使用 class</p>
    <p :class="[deeppink, yellow]">使用 class (数组)</p>
    <p :style="styleData">使用 style</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deeppink: "deeppink",
      yellow: "yellow",
      isDeeppink: true,
      isYellow: true,
      styleData: {
        fontSize: "22px",
        color: "yellow",
        backgroundColor: "deeppink",
      },
    };
  },
  computed: {},
};
</script>

<style scoped>
.deeppink {
  background: deeppink;
}
.yellow {
  color: yellow;
}
</style>