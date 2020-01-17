<template>
  <div class="searchs">
    <div>按省份选择:</div>
    <!-- 省份 -->
    <i-select
      :model.sync="choprovince"
      label-in-value
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
      @on-change="gotohomeone"
    >
      <i-option v-for="item in cityList" :value="item.id" :key="item.id">{{ item.name }}</i-option>
    </i-select>
    <i-select v-else class="select-box" size="large" placeholder="城市" disabled></i-select>
    <!-- 直接搜索 -->
    <div class="search-now">直接搜索:</div>
    <div class="search-box">
      <i-input placeholder="请输入城市中文或拼音" size="large" class="search-input" v-model="searcity"></i-input>
      <div v-if="searcity !== ''">
        <div v-if="searchlist.length>12" class="cities-list">
          <div v-for="(item) in searchlist" :key="item.id">
            <div @click="gotohome(item)">{{item}}</div>
          </div>
        </div>
        <div v-else class="cities-lists">
          <div v-for="(item) in searchlist" :key="item.id">
            <div @click="gotohome(item)">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import city from "../../util/city";
Vue.prototype.city = city;
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
      // 搜索城市关键词
      searcity: "",
      // 搜索城市筛选列表
      searchlist: [],
      // 当前下拉框选择的省份
      provences: ""
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
          if (res !== undefined) {
            this.cityList = res.data.city;
          } else {
            let nowcity = this.provences.split("特")[0];
            //获得本地存储数据，并将其分为数组
            let str = localStorage.getItem("cityname");
            let arr = str.split(",");
            // 通过过滤将数组中与当前重复的城市名删除 以便重新加载进去到头部
            let srrtwo = arr.filter(item => {
              return item !== nowcity;
            });
            // 显示最近浏览的长度为10
            if (srrtwo.length >= 10) {
              srrtwo.splice(9, srrtwo.length - 9);
            }
            // 将选择的城市置顶存入
            srrtwo.unshift(nowcity);
            localStorage.setItem("cityname", srrtwo);
            this.$store.state.mycity = nowcity;
            this.$router.push({ name: "home" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 省份选择事件 触发获得城市列表
    prochange(val) {
      this.provences = val.label;
      this.citiesid = val.value;
      this.getCitys();
    },
    // 下拉选择城市 返回首页
    gotohomeone(val) {
      let nowcity = "";
      if (val.label === "市辖区" || val.label.includes("直辖")) {
        nowcity = this.provences.split("市")[0];
      } else if (val.label.includes("市")) {
        nowcity = val.label.split("市")[0];
      } else if (val.label.includes("地区")) {
        nowcity = val.label.split("地")[0];
      } else if (val.label.includes("自治州")) {
        nowcity = val.label.split("自")[0];
      }
      console.log(nowcity);
      let str = localStorage.getItem("cityname");
      let arr = str.split(",");
      let srrtwo = arr.filter(item => {
        return item !== nowcity;
      });
      if (srrtwo.length >= 10) {
        srrtwo.splice(9, srrtwo.length - 9);
      }
      // 将选择的城市置顶存入
      srrtwo.unshift(nowcity);
      localStorage.setItem("cityname", srrtwo);
      this.$store.state.mycity = nowcity;
      this.$router.push({ name: "home" });
    },
    gotohome(val) {
      let arr = localStorage.getItem("cityname").split(",");
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
    this.getProvince();
  },
  watch: {
    searcity(val) {
      let allcities = this.city.data.cities;
      // 输入不为空
      if (val.trim() !== "") {
        let cityNames = [];
        for (let i in allcities) {
          cityNames.push(i);
        }
        let arr = [];
        // 总城市列表循环
        cityNames.map(item => {
          // 将每个分类城市过滤 使得包含输入内容的城市信息交给 arr
          arr.push(
            allcities[item].filter(item1 => {
              // 将城市的内容拼接 方便检查是否包含val
              let str = `${JSON.stringify(item1.name)}${JSON.stringify(
                item1.spell
              )}`;
              //返回结果
              return str.includes(val);
            })
          );
        });
        this.searchlis = [];
        arr.map(item => {
          item.map(item1 => {
            this.searchlist.push(item1.name);
          });
        });
      }
    }
  },
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
  position: relative;

  .search-input {
    width: 240px;
  }
  .cities-list {
    height: 300px;
    overflow-y: scroll;
  }
  .cities-list,
  .cities-lists {
    background: rgb(252, 252, 252);
    z-index: 2;
    width: 240px;

    position: absolute;
    border: 1px solid rgb(233, 228, 228);
    top: 66px;
    div {
      line-height: 24px;
      font-size: 14px;
      margin: 1px 5px;
    }
    div:hover {
      color: rgb(22, 22, 22);
    }
  }
}

.search-now {
  margin: 0 30px;
}
</style>