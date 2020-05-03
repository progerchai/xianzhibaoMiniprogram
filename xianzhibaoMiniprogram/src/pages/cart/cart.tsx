import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqBottom from "../../components/bottom";
import FqBuyBar from "../../components/buy_bar";
import NoData from "../../components/no_data";
import FqCartList from "../../components/cart_list";
// import { add, minus, asyncAdd } from '../../actions/counter'

import "./cart.scss";

class Cart extends Component {
  config = {
    navigationBarTitleText: "购物车"
  };
  state = {
    products: [
      {
        sellerInfo: { nickName: "哎呦喂。", userInfoPage: 12 },
        productList: [
          {
            pid: 1,
            pImg:
              "https://a.vpimg2.com/upload/merchandise/pdcpos/1100005068/2020/0318/156/85c8923e-acaa-4a54-9120-9b59191bf0f4.jpg",
            price: 139.0,
            number: 1,
            description:
              "温碧泉八杯睡补水保湿水乳套装，啥衮服水乳液面霜男女化妆护肤品",
            modelText: "八杯水套盒",
            isChoosed: false
          },
          {
            pid: 2,
            pImg:
              "https://img.alicdn.com/img/bao/uploaded/i4/i4/2959591039/O1CN01DEz3E01JXu1qhmdIL_!!0-item_pic.jpg_540x540Q50s50.jpg",
            price: 399.5,
            number: 1,
            description: "D07-POLO保罗福瑞德马球运动系列",
            modelText: "",
            isChoosed: false
          }
        ],
        isAllChoosed: false
      },
      {
        sellerInfo: { nickName: "厉害呀飞～", userInfoPage: 12 },
        productList: [
          {
            pid: 1,
            pImg:
              "https://a.vpimg2.com/upload/merchandise/pdcpos/1100005068/2020/0318/156/85c8923e-acaa-4a54-9120-9b59191bf0f4.jpg",
            price: 139.0,
            number: 1,
            description:
              "温碧泉八杯睡补水保湿水乳套装，啥衮服水乳液面霜男女化妆护肤品",
            modelText: "八杯水套盒",
            isChoosed: false
          }
        ],
        isAllChoosed: false
      }
    ]
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
        {products.length === 0 ? (
          <NoData desc={"购物车为空哦"} icon={"wushuju"}></NoData>
        ) : null}
        <FqCartList products={this.state.products} />
        <FqBuyBar products={this.state.products} />
        <FqBottom current={3}></FqBottom>
      </View>
    );
  }
}

export default Cart;
