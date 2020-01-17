<template>
  <div class="style-body">
    <div class="style-top flexonly">
      <div class="style-title">有格调</div>
      <div v-for="(item,index) in mystyle" :key="item.id" class="style-name">
        <div @mouseenter="changeinfo(item.tab,index)">
          <div>{{item.name}}</div>
          <div v-if="flag === item.symbol" class="chose-style">
            <img src="../../assets/images/xiangshang.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="style-main flexeve">
      <div v-for="item in stylist" :key="item.id" class="style-item">
        <div v-if="item.photos.length > 0" class="img-center">
          <img :src="item.photos[0].url" />
        </div>
        <div v-else class="img-center">
          <img src="../../assets/images/logo.png" />
        </div>
        <div class="item-name">{{item.name}}</div>
        <Rate show-text :value.sync="item.biz_ext.rating" disabled></Rate>

        <div>{{item.adname}}</div>
        <div v-if="item.biz_ext.cost!=''" class="item-pay">￥{{item.biz_ext.cost}}</div>
        <div v-else class="item-pay">Unknown</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mystyle: [
        { symbol: 0, name: "全部", tab: "景点" },
        { symbol: 1, name: "约会聚餐", tab: "美食" },
        { symbol: 2, name: "丽人spa", tab: "丽人" },
        { symbol: 3, name: "电影演出", tab: "电影" },
        { symbol: 4, name: "品质出游", tab: "旅游" }
      ],
      stylist: [],
      mytab: "景点",
      flag: 0
    };
  },
  components: {},
  methods: {
    // 有格调 (调关键词搜索接口) 对应的tab
    // 约会聚餐 => 美食
    // 丽人spa => 丽人
    // 电影演出 => 电影
    // 品质出游 => 旅游
    // 全部 => 景点
    getResults() {
      let str = localStorage.getItem("cityname").split(",");
      this.$api
        .getResults(str[0], this.mytab)
        .then(res => {
          this.stylist = res.data.pois;
          console.log(this.stylist);
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeinfo(val, index) {
      this.flag = index;
      this.mytab = val;
      this.getResults();
    }
  },
  mounted() {
    this.getResults();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.style-body {
  border-radius: 5px;
  border: 1px solid rgb(223, 223, 223);
}
.style-top {
  background: rgb(203, 214, 226);
  display: flex;
  .chose-style {
    position: absolute;
    top: 16px;
    left: 25%;
  }
  .style-name {
    position: relative;
    margin: 8px;
  }
  .style-title {
    font-size: 18px;
    margin: 5px 10px;
  }
}

.style-main {
  background: rgb(255, 255, 255);
  margin: 10px;
  .style-item {
    width: 220px;
    margin: 5px 0;
    .img-center {
      img {
        width: 220px;
        height: 130px;
      }
    }
    .item-name {
      font-size: 16px;
      color: #333;
      margin: 5px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-pay {
      color: #c0b54d;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .style-item:hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  }
}
</style>