<template>
  <div>
    <p v-if="type === 'a'">A</p>
    <p v-else-if="type === 'b'">B</p>
    <p v-else>other</p>

    <p v-show="type === 'a'">A</p>
    <p v-show="type === 'b'">B</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "a",
    };
  },
};
</script>