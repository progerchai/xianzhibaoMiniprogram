/*
 *@description: artical page ,used to show the active introduce image
 *@author: progerchai
 *@e-mail: progerchai@gmail.com
 *@date: 2020-03-16 19:43:48
 */
import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

import "./activity.scss";
import { fail } from "assert";

class Artical extends Component {
  config = {
    navigationBarTitleText: "活动详情"
  };
  state = {};
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillMount() {
    Taro.showLoading({
      title: "loading",
      mask: true
    }).then(
      //loading
      () => {},
      //fail
      () => {
        Taro.showToast({
          title: "加载失败",
          icon: "none",
          duration: 2000
        });
      }
    );
  }

  onLoadImg() {
    Taro.hideLoading();
  }

  componentDidHide() {}

  render() {
    var { active_url } = this.$router.params;
    return (
      <View className="container">
        <Image
          className="artical_img"
          src={active_url}
          mode="widthFix"
          onLoad={this.onLoadImg.bind(this)}
        ></Image>
      </View>
    );
  }
}

export default Artical;
