<template>
  <input
    class="custom-vmodel"
    type="text"
    :value="text1"
    @input="$emit('change1', $event.target.value)"
  />
  <!-- 
      1.input 使用了 :value, 而不是 v-model
      2. change1 和 model.event 要对应
      3. text1 属性要对应
   -->
</template>

<script>
export default {
  name:"custom-v-model",
  model: {
    prop: "text1",
    event: "change1",
  },
  props: {
    text1: String,
    default() {
      return "";
    },
  },
};
</script>