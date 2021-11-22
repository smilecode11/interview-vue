<template>
  <div class="scoped-slot-demo">
    <a :href="url">
      <!-- 作用域插槽： 如何将子组件的数据交予父组件使用？？ -->
      <slot :slotData="website"> {{ website.subTitle }} </slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      website: {
        url: "www.baidu.com",
        title: "百度",
        subTitle: "度娘",
      },
    };
  },
};
</script>