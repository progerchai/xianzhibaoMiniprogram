import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqBottom from "../../components/bottom";
import FqScrollNotice from "../../components/scroll_notice";

// import { add, minus, asyncAdd } from '../../actions/counter'

import "./activity.scss";

class Activity extends Component {
  config = {
    navigationBarTitleText: "活动"
  };
  state = {};
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="container">
        <FqScrollNotice
          noticeText="我是轮播公告我是轮播公告我是轮播公告公告"
          bgColor="#fffbe6"
          fontColor="#6d511e"
        ></FqScrollNotice>
        <FqBottom current={1}></FqBottom>
      </View>
    );
  }
}

export default Activity;
