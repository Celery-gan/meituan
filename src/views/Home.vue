<template>
  <div>
    <div class="home-header">
      <div class="home-nav flexeve">
        <div v-for="item in navlist" :key="item.id" class="mouse">{{item}}</div>
      </div>
    </div>
    <div class="header-content">
      <div class="home-list flexbtw">
        <hleft></hleft>
        <hright></hright>
      </div>
      <div>
        <hstyle></hstyle>
      </div>
    </div>
  </div>
</template>

<script>
import hleft from "../components/home/Homeleft";
import hright from "../components/home/Homeright";
import hstyle from "../components/home/Homestyle";
export default {
  data() {
    return {
      navlist: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿/公寓",
        "商家入驻",
        "美团公益"
      ]
    };
  },
  components: { hleft, hright, hstyle },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.header-content {
  width: 1190px;
  // height: 400px;
  margin: 0 auto;
}
.home-header {
  width: 100%;
  height: 40px;
  background: #fff;
  box-shadow: 0 11px 12px -10px rgba(0, 0, 0, 0.1);
  .home-nav {
    width: 600px;
    margin: 0 auto;
    color: #222222;
    div {
      font-size: 16px;
      font-weight: 700;
    }
  }
}
.home-list {
  margin: 10px 0;
}
</style>