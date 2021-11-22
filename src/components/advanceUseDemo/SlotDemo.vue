<template>
  <div class="slot-demo">
    <a :href="url">
      <slot> 默认内容，即父组件没有设置内容是，显示这个 </slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {};
  },
};
</script>