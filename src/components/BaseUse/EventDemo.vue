<template>
  <div>
    {{ num }}
    <button @click="inCrement">+1</button>
    <button @click="inCrement2(2, $event)">+2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 10,
    };
  },
  methods: {
    inCrement(event) {
      console.log("-- inCrement ", event, event.__proto__.constructor);
      console.log(event.target);
      console.log(event.currentTarget);
      this.num++;

      //    1. event 是原生的
      //    2. 事件是被注册到当前元素上的
    },
    inCrement2(param, event) {
      console.log(param);
      console.log(event);
      this.num += 2;
    },
  },
};
</script>