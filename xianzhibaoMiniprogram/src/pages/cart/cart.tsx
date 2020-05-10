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
    pageAllChoose: false,
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
    ],
    priceText: "0"
  };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  //计算总价
  compouteTotalPrice(totalPrice) {
    console.log("totalPrice", totalPrice);
    let priceText = (totalPrice / 100).toFixed(2);
    console.log(priceText);
    this.setState({ priceText });
  }

  //购物车整页全选-与取消
  isAllSelectFunction() {
    let pageAllChoose = this.state.pageAllChoose;
    let products = this.state.products;
    products.forEach(product => {
      product.productList.forEach(element => {
        element.isChoosed = !pageAllChoose;
      });
      product.isAllChoosed = !pageAllChoose;
    });
    this.setState({ products, pageAllChoose: !pageAllChoose });
  }
  render() {
    let { products, priceText } = this.state;
    return (
      <View className="container">
        {products.length === 0 ? (
          <NoData desc={"购物车为空哦"} icon={"wushuju"} />
        ) : null}
        <FqCartList
          products={this.state.products}
          compouteTotalPrice={this.compouteTotalPrice.bind(this)}
        />
        <FqBuyBar
          products={this.state.products}
          priceText={priceText}
          isAllSelectFunction={this.isAllSelectFunction.bind(this)}
        />
        <FqBottom current={3} />
      </View>
    );
  }
}

export default Cart;
