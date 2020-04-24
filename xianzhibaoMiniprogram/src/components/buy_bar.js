import Taro, { Component, chooseLocation } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "../assets/styles/buy_bar.scss";

export default class FqBuyBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    // 伪数据
    products: [{}, {}],
    // 被勾选中的商品数量
    chooseNumber: 1,
    // 全选
    isAllSelect: false,
    // 商品总价格
    priceText: "298.00"
  };

  handleHomeClick() {
    Taro.redirectTo({
      url: "/pages/index/index"
    });
  }
  handleAllSelect() {
    //进行全选操作和取消全选操作
    this.setState({ isAllSelect: !this.state.isAllSelect });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const buyBarStyle = { padding: "0 0 40rpx 10rpx" };
    // 获取机型
    const system = Taro.getSystemInfoSync();
    const isIphoneX = system.model.indexOf("iPhone X") >= 0;
    let { product, chooseNumber, isAllSelect, priceText } = this.state;

    return (
      <View className="buyBar" style={isIphoneX ? buyBarStyle : {}}>
        {/* 当有购物车数据的时候，显示购物结算条 */}
        {product.length !== 0 ? (
          <View className="buyBarContainer">
            <View className="allSelect">
              <AtIcon
                value="check-circle"
                size="20"
                color={isAllSelect ? "#6190e8" : "#c1c1c1"}
                onClick={this.handleAllSelect.bind(this)}
              ></AtIcon>
              <Text className="selectText">全选</Text>
            </View>
            <View className="payNumber">
              <View className="payNumberText">合计：</View>
              <View className="allPrice">
                <Text className="priceText">{priceText}</Text>
                <Text className="transportFee">不含运费</Text>
              </View>
            </View>
            <View className="pay">
              <Text>{`结算${
                chooseNumber ? "( " + chooseNumber + " )" : ""
              }`}</Text>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}
