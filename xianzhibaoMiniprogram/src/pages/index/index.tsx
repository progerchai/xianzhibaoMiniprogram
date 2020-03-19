import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqSearchBar from "../../components/search_bar";
import FqSwiperImg from "../../components/swiper_img";
import FqMenu from "../../components/menu";
import FqBottom from "../../components/bottom";
import "./index.scss";
import Skeleton from "../../components/Skeleton";
import service from "../../service";
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  state = {
    loading: true,
    swiperList: []
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
    const result = await service.base.get_index_message();
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
          <FqSearchBar searchType={1}></FqSearchBar>
          <FqSwiperImg swiperList={swiperList}></FqSwiperImg>
          <FqMenu></FqMenu>
        </Skeleton>
        <FqBottom current={0}></FqBottom>
      </View>
    );
  }
}

export default Index;
