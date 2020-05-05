/*
 *@description: 公告轮播组件
        noticeText 文字广播内容 string
        fontColor 字体颜色 string 默认#6d511e
        bgColor  广播背景颜色 string 默认#fffbe6
 *@author: progerchai
 *@date: 2020-02-24 11:19:59
 */
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "../assets/styles/scroll_notice.scss";
// import "../assets/fonts/iconfont/iconfont.scss";
export default class FqScrollNotice extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      noticeText: ""
    };
  }
  state = {
    length: 375,
    windowWidth: 0,
    marqueePace: 1, //滚动速度
    marqueeDistance: 10, //初始滚动距离
    size: 4,
    fontColor: "#6d511e",
    bgColor: "#fffbe6"
  };
  componentWillMount() {
    const { noticeText, fontColor, bgColor } = this.props;
    this.setState({ noticeText, fontColor, bgColor });

    let length = noticeText.length * 14; //文字长度,一个文字14px
    let windowWidth = Taro.getSystemInfoSync().windowWidth; // 屏幕宽度
    this.setState({ length, windowWidth, marqueeDistance: windowWidth }, () => {
      this.run(length);
    });
  }

  run = length => {
    let countTime = setInterval(() => {
      if (
        this.state.marqueeDistance * 2 <=
        -this.state.windowWidth - this.state.length
      ) {
        this.setState({ marqueeDistance: this.state.windowWidth });
      } else {
        this.setState({ marqueeDistance: this.state.marqueeDistance - 1 });
      }
      this.run(length);
      clearInterval(countTime);
    }, 20);
  };
  render() {
    let { noticeText, bgColor, fontColor } = this.state;
    return (
      <View className="scroll-wrap" style={{ backgroundColor: bgColor }}>
        <View className="left-icon">
          <AtIcon prefixClass="icon" value="laba" size="20" color="#F00" />
        </View>
        <View
          className="scroll overflow font28 relative"
          style={{ color: fontColor }}
        >
          <View
            className="marquee_text"
            style={{ left: this.state.marqueeDistance + "px" }}
          >
            {noticeText}
          </View>
        </View>
      </View>
    );
  }
}
