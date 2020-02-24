import Taro, { Component } from "@tarojs/taro";
import { AtTabBar } from "taro-ui";

// import _ from '../utils/lodash.min';
import "../assets/styles/bottom.scss";
import { View } from "@tarojs/components";
export default class FqBottom extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    // eslint-disable-next-line taro/duplicate-name-of-state-and-props
    current: 0,
    tabs: [
      {
        title: "首页",
        iconType: "iconfont icon-shouye",
        page: "/pages/index/index"
      },
      {
        title: "分类",
        iconType: "iconfont icon-list",
        page: "/pages/classification/classification"
      },
      {
        title: "购物车",
        iconType: "iconfont icon-gouwuche",
        page: "/pages/cart/cart"
      },
      {
        title: "活动",
        iconType: "iconfont icon-huodong",
        page: "/pages/activity/activity"
      },
      {
        title: "我的",
        iconType: "iconfont icon-gerenzhongxin",
        page: "/pages/me/me",
        dot: true
      }
    ],
    model: ""
  };

  handleTabClick(e) {
    if (e === this.state.current) return;
    Taro.redirectTo({ url: this.state.tabs[e].page });
  }

  componentWillReceiveProps(nextProps) {}

  async componentDidMount() {
    // 获取机型
    const system = await Taro.getSystemInfo();
    this.setState({ model: system.model });
    // this.props.setCartList(await service.cart.cartList());
  }

  async componentDidShow() {
    const { current } = this.props;
    // 获取机型
    const system = await Taro.getSystemInfo();
    this.setState({ current, model: system.model });
  }

  render() {
    const { model } = this.state;
    const menuStyle = { padding: "7rpx 0 6rpx" };
    // 根据机型适配底部菜单栏
    const menuStyleIphoneX = { padding: "7rpx 0 40rpx 6rpx" };
    const isIphoneX = model.indexOf("iPhone X") >= 0;

    return (
      <AtTabBar
        fixed
        fontSize={10}
        tabList={this.state.tabs}
        onClick={this.handleTabClick.bind(this)}
        current={this.state.current}
        customStyle={isIphoneX ? menuStyleIphoneX : menuStyle}
      />
    );
  }
}
