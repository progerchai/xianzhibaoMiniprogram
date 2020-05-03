import { Component } from "@tarojs/taro";
import "../assets/styles/menu.scss";
import { View, Text } from "@tarojs/components";
import { AtIcon, AtInputNumber } from "taro-ui";
import "../assets/styles/cart_list.scss";
export default class FqCartList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    //   userInfoPage为卖家信息页面
    cartList: []
  };
  componentDidMount() {
    this.setState({ cartList: this.props.products });
  }
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
  handleItemSelect(productIndex, index) {
    console.log("单个商品选择或取消", productIndex, index);
    let cartList = this.state.cartList;
    let chooseFlag = cartList[index].productList[productIndex].isChoosed;
    cartList[index].productList[productIndex].isChoosed = !chooseFlag;
    this.setState({ cartList });
    // TODO:当同一个卖家所有商品都被选择后，外部当全选按钮也应该是选中状态
  }
  //购物车商品数量变化函数
  handleNumberChange(productIndex, index, value) {
    let cartList = this.state.cartList;
    cartList[index].productList[productIndex].number = value;
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
                    {/* TODO:点击卖家姓名、箭头都跳转到卖家信息页中 */}
                    <Text className="nickName">{item.sellerInfo.nickName}</Text>
                    <AtIcon prefixClass="icon" value="right" size="18"></AtIcon>
                  </View>
                  {item.productList.map((product, productIndex) => {
                    return (
                      <View className="cartItemBody">
                        <View className="bodyLeft">
                          <AtIcon
                            value="check-circle"
                            size="20"
                            color={product.isChoosed ? "#6190e8" : "#c1c1c1"}
                            onClick={this.handleItemSelect.bind(
                              this,
                              productIndex,
                              index
                            )}
                          ></AtIcon>
                          <Image
                            className="product_image"
                            src={product.pImg}
                            mode="aspectFill"
                          ></Image>
                        </View>
                        <View className="bodyRight">
                          <Text className="description">
                            {product.description}
                          </Text>
                          <Text className="modelText">
                            {product.modelText !== "" && product.modelText
                              ? product.modelText
                              : ""}
                          </Text>
                          <View className="bottomContent">
                            <Text className="price">{`¥ ${product.price}`}</Text>
                            <View className="number">
                              <AtInputNumber
                                min={1}
                                step={1}
                                value={product.number}
                                onChange={this.handleNumberChange.bind(
                                  this,
                                  productIndex,
                                  index
                                )}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              );
            })
          : null}
        <View className="bottomSpace"></View>
      </View>
    );
  }
}
