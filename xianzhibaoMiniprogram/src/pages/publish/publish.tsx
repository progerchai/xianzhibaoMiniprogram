import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqBottom from "../../components/bottom";

import "./publish.scss";

class Publish extends Component {
  config = {
    navigationBarTitleText: "发布"
  };
  state = {};
  render() {
    return (
      <View className="container">
        <FqBottom current={2}></FqBottom>
      </View>
    );
  }
}

export default Publish;
