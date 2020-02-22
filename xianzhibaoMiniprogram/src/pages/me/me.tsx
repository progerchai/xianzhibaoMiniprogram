import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqBottom from "../../components/bottom";
import { AtTabs, AtTabsPane } from "taro-ui";

import "./me.scss";

class Me extends Component {
  config = {
    navigationBarTitleText: "我的"
  };
  state = {};
  render() {
    return (
      <View className="container">
        <FqBottom current={4}></FqBottom>
      </View>
    );
  }
}

export default Me;
