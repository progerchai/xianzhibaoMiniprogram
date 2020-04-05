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
import service from "../../service";
class Index extends Component {
  config = {
    navigationBarTitleText: "首页",
  };
  state = {
    loading: true,
    swiperList: [],
    product_list: [
      {
        name: "商品1asd",
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
        image_url1: "",
        image_url2: "",
        image_url3: "",
      },
      {
        name: "商品2",
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
        image_url1: "",
        image_url2: "",
        image_url3: "",
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
        image_url1: "",
        image_url2: "",
        image_url3: "",
      },
    ],
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillMount() {}
  componentDidMount() {
    //节点加载完毕，关闭骨架屏
    this.setState({ loading: false });
    this.requestIndexMessage();
  }
  //获取首页数据
  async requestIndexMessage() {
    const result = await service.index_page.get_index_message();
    this.setState({ swiperList: result.imglist });
  }
  render() {
    let { swiperList } = this.state;
    return (
      <View className="container">
        <Skeleton
          loading={this.state.loading}
          searchbar
          boxImg
          menu
          body
          action
        >
          <FqSearchBar
            searchType={1}
            isPosition={true}
            position={"wuhan"}
          ></FqSearchBar>
          <FqSwiperImg swiperList={swiperList}></FqSwiperImg>
          <FqMenu></FqMenu>
          <FqProductList product_list={this.state.product_list}></FqProductList>
        </Skeleton>
        <FqBottom current={0}></FqBottom>
      </View>
    );
  }
}

export default Index;
