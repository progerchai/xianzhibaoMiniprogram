import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqBottom from "../../components/bottom";
import FqBuyBar from "../../components/buy_bar";
import NoData from "../../components/no_data";
// import { add, minus, asyncAdd } from '../../actions/counter'

import "./cart.scss";

class Cart extends Component {
  config = {
    navigationBarTitleText: "购物车"
  };
  state = {
    products: []
  };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let { products } = this.state;
    return (
      <View className="container">
        {products.length ? (
          <View></View>
        ) : (
          <NoData desc={"购物车为空哦"} icon={"wushuju"}></NoData>
        )}
        <FqBuyBar></FqBuyBar>
        <FqBottom current={3}></FqBottom>
      </View>
    );
  }
}

export default Cart;
