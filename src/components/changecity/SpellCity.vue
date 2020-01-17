<template>
  <div>
    <div class="spells">
      <div>按拼音字母选择:</div>
      <div v-for="item in citySpell" :key="item.id" class="spell-letter">
        <a :href="`#${item}`">{{item}}</a>
      </div>
    </div>
    <div>
      <div v-for="item in citySpell" :key="item.id">
        <div class="spell-classify">
          <div class="spell-title">
            <a :name="item">{{item}}</a>
          </div>
          <div class="city-names">
            <div
              v-for="item1 in citylists[item]"
              :key="item1.id"
              @click="gotohome(item1.name)"
            >{{item1.name}}</div>
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
      citySpell: [],
      citylists: {}
    };
  },
  components: {},
  methods: {
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

      this.$router.push("/");
    }
  },
  mounted() {
    this.citylists = this.city.data.cities;
    for (let i in this.citylists) {
      this.citySpell.push(i);
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.spells {
  display: flex;
  align-items: center;
  .spell-letter {
    font-size: 16px;
    margin: 0 15px;
    a {
      color: #515a6e;
    }
    a:hover {
      background: rgb(255, 235, 235);
      color: black;
    }
  }
}
.spell-classify {
  display: flex;
  border-radius: 10px;
  margin: 20px 5px;
  width: 90%;
  .spell-title {
    flex: 1;
    margin: 5px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #ffd000;
    border-radius: 50%;
  }
  .city-names {
    flex: 22;
    display: flex;
    flex-wrap: wrap;
    div {
      margin: 3px 15px;
      line-height: 40px;
      font-size: 14px;
      text-align: center;
    }
  }
}
.spell-classify:hover {
  background: rgb(243, 243, 243);
}
</style>