<template>
  <div class="header-content">
    <Card dis-hover class="city-main">
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      form: {
        region: ""
      }
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.header-content {
  width: 1190px;
  margin: 0 auto;
}
.city-main {
  margin: 20px auto;
}
</style>