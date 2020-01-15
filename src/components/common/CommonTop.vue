<template>
  <div class="common-header">
    <!-- 头部条 -->
    <div class="header-bar">
      <div class="header-content flexbtw">
        <!-- 定位 -->
        <div class="header-bar-position">
          <div>
            <!-- <Icon type="ios-location" class="header-location"></Icon>
            <Icon type="location"></Icon>-->
            <i class="ivu-icon ivu-icon-ios-locate header-location"></i>
            <span>{{usercity}}</span>
            <span class="position-switch mouse" @click="changecitys">切换城市</span>
            <span>
              <span>[</span>
              <span v-for="item in crumb" :key="item.id" class="position-crumb mouse">{{item.type}}</span>
              <span>]</span>
            </span>
          </div>
          <div class="flexbtw">
            <div class="login">立即登录</div>
            <div class="register mouse">注册</div>
          </div>
        </div>
        <!-- 导航 -->
        <div class="header-bar-nav">
          <!-- 我的美团 -->
          <div class="has-child" @mouseenter="immigrate = 1" @mouseleave="immigrate = 0">
            <div v-if="immigrate!==1">我的美团</div>
            <div class="childone" v-if="immigrate===1">
              <div v-for="item in minelist" :key="item.id" class="listinfo mouse">{{item}}</div>
            </div>
          </div>
          <!-- 手机APP -->
          <div class="mouse">手机APP</div>
          <!-- 商家中心 -->
          <div class="has-child" @mouseenter="immigrate = 2">
            <div v-if="immigrate!==2">商家中心</div>
            <div class="childtwo" v-if="immigrate===2">
              <!-- <div class="listinfo mouse">商家中心</div>
              <div class="bussinfo mouse" v-for="(item) in Businesslist" :key="item.id">{{item}}</div>-->
            </div>
          </div>
          <!-- 美团规则 -->
          <div class="has-child" @mouseenter="immigrate = 3">
            <div v-if="immigrate!==3">美团规则</div>
            <div class="childthree" v-if="immigrate===3" @mouseleave="immigrate = 0">
              <div v-for="item in rulelist" :key="item.id" class="listinfo mouse">{{item}}</div>
            </div>
          </div>
          <!-- 网站导航 -->
          <div class="has-child" @mouseenter="immigrate = 4">
            <div v-if="immigrate!==4">网站导航</div>
            <div class="childfour" v-if="immigrate===4" @mouseleave="immigrate = 0">
              <div class="listinfo mouse">网站导航</div>
              <div class="listinfo222 flexeve">
                <div class="site-title">酒店旅游</div>
                <div class="site-title">吃美食</div>
                <div class="site-title">看电影</div>
                <div class="site-title">手机应用</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 头部主体 -->
    <div class="header-content header-body">
      <div class="flexonly">
        <div>
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" class="logo" />
        </div>
        <div class="search-box">
          <i-input
            :value.sync="input"
            size="large"
            placeholder="搜索商家或地点"
            style="width: 450px"
            @on-focus="immigrate=5"
            @on-blur="immigrate=0"
          ></i-input>
          <i-button type="warning" icon="ios-search"></i-button>
          <div v-if="immigrate===5" class="search-list">
            <div class="search-hot">热门搜索</div>
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
      immigrate: 0,
      usercity: "",
      crumb: [],
      minelist: ["我的美团", "我的订单", "我的收藏", "抵用券", "账号设置"],
      Businesslist: ["商家中心", "美团餐饮商户中心", "1", "2", "3"],
      rulelist: ["美团规则", "规则中心", "规则目录", "规则评议院"],
      input: ""
    };
  },
  components: {},
  methods: {
    // 获取定位
    getcity() {
      this.$axios
        .req("position")
        .then(res => {
          let arr = res.data.split(",");
          let arr2 = arr[1].split(":");
          let len = arr2[1].length - 1;
          this.usercity = arr2[1].slice(2, len);
          this.getcrumb();
        })
        .catch(err => {
          console.log("err");
        });
    },
    // 获取城市具体信息
    getcrumb() {
      this.$axios
        .req(`crumbs?city=${this.usercity}`)
        .then(res => {
          this.crumb = res.data.areas;
          this.crumb = this.crumb.slice(0, 3);
        })
        .catch(err => {
          console.log(err);
        });
    },
    changecitys() {
      this.$router.push("/changecity");
    }
  },
  mounted() {
    this.getcity();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
// 鼠标移入事件
.mouse:hover {
  color: #fe8c00;
}
// 公共头部
.common-header {
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
// 头部条
.header-bar {
  background: #f8f8f8;
  width: 100%;
  font-size: 12px;
  color: #999;
  height: 40px;
  position: relative;
}
// 内容居中对齐
.header-content {
  width: 1190px;
  margin: 0 auto;
}
// 头部定位
.header-bar-position {
  display: flex;
  .position-switch {
    border: 1px solid rgb(230, 224, 224);
    color: rgb(54, 54, 54);
    margin: 0 3px;
  }
  .position-switch:hover {
    color: #fe8c00;
  }
  // 三个地名
  .position-crumb {
    margin: 0 3px;
  }
  // 立即登录
  .login {
    margin-left: 30px;
    color: #fe8c00;
  }
  // 注册
  .register {
    margin: 0 8px;
  }
}
// 头部导航
.header-bar-nav {
  display: flex;
  align-items: center;
  line-height: 40px;
  text-align: center;
  div {
    width: 80px;
  }
  .has-child {
    position: relative;
  }
}

// 头部条下拉菜单
.childone,
.childtwo,
.childthree,
.childfour {
  position: absolute;
  top: -20px;
  background: #fff;
  z-index: 2;
  box-shadow: 1px 0 10px 0 rgba(0, 0, 0, 0.1);
}
// 头部条普通下拉菜单
.listinfo {
  width: 80px;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
}
// 商家中心下拉列表
.bussinfo {
  position: absolute;
  top: 40px;
  right: 0;
  width: 120px;
  background: #fff;
  box-shadow: -1px 5px 8px -2px rgba(0, 0, 0, 0.1);
} // 头部条最大的下拉菜单
.listinfo222 {
  position: absolute;
  top: 40px;
  right: 0;
  width: 1190px;
  background: #fff;
  box-shadow: -1px 5px 8px -2px rgba(0, 0, 0, 0.1);
  .site-title {
    margin: 10px;
  }
}
// 头部主体
.header-body {
  margin: 20px auto 0;
  height: 100px;
}
// 搜索框的外层盒子
.search-box {
  width: 500px;
  display: flex;
  margin-left: 370px;
  position: absolute;
  // 搜索菜单
  .search-list {
    width: 443px;
    height: 50px;
    position: absolute;
    top: 40px;
    left: 0;
    line-height: 20px;
    box-shadow: 0px 2px 7px 0 rgba(19, 149, 255, 0.4);
    border: 1px solid rgb(171, 231, 255);
    // 菜单内热门搜索
    .search-hot {
      font-size: 12px;
      margin: 5px;
    }
  }
}

// logo大小设置
.logo {
  width: 126px;
}
</style>