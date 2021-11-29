<template>
  <div class="advance-use">
    <!-- <h1>自定义VModel: {{ name }}</h1> -->
    <!-- <CustomVModel v-model="name"></CustomVModel> -->

    <!-- nextTick -->
    <!-- <NextTickDemo></NextTickDemo> -->

    <!-- slot -->
    <!-- <SlotDemo :url="website.url">
      {{ website.title }}
    </SlotDemo> -->

    <!-- scopedSlot -->
    <!-- <ScopedSlotDemo :url="website.url">
      <template v-slot="slotProps">
        {{ slotProps.slotData.title }}
      </template>
    </ScopedSlotDemo> -->

    <!-- nameSlot -->
    <!-- <NameSlotDemo>
      <template #header>
        <h1>插入 header slot 中</h1>
      </template>
      <div>
        <p>插入 main slot 中，未命名插槽</p>
        <a href="#">无敌</a>
      </div>
      <template v-slot:footer>
        <p>插入 footer slot 中</p>
      </template>
    </NameSlotDemo> -->

    <!-- 动态组件 -->
    <!-- <template v-for="(component, index) in componentsData">
      <component
        :is="component.component"
        :key="index"
        v-if="component.isShow"
      ></component>
    </template>
    <button @click="componentsData[1].isShow = !componentsData[1].isShow">
      加载/关闭 form组件
    </button> -->

    <!-- keepAlive -->
    <!-- <KeepAliveDemo /> -->

    <!-- 请求放在那里 -->
    <AjaxDemo />
  </div>
</template>

<script>
// import CustomVModel from "./CustomVModel.vue";
// import NextTickDemo from "./NextTick.vue";
// import SlotDemo from "./SlotDemo.vue";
// import ScopedSlotDemo from "./ScopedSlotDemo.vue";
// import NameSlotDemo from "./NameSlotDemo.vue";
// import ComponentId from "./ComponentId.vue";
// import KeepAliveDemo from "./KeepAlive.vue";
import AjaxDemo from './AjaxDemo.vue'

export default {
  computed: {},
  data() {
    return {
      // name: "",
      website: {
        url: "https://www.imooc.com",
        title: "imooc 官网",
        subTitle: "慕课网 官网链接 ",
      },
      componentsData: [
        {
          component: "ComponentId",
          id: 2,
          isShow: true,
        },
        // 异步组件，import
        {
          component: () => import("../BaseUse/FormDemo.vue"),
          id: 3,
          isShow: false,
        },
      ],
    };
  },
  components: {
    // CustomVModel,
    // NextTickDemo,
    // SlotDemo,
    // ScopedSlotDemo,
    // NameSlotDemo,
    // ComponentId,
    // KeepAliveDemo,
    AjaxDemo
  },
};
</script>