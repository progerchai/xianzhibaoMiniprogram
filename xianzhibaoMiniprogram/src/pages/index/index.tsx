import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqSearchBar from "../../components/search_bar";
import FqSwiperImg from "../../components/swiper_img";
import FqMenu from "../../components/menu";
import FqBottom from "../../components/bottom";
import FqProductList from "../../components/product_list";
import "./index.scss";
import Skeleton from "../../components/Skeleton";
import Login from "../../components/login";
import service from "../../service";

class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  state = {
    openid: null,
    userInfo: null,
    hasShowedLogin: false,
    loading: true,
    city: null,
    swiperList: [],
    product_list: []
  };
  componentDidShow() {
    Taro.getStorage({
      key: "userInfo",
      success: res => {
        this.setState({ userInfo: res.data });
      }
    });
    Taro.getStorage({
      key: "hasShowedLogin",
      success: res => {
        this.setState({ hasShowedLogin: res.data });
      }
    });
  }
  //初始化显示过获取用户信息触发函数
  showedLoginFunction() {
    console.log("触发了");
    this.setState({ hasShowedLogin: true, userInfo: { name: 1 } });
    Taro.setStorage({ key: "hasShowedLogin", data: true });
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    Taro.getStorage({
      key: "userInfo",
      success: res => {
        console.log(res.data);
      }
    });
    console.log(this.props, nextProps);
  }
  componentDidMount() {
    //节点加载完毕，关闭骨架屏
    this.setState({ loading: false });
    this.requestIndexMessage();
    this.getIndexProducts();
    //获取地址
    let city = Taro.getStorageSync("city");
    if (city) {
      this.setState({ city });
    } else {
      this.getLocation();
    }
  }
  // 获取首页商品数据
  async getIndexProducts() {
    const result = await service.index_page.get_index_products();
    if (result) {
      this.setState({ product_list: result.goods });
    }
  }
  // 获取用户的地理位置
  async getLocation() {
    let point = await Taro.getLocation();
    let position: any = await this.reverseGeocoder(point);
    let city = position.result.address_component.city;
    console.log(position);
    this.setState({ city });
    Taro.setStorageSync("city", city);
  }
  // 坐标逆解析方法
  reverseGeocoder(obj) {
    var QQMapWX = require("../../utils/qqmap-wx-jssdk1.2/qqmap-wx-jssdk");
    var qqmapsdk = new QQMapWX({
      key: "APTBZ-BN236-BQ6S2-EA7JA-S3XGS-HIF3J" // 必填
    });
    return new Promise((resolve, reject) => {
      qqmapsdk.reverseGeocoder({
        location: obj,
        success(res) {
          resolve(res);
        },
        fail(res) {
          reject(res);
        }
      });
    });
  }
  //获取首页数据
  async requestIndexMessage() {
    const result = await service.index_page.get_index_message();
    this.setState({ swiperList: result.imglist });
  }

  render() {
    let { swiperList, userInfo, hasShowedLogin } = this.state;
    return (
      <View className={userInfo ? "container" : "container overflowContent"}>
        <Skeleton
          loading={this.state.loading}
          searchbar
          boxImg
          menu
          body
          action
        >
          <View>
            {!userInfo && !hasShowedLogin ? (
              <Login
                showedLoginFunction={this.showedLoginFunction.bind(this)}
              />
            ) : null}
            <FqSearchBar
              searchType={1}
              isPosition={true}
              position={this.state.city}
            />
            <FqSwiperImg swiperList={swiperList} />
            <FqMenu />
            <FqProductList product_list={this.state.product_list} />
          </View>
        </Skeleton>
        <FqBottom current={0} />
      </View>
    );
  }
}

export default Index;
