import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqSearchBar from "../../components/search_bar";
import FqSwiperImg from "../../components/swiper_img";
import FqCard from "../../components/card";
import FqBottom from "../../components/bottom";
import IconFont from "../../components/iconfont";
import "./index.scss";

class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  state = {
    swiperList: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582521053277&di=f0305c4e7932091c403e0a954adeb79e&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20165_10_13%2Fa3tmof91145777543596.jpg"
    ]
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}
  componentWillMount() {
    const swiperList = [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582521053277&di=f0305c4e7932091c403e0a954adeb79e&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20165_10_13%2Fa3tmof91145777543596.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582521053272&di=5f3be4fac6e317318f69cd50aa8e538a&imgtype=0&src=http%3A%2F%2Fn3-q.mafengwo.net%2Fs10%2FM00%2FE8%2FD5%2FwKgBZ1h8w3OAX569AAD8G9nYTIA12.jpeg%3FimageView2%2F2%2Fw%2F600%2Fh%2F600%2Fq%2F90"
    ];
    this.setState({ swiperList });
  }
  componentDidShow() {}

  componentDidHide() {}

  render() {
    let { swiperList } = this.state;
    return (
      <View className="container">
        <FqSearchBar searchType={1}></FqSearchBar>
        <FqSwiperImg swiperList={swiperList}></FqSwiperImg>
        {/* <FqCard
          title="热搜推荐"
          icon_left="laba"
          message="查看更多"
          icon_right="right"
        ></FqCard> */}
        <IconFont name="book-2"></IconFont>

        <FqBottom current={0}></FqBottom>
      </View>
    );
  }
}

export default Index;
