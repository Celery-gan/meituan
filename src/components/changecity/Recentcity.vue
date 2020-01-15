<template>
  <div class="city-hots">
    <div>最近访问:</div>
    <div v-for="item in list" :key="item.id">{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.list = localStorage.getItem("cityname");
    // console.log(this.list);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city-hots {
  display: flex;
}
</style>