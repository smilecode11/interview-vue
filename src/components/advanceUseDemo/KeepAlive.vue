<template>
  <div class="keep-alive-container">
    <button @click="changeTab('a')">切换组件a</button>
    <button @click="changeTab('b')">切换组件b</button>
    <button @click="changeTab('c')">切换组件c</button>

    <!-- 
        使用 KeepAlive 缓存无需重复渲染的组件，以提升性能 
            一般用于tab切换较大组件模块展示时使用
        v-show 以 display:none 相对粗暴的样式方式 显/隐 元素
    -->
    <keep-alive>
      <KeepAliveStateA v-if="currentTab === 'a'" />
      <KeepAliveStateB v-if="currentTab === 'b'" />
      <KeepAliveStateC v-if="currentTab === 'c'" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: "a",
    };
  },
  methods: {
    changeTab(type) {
      if (type !== this.currentTab) this.currentTab = type;
    },
  },
  components: {
    KeepAliveStateA: () => import("./KeepAliveStateA.vue"),
    KeepAliveStateB: () => import("./KeepAliveStateB.vue"),
    KeepAliveStateC: () => import("./KeepAliveStateC.vue"),
  },
};
</script>