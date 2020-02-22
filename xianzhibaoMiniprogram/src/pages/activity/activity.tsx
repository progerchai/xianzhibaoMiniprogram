import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqBottom from "../../components/bottom";
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
        <FqBottom current={3}></FqBottom>
      </View>
    );
  }
}

export default Activity;
