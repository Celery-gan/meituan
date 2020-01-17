<template>
  <div class="home-left" @mouseleave="flag = -1">
    <div class="left-body">
      <div class="left-title">全部分类</div>
      <div class="left-list">
        <div v-for="(item,index) in menulist" :key="item.id" class="left-menu">
          <div @mouseenter="flag = index">
            <i :class="`iconfont ${icon[index]}`" class="list-icon"></i>
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div v-if="flag!==-1" class="menu-info">
      <div>
        <div v-for="item in menulist[flag].child" :key="item.id">
          <div class="menu-title">
            <div class="flexbtw">
              <div>{{item.title}}</div>
              <div class="about-more">更多</div>
            </div>
          </div>
          <div class="menu-details">
            <div v-for="item1 in item.child" :key="item1.id" class="mouse">{{item1}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: -1,
      menulist: [],
      // 图标
      icon: [
        "icon-fenzu",
        "icon-waimai-",
        "icon-jiudian",
        "icon-minsu_",
        "icon-mao-copy",
        "icon-huoche",
        "icon-maikefeng",
        "icon-shenghuofuwu-copy",
        "icon-meifa",
        "icon-zuanshi",
        "icon-_qinziguanxi-copy",
        "icon-jianshen--copy",
        "icon-jiazhuang",
        "icon-w_xuexi",
        "icon-medical-treatment",
        "icon-jiuba-copy"
      ]
    };
  },
  components: {},
  methods: {
    getMenu() {
      this.$api
        .getMenu()
        .then(res => {
          this.menulist = res.data.menu;
          // console.log(this.menulist);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getMenu();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.home-left {
  width: 20%;
  position: relative;
  .left-body {
    width: 100%;
    position: absolute;
    top: -270px;
    height: 479px;
    background: #fff;
    border: 1px solid rgb(223, 223, 223);
  }
}
.left-title {
  font-size: 16px;
  font-weight: 700;
  color: #222222;
  margin: 10px;
}
.list-icon {
  color: #f19914;
}
.left-list {
  margin-top: 20px;
}
.left-menu {
  line-height: 24px;
  div {
    padding-left: 8px;
    background: url("../../assets/images/right.svg") no-repeat right;
  }
  div:hover {
    // background: rgb(233, 232, 228);
    background: rgb(247, 246, 243) url("../../assets/images/right.svg")
      no-repeat right;
  }
}
.menu-info {
  z-index: 999;
  background: #fff;
  width: 350px;
  height: 426px;
  position: absolute;
  top: -218px;
  right: -351px;
  border: 1px solid rgb(243, 220, 220);
}
.menu-title {
  margin: 6px 10px;
  line-height: 40px;
  font-size: 18px;
  border-bottom: 1px solid rgb(180, 180, 180);
}
.about-more {
  width: 40px;
  font-size: 14px;
  background: url("../../assets/images/right.svg") no-repeat right;
}
.menu-details {
  display: flex;
  flex-wrap: wrap;
  color: rgb(129, 129, 129);
  font-size: 12px;
  line-height: 24px;
  div {
    margin: 0 10px;
  }
}
</style>