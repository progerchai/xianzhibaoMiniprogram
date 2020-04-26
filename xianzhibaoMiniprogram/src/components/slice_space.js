/*
 *@description: slice space
 *@author: progerchai
 *@email: progerchai@gmail.com
 *@date: 2020-04-27 00:26:30
 */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
export default class FqsliceSpace extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { width, height, bgcolor } = this.props;
    return (
      <View
        style={{ width: width, height: height, background: bgcolor }}
      ></View>
    );
  }
}
