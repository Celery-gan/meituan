<template>
  <div class="city-hots">
    <div class="hot-title">热门城市:</div>
    <div class="hot-city" v-for="item in hotlist" :key="item.id" @click="gotohome(item)">{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotlist: []
    };
  },
  components: {},
  methods: {
    getHotCity() {
      this.$api
        .getHotCity()
        .then(res => {
          let arr = res.data.hots;
          // console.log(arr);
          arr.map(item => {
            if (item.name === "市辖区") {
              // let str1 = item.province.slice(0, item.province.length - 1);
              let arr = item.province.split("市");
              this.hotlist.push(arr[0]);
            } else {
              let arr = item.name.split("市");
              this.hotlist.push(arr[0]);
            }
          });
          // console.log(this.hotlist);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 选择城市 返回首页
    gotohome(val) {
      let str = localStorage.getItem("cityname");
      let arr = str.split(",");
      // 通过过滤将数组中与当前重复的城市名删除 以便重新加载进去到头部
      let srrtwo = arr.filter(item => {
        return item !== val;
      });
      // 现在最近浏览的长度为10
      if (srrtwo.length >= 10) {
        srrtwo.splice(9, srrtwo.length - 9);
      }
      // 将选择的城市置顶存入
      srrtwo.unshift(val);
      localStorage.setItem("cityname", srrtwo);
      this.$store.state.mycity = val;
      this.$router.push({ name: "home" });
    }
  },
  mounted() {
    this.getHotCity();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city-hots {
  display: flex;
  .hot-title {
    margin-right: 20px;
  }
  .hot-city {
    font-size: 16px;
    margin: 0 10px;
  }
  .hot-city:hover {
    color: rgb(22, 22, 22);
  }
}
</style>