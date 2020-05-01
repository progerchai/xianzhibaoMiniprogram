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
    userInfo: null,
    hasShowedLogin: false,
    loading: true,
    city: null,
    swiperList: [],
    product_list: [
      {
        name: "榨汁机 88新",
        description:
          "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
        classify: "生活",
        model: "型号",
        files: [],
        depreciation: "66新",
        save_time: "<=一周",
        weight: "<1kg",
        brand: "",
        price: 180,
        size: "",
        pick_place: "",
        image_url1:
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1281982941,672088714&fm=26&gp=0.jpg",
        image_url2: "",
        image_url3: ""
      },
      {
        name: "哑铃 99新",
        description:
          "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
        classify: "生活",
        model: "型号",
        files: [],
        depreciation: "88新",
        save_time: "<=一周",
        weight: "<1kg",
        brand: "",
        price: 40.0,
        size: "",
        pick_place: "",
        image_url1:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2349681196,1745120500&fm=26&gp=0.jpg",
        image_url2: "",
        image_url3: ""
      },
      {
        name: "商品3",
        description:
          "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
        classify: "生活",
        model: "型号",
        files: [],
        depreciation: "99新",
        save_time: "<=一周",
        weight: "<1kg",
        brand: "",
        price: 0.0,
        size: "",
        pick_place: "",
        image_url1:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2349681196,1745120500&fm=26&gp=0.jpg",
        image_url2: "",
        image_url3: ""
      }
    ]
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
    //获取地址
    let city = Taro.getStorageSync("city");
    if (city) {
      this.setState({ city });
    } else {
      this.getLocation();
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
              ></Login>
            ) : null}
            <FqSearchBar
              searchType={1}
              isPosition={true}
              position={this.state.city}
            ></FqSearchBar>
            <FqSwiperImg swiperList={swiperList}></FqSwiperImg>
            <FqMenu></FqMenu>
            <FqProductList
              product_list={this.state.product_list}
            ></FqProductList>
          </View>
        </Skeleton>
        <FqBottom current={0}></FqBottom>
      </View>
    );
  }
}

export default Index;
