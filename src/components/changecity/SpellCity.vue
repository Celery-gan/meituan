<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    getCity() {
      // this.$api
      //   .getCity("成都")
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  },
  mounted() {
    this.getCity();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>