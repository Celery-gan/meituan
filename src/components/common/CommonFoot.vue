<template>
  <div>
    <div class="header-content">
      <div v-for="(item,index) in footList" :key="item.id" class="footer-items">
        <div v-for="(item1,index1) in item" :key="item1.id">
          <div v-if="index!==4 ||index1===0 " class="footer-title">{{item1.title}}</div>
          <div v-else class="footer-title2">{{item1.title}}</div>
          <div v-for="item2 in item1.details" :key="item2.id" :class="{mouse:index<4}">{{item2}}</div>
        </div>
      </div>
    </div>
    <div class="header-content1">
      <div class="footer-copyright flexbtw">
        <div>
          <p>
            ©美团网团购 meituan.com
            <a
              href="http://www.beian.miit.gov.cn/"
              style="margin-left: 20px;"
            >京ICP证070791号</a>
            <a
              href="http://www.beianbeian.com/beianxinxi/b00ef42627c62ae577c8e4a086b322a0.html"
            >京ICP备10211739号</a>
          </p>
          <p>
            <a
              href="https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/tv"
              target="_blank"
            >广播电视节目制作经营许可证（京）字第03889号</a>
          </p>
          <p>
            <a
              href="https://portal-portm.meituan.com/webpc/protocolmanage/foodlicense"
              target="_blank"
            >食品经营许可证</a>
            <a
              href="https://portal-portm.meituan.com/webpc/protocolmanage/medicalcertificate"
              target="_blank"
            >互联网药品信息服务资格证</a>
          </p>
          <p>
            <a
              href="https://portal-portm.meituan.com/webpc/protocolmanage/medicalequipment"
              target="_blank"
            >医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
          </p>
        </div>
        <div>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502025545"
            target="_blank"
          >京公网安备11010502025545号</a>
          <div class="flexbtw">
            <a
              class="bus-license"
              href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&amp;serial=11000020190617184241000003572274-SAIC_SHOW_10002020190618102726868&amp;signData=MEQCIMo7nivRikGQc6WsX/jx0IcZ46irhkjszdhhg4kv17uBAiD78duadRu3XX5WyuE+duSrhPmdVUFgr7cN1iV/WSv4uw=="
              title="营业执照"
              target="_blank"
            >
              <img
                src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e"
              />
              <p>北京三快科技有限公司</p>
            </a>
            <a
              class="sp-ft sp-ft--record"
              href="http://www.beianbeian.com/beianxinxi/b00ef42627c62ae577c8e4a086b322a0.html"
              title="备案信息"
              target="_blank"
            >备案信息</a>
            <a
              class="sp-ft sp-ft--knet"
              href="http://t.knet.cn/tsearch/detail?keyword=meituan.com"
              title="可信网站认证"
              target="_blank"
            >可信网站</a>
            <a
              class="sp-ft sp-ft--12315"
              href="http://www.bj315.org/xfwq/lstd/201209/t20120910_3344.shtml?dnrpluojqxbceiqq"
              title="12315消费争议"
              target="_blank"
            >12315消费争议</a>
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
      footList: [
        [
          {
            title: "用户帮助",
            details: [
              "申请退款",
              "查看美团券密码",
              "常见问题",
              "用户协议",
              "隐私政策",
              "反诈骗公告",
              "消费者权益保障"
            ]
          },
          {
            title: "美团服务",
            details: [
              "美团外卖",
              "美团酒店",
              "猫眼电影",
              "美团配送",
              "美团云",
              "大众点评",
              "美团民宿",
              "无人配送"
            ]
          }
        ],
        [
          {
            title: "商家合作",
            details: [
              "美团餐饮商户中心",
              "美食商家入驻(非外卖)",
              "美团外卖开店申请",
              "美团收银官网",
              "外卖配送加盟申请",
              "美团点评餐饮学院",
              "酒店商家入驻",
              "境内度假商家入驻",
              "综合商家入驻",
              "美团民宿房东商家入驻",
              "商家开票申请",
              "美团点评智能收银机",
              "美团点评收单",
              "美团点评餐饮开放平台",
              "免费使用美团排队",
              "快驴进货商家合作",
              "美团闪购商家入驻"
            ]
          }
        ],

        [
          {
            title: "代理商加盟",
            details: [
              "美团外卖代理商招募",
              "到店餐饮代理商招募",
              "非餐饮代理商招募",
              "美团联盟",
              "美团收银招募线上分销商",
              "美团点评5S服务商招募",
              "美团收单渠道代理商招募"
            ]
          },
          {
            title: "美团规则",
            details: ["规则中心", "规则目录", "规则评议院"]
          }
        ],
        [
          {
            title: "关注美团",
            details: ["美团新浪微博"]
          },
          {
            title: "公司信息",
            details: [
              "关于我们",
              "投资者关系",
              "加入我们",
              "商户诚信公约及管理办法",
              "保险经纪资质"
            ]
          },
          {
            title: "廉正举报",
            details: ["廉政邮箱"]
          },
          {
            title: "知识产权",
            details: ["知识产权维权平台"]
          }
        ],
        [
          {
            title: "消费者服务热线",
            details: [
              "外卖消费者：10109777",
              "猫眼消费者：10105335",
              "其他消费者：10107888"
            ]
          },
          {
            title: "商家服务热线",
            details: [
              "外卖&餐饮商家：10105557",
              "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107"
            ]
          },
          {
            title: "投诉举报热线",
            details: [
              "违法和不良信息举报电话：4006018900",
              "举报邮箱：tousujubao@meituan.com"
            ]
          },
          {
            title: "商家自助入驻美团入口",
            details: []
          },
          {
            title: "供应商注册入口",
            details: []
          }
        ]
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
.header-content {
  width: 1190px;
  margin: 40px auto 10px;
  padding: 40px 45px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-evenly;
}
.header-content1 {
  width: 1190px;
  margin: 20px auto 10px;
  a {
    color: rgb(138, 138, 138);
  }
}
.footer-title {
  width: 180px;
  margin: 30px 3px 10px;
  line-height: 30px;
  font-size: 14px;
  color: #333;
}
.footer-title2 {
  width: 180px;
  margin: 8px 0;
  line-height: 30px;
  font-size: 14px;
  color: #333;
}
.footer-items {
  width: 18%;
  line-height: 24px;
}
</style>