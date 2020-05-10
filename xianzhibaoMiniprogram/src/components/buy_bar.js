import Taro, { Component, chooseLocation } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "../assets/styles/buy_bar.scss";

export default class FqBuyBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    // 被勾选中的商品数量
    chooseNumber: 1,
    // 全选
    isAllSelect: false
  };

  handleHomeClick() {
    Taro.redirectTo({
      url: "/pages/index/index"
    });
  }
  handleAllSelect() {
    //进行全选操作和取消全选操作
    this.setState({ isAllSelect: !this.state.isAllSelect });
    this.props.isAllSelectFunction();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const buyBarStyle = { padding: "0 0 40rpx 10rpx" };
    // 获取机型
    const system = Taro.getSystemInfoSync();
    const isIphoneX = system.model.indexOf("iPhone X") >= 0;
    let { chooseNumber, isAllSelect } = this.state;
    let {
      products = [],
      type = "cart",
      isCollected = false,
      priceText = "0"
    } = this.props;

    return (
      <View>
        {type === "cart" ? (
          <View className="buyBar" style={isIphoneX ? buyBarStyle : {}}>
            {/* 当有购物车数据的时候，显示购物结算条 */}
            {products.length !== 0 ? (
              <View className="buyBarContainer">
                <View className="allSelect">
                  <AtIcon
                    value="check-circle"
                    size="20"
                    color={isAllSelect ? "#6190e8" : "#c1c1c1"}
                    onClick={this.handleAllSelect.bind(this)}
                  />
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
        ) : null}
        {type === "product" ? (
          <View className="productBuyBar">
            <View className="box">
              <AtIcon prefixClass="icon" value="shouye" size="20" />
              <Text>首页</Text>
            </View>
            <View
              className="box"
              style={{ color: isCollected ? "#6190e8" : "#000" }}
            >
              <AtIcon prefixClass="icon" value="collection" size="20" />
              <Text>{isCollected ? "已收藏" : "收藏"}</Text>
            </View>
            <View className="box">
              <AtIcon prefixClass="icon" value="gouwuche" size="20" />
              <Text>购物车</Text>
            </View>
            <View className="buy">立即购买</View>
          </View>
        ) : null}
      </View>
    );
  }
}
