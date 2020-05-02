import { Component } from "@tarojs/taro";
import "../assets/styles/menu.scss";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "../assets/styles/cart_list.scss";
export default class FqCartList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    //   userInfoPage为卖家信息页面
    cartList: [
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
            modelText: "M80-100斤150-165CM",
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
  handleItemAllSelect(index) {
    console.log("单个卖家商品全选或取消全选");
    let cartList = this.state.cartList;
    let chooseFlag = cartList[index].isAllChoosed;
    cartList[index].isAllChoosed = !chooseFlag;
    cartList[index].productList.map(item => {
      item.isChoosed = !chooseFlag;
    });
    this.setState({ cartList });
  }
  render() {
    let { cartList } = this.state;
    return (
      <View className="cartListContainer">
        {cartList && cartList.length !== 0
          ? cartList.map((item, index) => {
              return (
                <View className="cartItem">
                  <View className="cartItemHeader">
                    <AtIcon
                      value="check-circle"
                      size="20"
                      color={item.isAllChoosed ? "#6190e8" : "#c1c1c1"}
                      onClick={this.handleItemAllSelect.bind(this, index)}
                    ></AtIcon>
                    <AtIcon
                      prefixClass="icon"
                      value="shouye"
                      size="20"
                    ></AtIcon>
                    <Text className="nickName">{item.sellerInfo.nickName}</Text>
                    <AtIcon prefixClass="icon" value="right" size="18"></AtIcon>
                  </View>
                  <View className="cartItemBody">我是商品内容</View>
                </View>
              );
            })
          : null}
      </View>
    );
  }
}
