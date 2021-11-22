<template>
  <div>
    <p>遍历数组</p>
    <ul>
      <li v-for="(item, index) in listArr" :key="item.id">
        {{ index }} - {{ item.id }} - {{ item.title }}
      </li>
    </ul>
    <hr />
    <p>遍历对象</p>
    <ul>
      <li v-for="(val, key, index) in listObj" :key="key">
        <span v-if="flag">{{ val }}</span>
        {{ index }} - {{ key }} - {{ val.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      listArr: [
        { id: "a", title: "标题 1" },
        { id: "b", title: "标题 2" },
        { id: "c", title: "标题 3" },
      ],
      listObj: {
        a: { title: "标题 1" },
        b: { title: "标题 2" },
        c: { title: "标题 3" },
      },
    };
  },
};
</script>