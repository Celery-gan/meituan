import service from './index'
// 所有接口的api封装
export default class Api {

    // static search(value, page = 1) {
    //         return service.req('/search', {
    //             value,
    //             page
    //         })
    //     }
    // 获取定位   http://localhost:8888/position
    static getPosition() {
        return service.req("/position")
    }

    // 获取所有省份      // http://localhost:8888/province
    static getProvince() {
            return service.req("/province")
        }
        // 获取省份所有城市   // http://localhost:8888/citys/省份id
    static getCitys(id) {
            return service.req(`/citys/${id}`)
        }
        // 获取城市具体信息    // http://localhost:8888/crumbs?city=城市名
    static getCrumbs(cityname) {
            return service.req(`/crumbs?city=${cityname}`)
        }
        // 省市关联   // http://localhost:8888/city
    static getCity() {
            return service.req("/city")
        }
        // 热门城市    // http://localhost:8888/hotCity
    static getHotCity() {
        return service.req("/hotCity")
    }

    // 首页轮播图 旁 全部分类     // http://localhost:8888/menu
    static getMenu() {
            return service.req("/menu")
        }
        // 热门搜索 景点     // http://localhost:8888/hotPlace?city=城市名
    static getHotPlace(cityname) {
            return service.req(`/hotPlace?city=${cityname}`)
        }
        // 首页搜索   搜索建议     // http://localhost:8888/searchTop?city=城市名&input=关键词
    static getSearchTop(cityname, inputs) {
            return service.req(`/searchTop?city=${cityname}&input=${inputs}`)
        }
        // 根据关键词搜索   // http://localhost:8888/results?city=城市名&keyword=关键词
    static getResults(cityname, inputs) {
            return service.req(`/results?city=${cityname}&keyword=${inputs}`)
        }
        // 商铺详情     // http://localhost:8888/products?keyword=商铺名称&city=城市名
    static getProducts(shopname, cityname) {
            return service.req(`/products?keyword=${shopname}&city=${cityname}`)
        }
        // 有格调 (调关键词搜索接口)
        // 对应的tab
        // 约会聚餐 => 美食
        // 丽人spa => 丽人
        // 电影演出 => 电影
        // 品质出游 => 旅游
        // 全部 => 景点

    // 登录
    // http://localhost:8888/users/login  (post)
    // 参数:
    // username: 用户名
    // password: 密码
    static login(username, password) {
            return service.req('/users/login', {
                username,
                password,
            })
        }
        // 注册
        // http://localhost:8888/users/register  (post)
        // 参数:
        // username: 用户名
        // password: 密码
        // email: 邮箱
    static register(username, password, email) {
        return service.req('/users/register', {
            username,
            password,
            email
        })
    }


    // 需要用到的图片路径
    // //s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg
    // //p0.meituan.net/codeman/843d7347cb20d945e4bc39b6403f0515182965.png
    // //p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg
    // //p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg
    // //p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg
    // //s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png
    // //s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg
    // 协议链接
    // http://www.meituan.com/about/terms
}