<template>
  <div class="home-right flexbtw">
    <div class="home-carousel">
      <Carousel>
        <Carousel-item v-for="item in carousel" :key="item.id" class="home-carous">
          <img :src="item" class="carouse-img" />
        </Carousel-item>
      </Carousel>
    </div>
    <div class="right-imgone">
      <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" />
    </div>
    <div class="home-logins">
      <div class="user-pic">
        <img src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" />
        <div>Hi! 你好</div>
      </div>
      <div class="go-login">
        <i-button shape="circle" size="large" long>注册</i-button>
      </div>
      <div class="go-login">
        <i-button shape="circle" size="large" long>立即登录</i-button>
      </div>
    </div>
    <div class="right-imgtwo">
      <img src="http://p0.meituan.net/codeman/843d7347cb20d945e4bc39b6403f0515182965.png" />
    </div>
    <div class="right-imgtwo">
      <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" />
    </div>
    <div class="right-imgthree">
      <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" />
    </div>
    <div class="right-imgfour">
      <img
        src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
        class="meituan-erweima"
      />
      <div class="meituan-app">美团APP手机版</div>
      <div>
        <span style="color:red">一元起</span> 吃喝玩乐
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图
      carousel: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.home-right {
  width: 79%;
  height: 420px;
}
.home-carousel {
  width: 550px;
}
.home-carous {
  width: 550px;
  .carouse-img {
    width: 100%;
    height: 240px;
  }
}
.right-imgone {
  img {
    width: 150px;
  }
}
.home-logins {
  width: 228px;
  height: 246px;
  text-align: center;
  border: 1px solid rgb(212, 205, 205);
  background: #fff;
}
.user-pic {
  margin: 20px auto 5px;
  border-radius: 50%;
  img {
    width: 75px;
    border-radius: 50%;
    border: 5px solid rgb(212, 205, 205);
  }
  div {
    line-height: 30px;
    font-size: 16px;
  }
}
.go-login {
  width: 120px;
  margin: 5px auto;
  color: #333;
}
.right-imgtwo {
  img {
    width: 270px;
    height: 165px;
  }
}
.right-imgthree {
  img {
    width: 150px;
    height: 165px;
  }
}
.right-imgfour {
  padding: 5px;
  width: 228px;
  height: 165px;
  text-align: center;
  border: 1px solid rgb(212, 205, 205);
  background: #fff;
  img {
    width: 45%;
  }
}
.meituan-app {
  font-size: 16px;
  line-height: 30px;
}

</style>