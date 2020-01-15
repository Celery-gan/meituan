<template>
  <div class="searchs">
    <div>按省份选择:</div>
    <!-- 省份 -->
    <i-select
      :model.sync="choprovince"
      class="select-box"
      size="large"
      placeholder="省份"
      @on-change="prochange"
    >
      <i-option v-for="item in provincelist" :value="item.id" :key="item.id">{{ item.name }}</i-option>
    </i-select>
    <!-- 城市 -->
    <i-select
      v-if="citiesid!==''"
      :model.sync="chocity"
      class="select-box"
      size="large"
      placeholder="城市"
      label-in-value
      @on-change="gotohome"
    >
      <i-option v-for="item in cityList" :value="item.id" :key="item.id">{{ item.name }}</i-option>
    </i-select>
    <i-select v-else class="select-box" size="large" placeholder="城市" disabled></i-select>
    <!-- 直接搜索 -->
    <div class="search-now">直接搜索:</div>
    <i-input placeholder="请输入城市中文或拼音" size="large" class="search-box" v-model="searcity"></i-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 选择省
      choprovince: "",
      // 选择市
      chocity: "",
      // 被选中的省份的id
      citiesid: "",
      // 省份列表
      provincelist: [],
      // 城市列表
      cityList: [],
      searcity: ""
    };
  },
  components: {},
  methods: {
    // 获取省份列表
    getProvince() {
      this.$api
        .getProvince()
        .then(res => {
          this.provincelist = res.data.province;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取城市列表
    getCitys() {
      this.$api
        .getCitys(this.citiesid)
        .then(res => {
          this.cityList = res.data.city;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 省份选择事件 触发获得城市列表
    prochange(value) {
      // console.log(value);
      this.citiesid = value;
      this.getCitys();
    },
    // 选择城市 返回首页
    gotohome(val) {
      localStorage.setItem("cityname", val.label);
      this.$router.push("/");
    },
    getCrumbs() {
      this.$api
        .getCrumbs("成都")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getProvince();

    this.getCrumbs();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.searchs {
  display: flex;
  align-items: center;
}
.select-box {
  width: 150px;
  margin: 0 10px;
}
.search-box {
  width: 240px;
  margin: 0 10px;
}
.search-now {
  margin: 0 30px;
}
</style>