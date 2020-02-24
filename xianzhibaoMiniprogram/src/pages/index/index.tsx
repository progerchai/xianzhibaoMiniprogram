import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqBottom from "../../components/bottom";
import FqSearchBar from "../../components/search_bar";
// import { add, minus, asyncAdd } from '../../actions/counter'

import "./index.scss";

class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="container">
        <FqSearchBar searchType={1}></FqSearchBar>
        <FqBottom current={0}></FqBottom>
      </View>
    );
  }
}

export default Index;
