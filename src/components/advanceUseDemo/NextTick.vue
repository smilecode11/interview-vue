<template>
  <div>
      <!-- 3. 给元素添加 ref 属性，可以通过 $refs 获取元素节点 -->
    <ul ref="ul1">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItems">添加一次</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["a", "b", "c"],
    };
  },
  methods: {
    addItems() {
      this.list.push(+new Date());
      this.list.push(+new Date());
      this.list.push(+new Date());
      this.list.push(+new Date());

      //    1. 异步渲染， $nextTick 等待 DOM 渲染完再调用
      //    2. 页面渲染时会将 data 的修改做整合， 多次 data 修改只会渲染一次
      this.$nextTick(() => {
        const ulElem = this.$refs.ul1;
        console.log(ulElem.childNodes.length);
      });
    },
  },
};
</script>