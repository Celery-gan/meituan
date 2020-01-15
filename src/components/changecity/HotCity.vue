<template>
  <div>
    <div class="city-hots">
      <div class="hot-title">热门城市:</div>
      <div class="hot-city" v-for="item in hotlist" :key="item.id" @click="gotohome(item)">{{item}}</div>
    </div>
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
      console.log(val);
      localStorage.setItem("cityname", val);
      this.$router.push("/");
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