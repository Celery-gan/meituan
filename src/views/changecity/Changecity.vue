<template>
  <div class="header-content">
    <Card dis-hover class="city-main">
      <!-- 第一层 -->
      <div class="city-crads">
        <!-- 按省份选择 -->
        <sear></sear>
      </div>
      <div class="city-crads">
        <hots></hots>
      </div>
      <div class="city-crads">
        <rece></rece>
      </div>
      <div class="city-crads">
        <spel></spel>
      </div>
    </Card>
  </div>
</template>

<script>
import sear from "../../components/changecity/SearchCity";
import hots from "../../components/changecity/HotCity";
import rece from "../../components/changecity/Recentcity";
import spel from "../../components/changecity/SpellCity";
export default {
  data() {
    return {};
  },
  components: { sear, hots, rece, spel },
  methods: {
    // getCity() {
    //   this.$api
    //     .getCity()
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  },

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
// 城市盒子向下移动并居中
.city-main {
  margin: 20px auto;
}
// 城市每个分类划分
.city-crads {
  line-height: 90px;
  border-bottom: 1px solid #e5e5e5;
  margin: 5px;
  font-size: 18px;
}
</style>