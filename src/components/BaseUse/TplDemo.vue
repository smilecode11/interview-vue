<template>
  <div>
    <p>文本插值 {{ message }}</p>
    <p>JS 表达式 {{ flag ? "yes" : "no" }} 只能放表达式, 不能是 js 语句</p>
    <p :id="dynamicId">动态属性 id</p>
    <hr />
    <p v-html="rawHtml">
      <span>会有 XSS 攻击风险</span>
      <span>[注意]使用 v-html 会覆盖子组件内容</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello vue",
      flag: true,
      rawHtml: "指令 - 原始 html <b>加粗</b> <i>斜体<i/>",
      dynamicId: `id-${Date.now()}`,
    };
  },
};
</script>