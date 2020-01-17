<template>
  <div class="common-header">
    <!-- 头部条 -->
    <div class="header-bar">
      <div class="header-content flexbtw">
        <!-- 定位 -->
        <div class="header-bar-position">
          <div>
            <i class="ivu-icon ivu-icon-ios-locate header-location"></i>
            <span v-if="mycity===''">{{usercity}}</span>
            <span v-else>{{mycity}}</span>
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
          <div class="mouse phone-app">手机APP</div>
          <!-- 商家中心 -->
          <div class="has-child" @mouseenter="immigrate = 2" @mouseleave="immigrate = 0">
            <div v-if="immigrate!==2">商家中心</div>
            <div class="childtwo" v-if="immigrate===2">
              <div class="listinfo mouse">商家中心</div>
              <div class="bussinfo">
                <div v-for="item in Businesslist" :key="item.id" class="mouse">{{item}}</div>
              </div>
            </div>
          </div>
          <!-- 美团规则 -->
          <div class="has-child" @mouseenter="immigrate = 3">
            <div v-if="immigrate!==3">美团规则</div>
            <div class="childthree" v-if="immigrate===3" @mouseleave="immigrate = 0">
              <div v-for="item in rulelist" :key="item.id" class="listinfo mouse">
                <div>{{item}}</div>
              </div>
            </div>
          </div>
          <!-- 网站导航 -->
          <div class="has-child" @mouseenter="immigrate = 4" @mouseleave="immigrate = 0">
            <div v-if="immigrate!==4">网站导航</div>
            <div class="childfour" v-if="immigrate===4">
              <div class="listinfo mouse">网站导航</div>
              <div class="listinfo222 flexeve">
                <div v-for="(item,index) in navigation" :key="item.id">
                  <div class="site-title">{{item.name}}</div>
                  <!-- 酒店 -->

                  <div v-if="index===0" class="nav-hotels">
                    <div v-for="(item1) in item.module" :key="item1.id" class="mouse">{{item1}}</div>
                  </div>

                  <!-- 食物 -->
                  <div v-if="index===1" class="nav-foods">
                    <div v-for="(item1) in item.module" :key="item1.id" class="mouse">{{item1}}</div>
                  </div>
                  <!-- 电影 -->
                  <div v-if="index===2" class="nav-movies">
                    <div v-for="(item1) in item.module" :key="item1.id" class="mouse">{{item1}}</div>
                  </div>
                  <!-- 手机应用 -->
                  <div v-if="index===3" class="nav-apply">
                    <div v-for="(item1) in item.module" :key="item1.id">
                      <img :src="item1" alt />
                    </div>
                  </div>
                </div>
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
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            alt="美团"
            class="logo"
            @click="gotohome"
          />
        </div>
        <div class="search-box">
          <i-input
            v-model="searches"
            size="large"
            placeholder="搜索商家或地点"
            style="width: 450px"
            @on-focus="immigrate=5"
            @on-blur="immigrate=0"
          ></i-input>
          <i-button type="warning" icon="ios-search"></i-button>
          <div v-if="immigrate===5" class="search-list">
            <div v-if="searches.trim()===''" class="search-hot">热门搜索</div>
            <div v-else>
              <div v-for="item in searchlist" :key="item.id" class="search-result">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-slot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 隐藏下拉菜单的标志符，当不为零时会显示一些隐藏的内容
      immigrate: 0,
      // 定位城市
      usercity: "",
      // 城市具体信息
      crumb: [],
      minelist: ["我的美团", "我的订单", "我的收藏", "抵用券", "账号设置"],
      Businesslist: [
        "美团餐饮商户中心",
        "登录商家中心",
        "美团智能收银",
        "我想合作",
        "手机免费开店",
        "餐饮代理商招募",
        "商家申请开票",
        "免费合作美团排队"
      ],
      rulelist: ["美团规则", "规则中心", "规则目录", "规则评议院"],
      navigation: [
        {
          name: "酒店旅游",
          module: [
            "国际机票",
            "火车票",
            "民宿",
            "经济型酒店",
            "主题酒店",
            "商务酒店",
            "公寓",
            "豪华酒店",
            "客栈",
            "青年旅社",
            "度假酒店",
            "别墅",
            "农家院"
          ]
        },
        {
          name: "吃美食",
          module: ["烤鱼", "特色小吃", "烧烤", "自助餐", "火锅", "代金券"]
        },
        {
          name: "看电影",
          module: [
            "热映电影",
            "热门影院",
            "热映电影口碑榜",
            "最受期待电影",
            "国内票房榜",
            "北美票房榜",
            "电影排行榜"
          ]
        },
        {
          name: "手机应用",
          module: [
            "https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png",
            "https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png",
            "https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png",
            "https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png",
            "https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
          ]
        }
      ],
      // 搜索关键字
      searches: "",
      // 搜索结果数组
      searchlist: []
    };
  },
  components: {},
  methods: {
    // 获取定位
    getcity() {
      if (localStorage.getItem("cityname")) {
        let strs = localStorage.getItem("cityname").split(",");
        this.usercity = strs[0];
        this.getcrumb();
      } else {
        this.$api
          .getPosition()
          .then(res => {
            let arr = res.data.split(",");
            let arr2 = arr[1].split(":");
            let len = arr2[1].length - 1;
            this.usercity = arr2[1].slice(2, len - 1);
            localStorage.setItem("cityname", this.usercity);
            this.getcrumb();
          })
          .catch(err => {
            console.log("err");
          });
      }
    },
    // 获取城市具体信息
    getcrumb() {
      this.$api
        .getCrumbs(this.usercity)
        .then(res => {
          // console.log(res);
          this.crumb = res.data.areas;
          this.crumb = this.crumb.slice(0, 3);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getProducts() {
      this.$api
        .getSearchTop(this.usercity, this.searches)
        .then(res => {
          // console.log(res);
          this.searchlist = res.data.top;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //切换城市按钮
    changecitys() {
      if (this.$route.path !== "/changecity") {
        this.$router.push("/changecity");
      } else {
        history.go(0);
      }
    },
    // 美团logo 返回首页
    gotohome() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      } else {
        history.go(0);
      }
    }
  },
  mounted() {
    this.getcity();
  },
  watch: {
    searches(val) {
      if (this.searches.trim() !== "") {
        this.getProducts();
      }
    }
  },
  computed: {
    mycity() {
      return this.$store.state.mycity;
    }
  }
};
</script>

<style scoped lang='scss'>
// 鼠标移入事件

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
  .phone-app {
    width: 80px;
  }
  .has-child {
    width: 80px;
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
  width: 110px;
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
    margin-top: 10px;
    font-size: 16px;
    color: #333;
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
    z-index: 2;
    background: rgb(255, 255, 255);
    width: 443px;
    position: absolute;
    top: 36px;
    left: 0;
    line-height: 20px;
    box-shadow: 0px 2px 7px 0 rgba(19, 149, 255, 0.4);
    border: 1px solid rgb(171, 231, 255);
    // 未搜索时的热门搜索
    .search-hot {
      font-size: 12px;
      margin: 5px;
    }
    // 搜索结果显示
    .search-result {
      padding-left: 5px;
    }
    .search-result:hover {
      background: rgb(248, 248, 248);
      color: #fe8c00;
    }
  }
}
// logo大小设置
.logo {
  width: 126px;
}
.nav-hotels {
  height: 220px;
  margin: 5px;
  width: 280px;
  display: flex;
  line-height: 30px;
  flex-wrap: wrap;
  div {
    width: 90px;
  }
}
.nav-foods {
  height: 220px;
  width: 170px;
  display: flex;
  flex-wrap: wrap;
  line-height: 30px;
  div {
    width: 80px;
  }
}
.nav-movies {
  height: 220px;
  width: 100px;
  line-height: 30px;
}
.nav-apply {
  height: 220px;
  width: 300px;
  display: flex;
  img {
    margin: 30px 0 0;
    width: 60px;
  }
}
.top-slot {
  width: 500px;
  margin: 0 auto;
}
</style>