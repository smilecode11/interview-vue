<template>
  <div id="app">
    <!-- vue 基础使用 -->
    <!-- <TplDemo></TplDemo> -->
    <!-- <WatchDemo></WatchDemo> -->
    <!-- <ComputedDemo></ComputedDemo> -->
    <!-- <ClassDemo></ClassDemo> -->
    <!-- <ConditionDemo></ConditionDemo> -->
    <!-- <ListDemo></ListDemo> -->
    <!-- <EventDemo></EventDemo> -->
    <!-- <FormDemo></FormDemo> -->

    <!-- vue $emit props 使用 -->
    <!-- <ComponentsDemo></ComponentsDemo> -->

    <!-- 自定义 v-model -->
    <!-- <AdvanceUseDemo></AdvanceUseDemo> -->

    <!-- 购物车组件设计 -->
    <!-- <ShopCardDemo></ShopCardDemo> -->

    <!-- Vuex 购物车状态设计 -->
    <VuexShopCardDemo></VuexShopCardDemo>
  </div>
</template>

<script>
// import TplDemo from "./components/BaseUse/TplDemo.vue";
// import WatchDemo from "./components/BaseUse/WatchDemo.vue";
// import ComputedDemo from "./components/BaseUse/ComputedDemo.vue";
// import ClassDemo from "./components/BaseUse/ClassDemo.vue";
// import ConditionDemo from "./components/BaseUse/ConditionDemo.vue";
// import ListDemo from "./components/BaseUse/ListDemo.vue";
// import EventDemo from "./components/BaseUse/EventDemo.vue";
// import FormDemo from "./components/BaseUse/FormDemo.vue";
// import ComponentsDemo from './components/ComponentsDemo/Index.vue'
// import AdvanceUseDemo from './components/advanceUseDemo/index.vue'
// import ShopCardDemo from './components/ShoppCardDemo'
import VuexShopCardDemo from './components/VuexShopCardDemo'

export default {
  name: "App",
  components: {
    // TplDemo,
    // WatchDemo,
    // ComputedDemo,
    // ClassDemo,
    // ConditionDemo,
    // ListDemo,
    // EventDemo,
    // FormDemo,
    // ComponentsDemo,
    // AdvanceUseDemo,
    // ShopCardDemo
    VuexShopCardDemo
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
